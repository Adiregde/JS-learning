import mongoose from "mongoose";
import Todo from "../models/todos.js";

export const readTodos = async(req,res)=>{
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ error: error.message})
    }
}

export const createTodo = async(req,res)=>{
    const todo = await Todo(req.body);
    try {
        await todo.save();
        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({ error: error.message})
    }
}