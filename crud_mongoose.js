const mongoose = require("mongoose")
const namesModel = require("./models/names_schema")

let url = 'mongodb://127.0.0.1:27017/mongodb_demo';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("Connected to the database")
            // List all entries
        //    namesModel.find({})
        //             .then((data)=>{
        //                console.log(data)
        //                mongoose.connection.close()
        //             })
        //             .catch((connectionError)=>{
        //                console.log(connectionError)
        //             })
            // Fetch one document
        //    namesModel.find({id: 2})
        //              .then((data)=>{
        //                console.log(data)
        //                mongoose.connection.close()
        //              })
        //              .catch((connectionError)=>{
        //                console.log(connectionError)
        //              })
            // Fetch by ID number 
        //    namesModel.findById("652c20ce49adef37f8019461")
        //             .then((data)=>{
        //                console.log(data)
        //                mongoose.connection.close()
        //             })
        //             .catch((connectionError)=>{
        //               console.log(connectionError)
        //             })
            // Insert
        // let newData = new namesModel({id: 10, name: "Testing mongoose"})
        // namesModel.insertMany(newData)
        //             .then((data)=>{
        //                console.log(data)
        //                mongoose.connection.close()
        //             })
        //             .catch((connectionError)=>{
        //               console.log(connectionError)
        //             })
            // Update
            // let newData = {$set: {id: 10, name: "Updated Content"}};
            // namesModel.updateOne({id: 10}, newData)
            //           .then((data)=>{
            //             console.log(data)
            //             mongoose.connection.close()
            //           })
            //           .catch((connectionError)=>{
            //             console.log(connectionError)
            //           })
            //Remove
            namesModel.deleteOne({id: 10})
                      .then((data)=>{
                        console.log(data)
                        mongoose.connection.close()
                      })
                      .catch((connectionError)=>{
                        console.log(connectionError)
                      })
        })
        .catch((connectionError) => {
            console.log(connectionError)
        })