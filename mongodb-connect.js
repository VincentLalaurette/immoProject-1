const { MongoClient, ObjectID } = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/Immo', (err, db) => {
  if(err){
    return console.log('Unable to connect : ', err);
  }
  console.log('connected to Mongodb server.');

db.collection('apparts').find().toArray()
.then((res)=> {
  return console.log(res);
})
.catch((err)=>{
  console.log(err);
});

  db.close();
});
