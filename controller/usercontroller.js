var usermodel = require('../model/usermodel');

exports.insert = async (req,res) => {
    var data = await usermodel.create(req.body);
    
    res.status(200).json({
        status:"success",
        data
    })
}
exports.select_data = async (req,res) => {
    var data = await usermodel.find();
    var status = req.body.status;
    var data2 = await usermodel.findOneAndUpdate({status : status});
   
    res.status(200).json({
        // status:"success",
        data,
        data2,
        status
    })
}
exports.delete_data = async (req,res) => {
    var id = req.params.id;
    var data = await usermodel.findByIdAndDelete(id);

    res.status(200).json({
        status:"data deleted",
    })
}
exports.update_data = async (req,res) => {
    var id = req.params.id;
    var data = await usermodel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"data updated",
        data
    })
}

//======================running=======================
exports.run = async (req,res) => {
    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:"running"});

    res.status(200).json({
        status:"status updated",
        data
    })
}
exports.running = async(req,res) => {
    var data = await usermodel.find({status:"running"});

    res.status(200).json({
        data
    })
}

//======================pending=======================
exports.pending = async (req,res) => {
    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:"pending"});

    res.status(200).json({
        status:"status updated",
        data
    })
}
exports.pending = async(req,res) => {
    var data = await usermodel.find({status:"pending"});

    res.status(200).json({
        data
    })
}

//======================dicline=======================
exports.dicline = async (req,res) => {
    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:"dicline"});

    res.status(200).json({
        status:"status updated",
        data
    })
}
exports.declining = async(req,res) => {
    var data = await usermodel.find({status:"dicline"});

    res.status(200).json({
        data
    })
}

//======================complate=======================
exports.complate = async (req,res) => {
    var data = await usermodel.findByIdAndUpdate(req.params.id,{status:"complated"});

    res.status(200).json({
        status:"status updated",
        data
    })
}
exports.complated = async(req,res) => {
    var data = await usermodel.find({status:"complated"});

    res.status(200).json({
        data
    })
}