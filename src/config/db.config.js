const mongoose=require('mongoose');
const {ATLAS_DB_URL,NODE_ENV }=require('./server.config')
async function connectToDB(){
try{
    
    if(NODE_ENV=='development'){
        await mongoose.connect(ATLAS_DB_URL);

    }
  
}
catch(error){
    console.log("uanle tio connect db sreeverr");
console.log(error);
}
}

module.exports=connectToDB;