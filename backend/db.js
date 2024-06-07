const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://anshyadavprogramming:jo7SXpNvv7p0RmWy@cluster0.f4zbtvq.mongodb.net/Todo');
const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const Todo=mongoose.model('Todo',todoSchema);

module.exports={
    Todo
}