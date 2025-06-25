import {Todo} from "./todoController.js";
//create a Todo
const createTodo =async (req,res)=>{
    try{
       
    
    const {title,description}=req.body;
    const newTodo = await Todo.create({
        title,
        description
    })
    resizeBy.status(201).json(newTodo);
}catch(error){
    res.status(404).json({message:error.message})
}
}


//read a Todo
//update
//delete