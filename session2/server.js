//Import Express -> The server
const express = require("express");

//Add server name and call/invoke express
const app = express();

//Setup port number
const port = 5000;

//Middlewares -> these are function made using express (built-in funchtion)
//express.jason() -> converts data into jason format
//We are using this function for the server to scan/read data in forms
//app.use(express.jason());

app.use(express.json());

//Use to read any data types
app.use(express.urlencoded({ extended: true }));

//app.get("/test", (req, res) => { res.status(200).send("Hello from /test endpoint") });

//MOCK DB using ARRAY
let friends = [];

//Objects
//properties and values = key-pair
// let person = {
//     firstName: "John",
//     lastName: "Dela Cruz",
//     enail: "jdc@fmail.com",


// }

app.post("/friends/all", (req, res) => {
    if(friends.length === 0){
        res.send({
            code: 200,
            message: "Success!",
            data: "Your friendlist is empty."
        });
    }else{
        res.send({
            code: 200,
            message: "Success!",
            data: friends
        });
    }
})

app.post("/friends/add", (req, res) => {
    let reqBody = req.body;
        if(reqBody.email != undefined || reqBody.firstName != undefined || reqBody.lastName != undefined ){

        let checkIfExisting = friends.some(info =>
            info.email === reqBody.email
        )

        if(checkIfExisting == true){
            res.send({
                code: 200,
                message: `You are already friends with ${reqBody.firstName.toUpperCase()} ${reqBody.lastName.toUpperCase()}`
            })
        }else{
            friends.push(reqBody);
            res.status(201).send({
                code: 201,
                message: "Friend Added!",
                data: `You are now friends with ${reqBody.firstName} ${reqBody.lastName}`
            })
        }
        
    }else{
        res.send({
            code: 200,
            message: "Oops!",
            data: "Please enter a friend name."
        })
    }
    
})
app.listen(port, () => console.log(`Server is now running at port ${port}.`));