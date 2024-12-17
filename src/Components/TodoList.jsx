import React, { useState } from 'react'

function TodoList() {

    const [task,setTask]=useState(['watch a dog','drink water'])
    const [newTask,setNewTask]=useState('')

    function handleAdd(){
        if(newTask.trim() !==''){
            setTask(task=>[...task,newTask])
            setNewTask('')
        }

    }

    function handleInputChange(event){
       setNewTask(event.target.value)
    }

    function handleRemove(index){
      const updated= task.filter((_,i)=> i !==index)
      setTask(updated)
    }

    function handleUp(index){
        if(index > 0){
            const updated = [...task]
            [updated[index],updated[index-1]]=
            [updated[index-1],updated[index]]
        setTask(updated)
        }
      
    }

    function handleDown(){
      
    }

  return (
    <div className='todo-list'>
        <h1>TODO LIST</h1>
        <div>
            <input type="text"
                   placeholder='Enter a new task....'
                   value={newTask}
                   onChange={handleInputChange} />

                   <button onClick={handleAdd}>Add</button>

                   <ol>
                    {task.map((task,index)=> 
                    <li key={index}>{task} 
                    <button onClick={()=>handleRemove(index)}>remove</button> 
                    <button onClick={()=>handleUp(index)}>Up</button>
                    <button onClick={()=>handleDown(index)}>Down</button>
                    
                    </li>)}
                   </ol>
        </div>
    </div>
  )
}

export default TodoList