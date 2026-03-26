"use client"
import React,{useState} from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshoturl] = useState("")
    const [generated, setgenerated] = useState("")
    
    const generate = () => {
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  
  .then((result) => {
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
    console.log(result)
    alert(result.message)
  })
  .catch((error) => console.error(error));
      
    }
    
   
    
  return (
    <div className='mx-auto max-w-lg bg-purple-100 m-14 p-7 rounded-lg gap-3 flex flex-col'>
      <h1 className='font-bold text-2xl'>Generate your short URLS </h1>
      <div className='flex flex-col gap-3'>
        <input className='px-3 py-2 border focus:outline-purple-600 rounded-md' type="text" 
        value={url}
        placeholder='Enter your URL' name="" id="" onChange={e =>{seturl(e.target.value)}} />
        
        <input className='px-3 py-2 border focus:outline-purple-600 rounded-md'
        value={shorturl}
        type="text"       placeholder='Enter your preferes short URL' name="" id="" onChange={e =>{setshoturl(e.target.value)}} />
        <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1.5 font-bold text-white'>Generate</button>
      </div>
      {generated &&<> <span className='font-bold text-xl'>Your Link:</span><code>
       <Link target='_blank' href={{generated}}>{generated}</Link>
        </code> </> }
    </div>
  )
}

export default Shorten
