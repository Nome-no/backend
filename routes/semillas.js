const express=require('express');
const router= express.Router();
const Semilla= require('../models/Semillas');

//get all semillas
router.route('/').get(async(req,res)=>{
          try {
            const semillas= await Semilla.find();
            res.json(semillas);
          } catch (error) {
            res.json({message: err});
          }
    });



    //add a new semilla

    router.route('/').post(async(req,res)=>{
   
   
      const semilla= new Semilla({
      variedad:req.body.variedad,
      custodios:req.body.custodios,
      peso:req.body.peso,
      precio:req.body.precio

   });

   try {
     const savedSemilla= await semilla.save();
     res.json(savedSemilla);
     console.log('wii');
   } catch (error) {
    res.json({message: err});
   }

    });


  // get an specific semilla  

router.route('/').get('/:semillaId',async(req,res)=>{
try {
  
  const semilla= await Semilla.findById(req.params.semillaId);
      res.json(semilla);
} catch (err) {
  res.json({message: err});

}
 
});

//delete a semilla

router.route('/').delete('/:semillaId',async(req,res)=>{
  try {
    
    const deletedSemilla= await Semilla.remove({_id: req.params.semillaId});
        res.json(deletedSemilla);
  } catch (err) {
    res.json({message: err});
  
  }
   
  });
//update an specific semilla
  router.route('/').patch('/:semillaId',async(req,res)=>{
    try {
    
      const updatedSemilla= await Semilla.findOneAndUpdate({_id: req.params.semillaId},
        {$set: {variedad:req.body.variedad,
                custodios:req.body.custodios,
                peso:req.body.peso,
                precio:req.body.precio

        }}
        
        );
          res.json(updatedSemilla);
          console.log(updatedSemilla);
    } catch (err) {
      res.json({message: err});
    
    }
    });

  module.exports=router;  