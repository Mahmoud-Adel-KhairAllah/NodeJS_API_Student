const express = require("express");
const app = express();
const studentRoute=require('./routes/student.routes')

// 
console.log(app.get('env'))
app.get("/", (req, res, next) => {
     res.send("home Page");
   });
app.use(studentRoute)

app.listen(3000, () => console.log("start Server index.js"));
