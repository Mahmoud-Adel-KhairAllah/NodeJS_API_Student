const express = require("express");

const route = express.Router();
const bodyParser = express.urlencoded({ extended: true });

var students = [
     {
       id: 0,
       name: "Ali",
       age: 50,
       work: "Developer",
       isMarid: true,
       children: 6,
     },
     {
       id: 1,
       name: "Mosa",
       age: 40,
       work: "Network",
       isMarid: false,
       children: 0,
     },
     { id: 2, name: "Ehab", age: 30, work: "admin", isMarid: true, children: 10 },
     {
       id: 3,
       name: "sharef",
       age: 20,
       work: "counter",
       isMarid: true,
       children: 3,
     },
     { id: 4, name: "Abd", age: 27, work: "engine", isMarid: false, children: 0 },
     {
       id: 5,
       name: "Basel",
       age: 24,
       work: "Database",
       isMarid: true,
       children: 9,
     },
     {
       id: 6,
       name: "Ayman",
       age: 25,
       work: "Doctore",
       isMarid: false,
       children: 0,
     },
   ];
   
   route.get("/getStudents", (req, res, next) => {
     res.send(students); 
   });
   
   route.delete("/deleteStudentById/:id", (req, res, next) => {
     var student = students.find((element) => element.id == req.params.id);
     var position = students.indexOf(student);
     students.splice(position, 1);
   
     res.send(students);
   });
   
   route.get("/getStudentById/:id", (req, res, next) => {
     let student = students.find((element) => element.id == req.params.id);
     if (student) {
       res.send(student);
     } else {
       res.send("student Not Found");
     }
   });
   
   route.post("/addStudent", bodyParser, (req, res, next) => {
     let student = {
       id: req.body.id,
       name: req.body.name,
       age: req.body.age,
       work: req.body.work,
       isMarid: req.body.isMarid,
       children: req.body.children,
     };
     students.push(student);
     res.send(students);
   });
   
   route.put('/updateStudent/:id',bodyParser,(req,res,next)=>{
        let student = students.find((element) => element.id == req.params.id);
        // student= req.body.id;
        student.name= req.body.name;
        student.age= req.body.age;
        student.work= req.body.work;
        student.isMarid= req.body.isMarid;
        student.children= req.body.children;
        if (student) {
          res.send(student);
        } else {
          res.send("student Not Found");
        }
   });

   module.exports=route;