const mongoose= require('mongoose');


const SemillasSchema= mongoose.Schema({
variedad:{ 
  type: String,
  required: true,
  trim:true
},
custodios: { 
    type: String,
    required: true,
    trim:true
  },
peso:{ 
    type: Number,
    required: true
  },
precio:{ 
    type: Number,
    required:true
  },
});

module.exports=mongoose.model('Semillas',SemillasSchema);
