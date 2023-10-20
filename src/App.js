import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [time,setTime]=useState(0)
  const [running,setRunning]=useState(false)
 
  useEffect(()=>{
    let interval
    if(running){
      interval=setInterval(()=>{
        setTime(prevTime => prevTime+10)
      },10)
    }
    else{
      clearInterval(interval);
    }
    return ()=>clearInterval(interval)
  },[running])

  return (
    <>

    <div class="mx-auto max-w-2xl lg:text-center mb-6">
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl">Stopwatch</h1>
      <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-5xl">
        <span>{Math.floor((time/60000)%60)}:</span>
        <span>{Math.floor((time/1000)%60)}:</span>
        <span>{Math.floor((time/10)%10)}</span>
      </p>
   </div>
   <div class="text-center mt-2">
    {
    (running)
    ?<>
       <div class="box-canvas mb-8 text-center pr-8">
      <div class="hourglass"></div>
      </div>
      <button onClick={()=>setRunning(false)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-8">Stop</button>
      </>
    :<button onClick={()=>setRunning(true)} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-8">Strart</button>
    }
    <button onClick={()=>setTime(0)} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mr-4 mt-8">Reset</button>
   </div>
   </>
  );
}

export default App;
