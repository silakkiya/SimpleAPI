'use strict';
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const studentList = [
    {
        id : 1,
        name : "ilak",
        dept : "cs",
        age : 21
    },
    {
        id : 2,
        name : "keer",
        dept : "cs",
        age : 21
    },
    {
        id : 3,
        name : "mad",
        dept : "ece",
        age : 21
    },
    {
        id : 10,
        name : "gow",
        dept : "civil",
        age : 21
    },
    
]
app.get("/api/student",(req,resp) => {
    resp.json(studentList);
});

app.post("/api/student",(req,resp) => {
    const newStudent = {
        
        id : studentList.length+1,
       name: req.body.name,
        age : req.body.age,
        dept : req.body.dept
    }
    studentList.push(newStudent);
    resp.json(newStudent.id);
    // resp.json(studentList);
    resp.sendStatus(201);

});

    app.delete("/api/student/:id",(req,resp) => {
        const idToBeDeleted=parseInt(req.params.id);
        const studentToBeDeleted = studentList.findIndex(student => student.id === idToBeDeleted);
        studentList.splice(studentToBeDeleted,1);
        resp.json(idToBeDeleted);
});
    app.get("/api/student/:id",(req,resp) => {
        const idToBeFetched=parseInt(req.params.id);
        const studentToBeFetched = studentList.find(student => student.id === idToBeFetched);
        resp.json(studentToBeFetched);

});

    // app.patch("/api/student",(req,resp) => {
        
    // })
app.listen(5000);