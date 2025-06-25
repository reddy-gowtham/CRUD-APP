import {Todo} from "./todoController.js";
//create a Todo
const createTodo =async ()=>{
    const {title,description}=req.body;
    const newTodo = await Todo.create({
        title,
        description
    })
    resizeBy.status(201).json(newTodo);
}


//read a Todo
//update
//delete