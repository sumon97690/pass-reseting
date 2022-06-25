const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

const static_path =  path.join(__dirname, "../public");
const template_path =  path.join(__dirname, "../templates/views");
const partials_path =  path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//routing
app.get("/", (req, res)=> {
    res.render('index')
})
app.get("/page1", (req, res)=> {
    res.render('page1')
})
app.get("/page2", (req, res)=> {
    res.render('page2')
})
app.get("/page3", (req, res)=> {
    res.render('page3')
})

// start the server
app.listen(port, ()=>{
    console.log(`the application stared sucessfully on ${port}`)
})