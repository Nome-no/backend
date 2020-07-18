const express= require ('express');
const mongoose= require('mongoose');
const cors = require('cors');

require('dotenv/config');

//const bodyParser= require('body-parser');
//PORT 
const port= process.env.PORT || 3000 ;
    

const app= express();

//Middleware

  //app.use('/api/semillas',()=>{

  // console.log('Middleware')
  // });
app.use(express.json());
app.use(cors());

//routes


    app.get('/',(req,res)=>{

    res.send("Hello World!!!");
    
    });
    
 //import routes
 const semillasRoute= require('./routes/semillas');
 
 const clientesRoute= require('./routes/clientes');
 app.use('/clientes',clientesRoute);
 app.use('/semillas',semillasRoute);


// connect DB

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true },{useNewUrlParser: true });



    app.listen(port,()=> console.log(`listening on port ${port}`));