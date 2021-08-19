

//usuario mongo: admin_user
    // PW: 4ZKBECTQbdskFReS

//iniciar el demonio-> npm run start:dev

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { DbConnection} = require('./DB/config')

// crear servidor express

const app = express();

//config cors 
app.use(cors());

//DB
DbConnection();

//rutas
app.get('/', (req,res)=> {
res.json({
    ok:true,
    msg:'hi bro :D '
})
});


app.listen(process.env.PORT, ()=> {
console.log('servidor ejecutandose en el puerto: '+process.env.PORT)
})

