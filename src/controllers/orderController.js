const orderModel = require('../models/orderModel');
const orderLIneItemModel = require('../models/orderLIneItemModel');
const itemModel = require('../models/itemModel');



const createOder = async function (req,res){

    try{
        const orderData =  req.body;
        
        for(let i=0;i<body.product.length;i++){
            const product = body.product[i].name;
            const item = await itemModel.findOne({productName:product.name, sillPrice:item.sellprice});

            const order = await orderLIneItemModel.create({productName:product.name, sellPrice:item.sellprice});
            body.orderLineItems.push(order._id);
        }
        
        let order = await orderModel.create(orderData);
        res.status(201).send({status:"true", data: order})
    }

    catch(err){
        res.status(500).send({status:false, massage:err.massage})
    }
};




const getOrder = async function (req, res) {
    
  let query = req.query
  try {
     
      let order = await orderModel.find({ isDeleted: "false" });
      if (!order || order.length==0) return res.status(404).send({ status: "false", massage: "No order found", })
      res.status(200).send({ status: "true", message: 'order list', data: order })
  }

  catch (error) {
      console.log("This is the error :", error.message)
      res.status(500).send({ massage: "Error", error: error.message })
  }
}








const deleteOrderById = async function (req, res) {
  try {
      let order = req.order
      if (order) {
          if (order.Deleted == false) {
              order.Deleted = true
              order.save()
              res.status(200).send({status:true, massage: "Your order is deleted successfully",})
          } else{
              res.status(404).send({massage : "already deleted"})
          }
      }
      else {
          res.status(404).send({ status: false, massage: "order dosen't exist" })
      }
  }
  catch(err){
      res.status(500).send({massage : err.message})
  }
  
}





module.exports = {createOder, deleteOrderById, getOrder};

