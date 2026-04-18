import React, { useState } from 'react'

const App = () => {

  const [task , setTask] = useState([])
  const [input ,setInput]= useState("")

  const addtask = ()=>{
    if(input.trim()==="")
      return;
    const newTask={
      id:Date.now(),
      text:input,
      completd:false
    }

    setTask([...task,newTask])
    setInput("")
    
  }

  const deleteTask=(id)=>{
    setTask(task.filter((item)=>
      item.id !==id
    ));
  };

  const toggletask = (id)=>{
    setTask(
      task.map((item)=>
        item.id ===id? {...task, completd:!task.completd}:task
      ))
  }

  return (
    <div className='bg-gray-400 min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-6' >
        <h1 className='font-bold text-2xl text-center text-gray-900 mb-6'>
          To do list
          </h1>

        <div className=' felx gap-2 mb-4'>
          < input 
          className='flex-1 px-4 pt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          type="text" 
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder='inter task'
          />

          <button
          className=' ml-3 px-4 py-2 gap-2 bg-blue-600 text-white rounded-lg hover:bg-red-400 transition'
           onClick={addtask}>
            ADD
            </button>
        </div>

        <ul className='space-y-3'>
          {task.map((item)=>(
            <li
            className='flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm'
             key={item.id}>
              <span 
              className='cursor-pointer'
              onClick={()=>toggletask(item.id)}>
                {item.text}
              </span>
              <button
              className='px-3 py-1 bg-yellow-100 text-black rounded-md hover:bg-red-600 transition'
               onClick={()=>deleteTask(item.id)}>
                Delete
              </button>
              

            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App