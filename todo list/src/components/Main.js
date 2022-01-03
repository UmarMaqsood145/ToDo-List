import React, { useState } from 'react'
import './Main.css';
import ListToDo from './ListToDo';

function Main() {

    const [Items, setItems] = useState("");
    const [addItems, setAddItems] = useState([]);

    const addTask = ()=>{
        if(!Items){}
        else{
            // const allInputData = {id: new Date().getTime().toString(), name: Items}; 
            setAddItems([...addItems, Items]);
            setItems("");
        }
    }

    const delTask = (id)=>{
        console.log(id);
        const newList = addItems.filter((a, index)=>{
            return index !== id;
        });
        setAddItems(newList);
    }

    return (
        <>
            <div className="container">
                <nav><h1>ToDo List</h1></nav>
                <div className="center">
                    <input type="text" value={Items} onChange={(e)=> setItems(e.target.value)} placeholder='Enter your task here...' />
                    <button className='add_btn' onClick={addTask}>
                        Add Task
                    </button>
                </div>

                <ol>
                    {
                        addItems.map((itemData, index)=>{
                            return <ListToDo 
                            itemsData = {itemData} 
                            key = {index} 
                            id = {index}
                            delTask = {delTask}
                            />
                        })
                    }
                </ol>

            </div>
        </>
    )
}

export default Main
