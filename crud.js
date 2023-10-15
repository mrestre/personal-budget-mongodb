const { MongoClient } = require('mongodb');
let url = 'mongodb://127.0.0.1:27017/mongodb_demo';

// 1. Connect to the database

// 2. Perform your desired database operations here

// 3. Close the database connection when done


MongoClient.connect(url, { useUnifiedTopology: true },(operationError, dbHandler) => {
    if (operationError) {
        console.log("An error has occurred during the connection process");
    } else {
        console.log("Connected to the database");
        // insert operation
    //    let data = {id: 10, name: "added a new name form MongoDB Native Driver"};
    //    dbHandler.db('mongodb_demo').collection('names').insertOne(data, (operr, opresult)=>{
    //        if (operr){
    //            console.log("Unable to insert data into your collection")
    //        }
    //        else {
    //            console.log("Insert Successfully")
    //            
    //        }
    //    })
        // List operation
    //    dbHandler.db('mongodb_demo').collection('names').find().toArray((operr, opresult)=>{
    //        if (operr) {
    //            console.log(operr)
    //        } else {
    //            for (var i=0; i < opresult.length; i++){
    //                console.log(opresult[i]);
    //            }
    //            dbHandler.close()
    //        }
    //    });
        // Fetch Operation
    //    dbHandler.db('mongodb_demo').collection('names').findOne({id: 1}, (operr, opresult)=>{
    //        if (operr){
    //            console.log(operr)
    //        } else {
    //            console.log(opresult)
    //            dbHandler.close()
    //        }
    //    })
        // Update Operation
    //    let newData = {$set: {id: 11, name: "added a new name form MongoDB Native Driver"}};
    //    dbHandler.db('mongodb_demo').collection('names').updateOne({id: 1}, newData,(operr, opresult)=>{
    //        if (operr){
    //             console.log("Unable to insert data into your collection")
    //        }
    //        else {
    //            console.log("Updated Successfully")
    //            dbHandler.close()
    //        }
    //    })
        // Delete Operatiton 
    //      dbHandler.db('mongodb_demo').collection('names').deleteOne({id: 11},(operr, opresult)=>{
    //        if (operr){
    //            console.log("Unable to delete data from your collection")
    //        }
    //        else {
    //            console.log("Deleted Successfully")
    //            dbHandler.close()
    //        }
    //      })

        // Bulk Delete Operatiton 
        dbHandler.db('mongodb_demo').collection('names').deleteMany({id: 10},(operr, opresult)=>{
            if (operr){
                console.log("Unable to delete data from your collection")
            }
            else {
                console.log("Deleted Successfully")
                dbHandler.close()
            }
          })
    }
});