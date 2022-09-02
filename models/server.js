const express = require("express");
const app = express();
const port = 3000;
const budget = require("./budget.js");


app.use(express.urlencoded({ extended: false }))

app.get("/budgets", (req, res) => {
    res.render("index.ejs", {
        allBudgets: budget
    });
});

app.get("/budgets/new", (req, res) => {
    res.render("new.ejs")
});

app.post("/budgets", (req, res) => {
    budget.push(req.body)
    res.redirect("/budgets")
});

app.get("/budgets/:index", (req, res) => {
    res.render("show.ejs", {
        budgets: budget[req.params.index]
    });
});

app.get("/", (req, res) => {
    res.send("Welcome to the Budgtr App!");
});

app.listen(port, () => {
    console.log("Express is listening")
});