import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function App(){
  const [ text, setText] = useState(null)

  const [summary, setSummary] =  useState("")

  const handleInput = (e)=>{
    setText(e.target.value)
  }


  const summarize = async () =>{
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: text,
        lang: 'en',
        engine: '2'
      },
      headers: {
        'x-rapidapi-key': 'b66912594fmsh8973c330528fc17p1a0ab3jsnd88812360459',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };

    const response = await axios.request(options)
    setSummary(response.data.summary)
    // console.log(response.data.summary);
    
  }
  console.log(text);
  
  return (
    <div className='text-blue-600 text-xl'>
      <div className='h-screen w-screen bg-slate-300 flex items-center justify-center flex-col'>
        <h1 className="text-5xl font-bold py-5 font-serif">Article Summarizer</h1>
        <div className='flex justify-center items-center gap-x-2'>
          <input type="text" className='outline-none border-none rounded-lg px-5 p-1 text-red-500 w-96' onChange={handleInput}/>
          <button className=' text-white px-5 py-1 rounded-lg bg-green-600' onClick={summarize}>Click</button>
        </div>
        <div className='w-auto h-auto bg-gray-200 overflow-x-hidden mt-4 ml-24 mr-24 p-10 text-black'>
          {summary}
        </div>

      </div>
    </div>
  )
}


export default App;