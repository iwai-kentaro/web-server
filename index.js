const e = require('express');
const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")));

app.post("/api/v1/quiz", function(req,res){
    const answer = req.body.answer;
    if(answer === "2"){
        // res.send("<h1>正解！</h1>");
        res.redirect("/correct.html");
    }else{
        // res.send("不正解");
        res.redirect("/wrong.html");
    }
})

// app.get('/', function (req, res) {
//   res.send('<h1>top!!</h1>')
// })
// app.get('/about', function (req, res) {
//   res.send({
//     name: "Make",
//     age: 34,
//   })
// })
const PORT = process.env.PORT || 4000;
app.listen(PORT, function(){
    console.log("I am running");
})

