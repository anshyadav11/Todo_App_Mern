const express=require('express');
const { createTodo, updateTodo } = require('./types');
const {Todo}=require('./db')
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());
app.post("/todo",async function (req,res){
    const temp=req.body;
    const parsed=createTodo.safeParse(temp);
    if(!parsed.success){
        res.status(400).json({msg:"Invalid input"});
    return;}
    await Todo.create({
        title:temp.title,
        description:temp.description,
        completed:temp.completed
    })
    res.json({
        msg:"Todo created successfully"
    })
    

})
app.get("/todo", async function(req, res) {
     const todos = await Todo.find();

    res.json({
        todos: todos
    })

})

app.put("/completed",async function(req,res){
    const temp=req.body;
    const parsed=updateTodo.safeParse(temp);
    if(!parsed.success){
        res.status(400).json({msg:"Invalid input"});
    return;}
    await Todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({msg:"Todo marked as completed"})
})
app.listen(3001);