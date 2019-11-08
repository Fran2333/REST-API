const Register = require("./../models/Register");

const insert =(req,res)=>{
    const student = new Register(req.body);
    student.save((error,document)=>{
        if(error)
        return res.status(500).json({
            msg:"hubo un error"
        });
 return res.status(201).json({
     msg:"creado",
     register:document
 })
    })
}

const getRegister = (req,res)=>{
    Register.find({},(error,documents)=>{
     if(error)
     return res.status(500).json({
         msg:"hubo un error"
     });
return res.status(200).json({
    msg:"ok",
    Register:documents
})

    });
};

const getOneRegister = (req,res)=>{
    Register.findById({id:req.params.id},(error,documents)=>{
        if(error)
        return res.status(500).json({
            msg:"hubo un error"
        });
   return res.status(200).json({
       msg:"ok",
       Register:documents
   })
   
       });
}
 const updateRegister = (req, res) => {
    Register.findByIdAndUpdate(
      req.params.RegisterId,
      req.body,
      { new: true },
      (err, register) => {
        if (err) return res.status(500).send(err);
        return res.send(register);
      }
    );
  };
  
  const deleteRegister = (req, res) => {
    Register.findByIdAndRemove(req.params.registerId, (err, register) => {
      if (err) return res.status(500).send(err);
      const response = {
        msg: "Register successfully deleted",
        id: register._id
      };
      return res.status(200).send(response);
    });
  };



module.exports={getRegister,insert,getOneRegister,updateRegister,deleteRegister};
