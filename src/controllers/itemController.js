
const itemModel = require('../models/itemModel');


const getItem = async function (req, res) {
    try {
        let id = req.query.id


        let obj = {
            deleted: false
        }

        if (id) {
            obj.id = id
        }

        let savedData = await itemModel.find(obj)
        if (savedData.length == 0) {
            return res.status(404).send({ status: false, msg: "No such item Available" })
        } else {
            return res.status(200).send({ status: true, data: savedData })
        }
    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


module.exports = {getItem};