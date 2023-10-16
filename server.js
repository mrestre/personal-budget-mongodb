//Budget API

const express = require('express');
const mongoose = require("mongoose");
const budgetInfo = require("./models/budgetCollection")
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = 3000;

const corsOptions={
    origin: "https://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/', express.static('public'));

//const budget = {
//    myBudget: [
//    {
//        title: 'Eat out',
//        budget: 25
//    },
//    {
//        title: 'Rent',
//        budget: 375
//    },
//    {
//        title: 'Grocery',
//        budget: 110
//    },
//]
//};


//app.get('/hello', (req, res) => {
//    res.send('Hello World!');
//});


//Get data from json file
const datatest = require('./datatest.json');

app.get('/budget', (req, res) => {
    mongoose.connect("mongodb://127.0.0.1:27017/budgetInfo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(() => {
        console.log("Connected to the Budget Database");
        budgetInfo.find({})
                  .then((data) => {
                    res.json(data);
                    console.log(data);
                    mongoose.connection.close();
                  })
                  .catch((connectionError) => {
                    console.error(connectionError);
                  });
    })
    
    .catch((err) => {
        console.error(err);

    });

    //res.json(datatest);
});


app.post("/budget", (req, res) => {
    mongoose.connect("mongodb://127.0.0.1:27017/budgetInfo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})

.then(() => {
    console.log("Connected to the Budget Database");
    const newItem = new budgetInfo(req.body);
    budgetInfo.create(newItem)
              .then((data) => {
                res.json(data);
                mongoose.connection.close();
              })

              .catch((connectionError) => {
                console.error(connectionError);
                res.status(400).json({error: 'error saving'});
              });
            })
            .catch((err) => {
                console.error(err);
                res.status(400).json({error: 'server erroor'})
            });
        });











app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});

