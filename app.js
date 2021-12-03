// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// //asserts are used to validate our data entry & connection

// //connection url
// const url = 'mongodb://localhost:27017';

// //Database name
// const dbName = 'fruitsDB';

// //create a new MongoClient
// const client = new MongoClient(url, {useNewUrlParser: true});

// //use connect method to connect to server
// client.connect(function(err){
//     assert.equal(null, err);
//     console.log("connected to server");

//     const db = client.db(dbName);

//     findDocuments(db, function(){
//         client.close();
//     })
// });

// const insertDocuments = function(db, callback){
//     //get the documents collection
//     const collection = db.collection('fruits');
//     //insert some documents
//     collection.insertMany([ //here are 3 different documents within the "fruits" collection, which is inside the fruitsDB database

//         {
//             name: "Apple",
//             score: 8,
//             review: "Great Fruit"
//         },
//         {
//             name: "Orange",
//             score: 6,
//             review: "Not bad"
//         },
//         {
//             name: "Banana",
//             score: 9,
//             review: "Awesome!"
//         }
//     ], function(err, result){
//         assert.equal(err, null); //validate for no errors
//         console.log("inserted 3 documents into the collection");
//         callback(result);
//     });
// };


// const findDocuments = function(db, callback){

//     const collection = db.collection('fruits');

//     collection.find({}).toArray(function(err, fruits){
//         assert.equal(err, null);
//         console.log("found the following records");
//         console.log(fruits);
//         callback(fruits);

//     });
// }

/* 

start of mongoose

*/


const mongoose = require('mongoose'); //require mongoose

//connect to DB using mongoose
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
    //a schema is a way of formatting/structuring your data
});

//The word Fruit inside the brackets ("Fruit, fruitSchema")
//will auto convert the word to fruits (lower case and plural 's)
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({ //a new document
    name: "Apple",
    rating: 7,
    review: "nice."
});

const kiwi = new Fruit({
    name: "kiwi",
    score: 10,
    review: "np"
});

const banana = new Fruit({
    name: "banana",
    score: 10,
    review: "good"
});
const orange = new Fruit({
    name: "orange",
    score: 8,
    review: "good"
});
const peopleschema = new mongoose.Schema({
    name: String,
    age: Number
});
const People = mongoose.model("People", peopleschema);

const people = new People ({
    name: "bob",
    age: 20
});

// Fruit.insertMany([kiwi,orange,banana], (err)=>{
//     if (err){
//         console.log(err);
//     }   else{
//         console.log("saved all fruits");
//     }

// });

// Fruit.find(function(err, fruits){
//     if (err){
//         console.log(err);
//     }else {
//         console.log(fruits);
//     }
// });

Fruit.find(function(err, fruits){
    fruit.forEach(name)=>{
        console.log(fruit.name);
    }
})

fruit.save();
people.save();
//to prevent the same items being saved, comment the above line out



// const findDocuments = function(db, callback){
//     //Get the documents collection
//     const collection = db.collection('fruits');
//     //Find some documents
//     collection.find({}).toArray(function(err, fruits) {
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(fruits);
//         callback(fruits);
//     });
// }