import React, { useState } from 'react';
import './Main.css';

function ListToDo(props) {

    const [styleLine, setStyleLine] = useState({textDecoration:"none"});

    const doneTask = ()=>{
        setStyleLine({
            textDecoration: "line-through",
            color: "rgba(0,212,255,1)"
        });
    }

    const [update, setUpdate] = useState(true)

    const updateTask = ()=>{
        console.log("Updated");
    }

    return (
        <>
            <div className="listStyle">
                <div>
                    <li style={styleLine}>{props.itemsData}</li>
                </div>
                <div className='all_btns'>
                    <i className="far fa-edit edit_btn" onClick={updateTask}></i>
                    <i className="far fa-check-circle done_btn" onClick={doneTask}></i>
                    <i 
                      className="far fa-trash-alt del_btn"
                      onClick={()=> props.delTask(props.id)} >
                    </i>
                </div>
            </div>
        </>
    )
}

export default ListToDo
