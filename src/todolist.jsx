import { useState} from 'react'
import './App.css'
import Add_item from "./Add.jsx";

export default function Todolist(){
    return (
        <>
            <div>
                <h1 className = "card">
                    Welcome to my To-do List
                </h1>
                <Add_item />
            </div>
        </>
    )
}