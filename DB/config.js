const mongoose = require('mongoose');

const DbConnection = async() =>{
    
try{

    mongoose.connect(process.env.DB_CNN, 
    {useNewUrlParser: true, 
        useUnifiedTopology: true
    });

        console.log('DB Online');

    }catch(error){
        console.log(error);
        throw new error ('error a la hora de iniciar la BD');
    }
}

module.exports = {
DbConnection
}