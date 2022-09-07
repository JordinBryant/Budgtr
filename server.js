const express = require("express");
const app = express();
const budget = require("./models/budget.js");

app.use(express.urlencoded({extended: false}));


app.get("/", (req, res)=>{
    res.send("testing");
});


app.get("/budgets", (req, res) =>{
    res.render("index.ejs",{
        budget,
    });
});


app.get("/budgets/new", (req, res)=>{
    res.render("new.ejs");
});


app.post("/budgets", (req, res)=>{
    budget.push(req.body),
    res.redirect("/budgets");
});


app.get("/budgets/:id", (req, res) =>{
    res.render("show.ejs" , {
        budget : budget[req.params.id],
    });
});


app.listen(3000);