import React from 'react'
import { useEffect, useState } from 'react';
import{
  GoogleGenerativeAI,
} from "@google/generative-ai";
import Result from './Result';
import Header from './Header';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Input from './Input';

export default function Chat() {

  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const getInfo = async(prompt)=>{
    try{
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
    
    
      // const prompt = "Write a story about a magic backpack.";
        
        const result = await model.generateContent(prompt);
        // console.log(result.response.text());
        const value = result.response.text()
        return value;

    }catch(error){
      console.log("getting",error);
      return null

    }
  }

  useEffect(() => {
    getInfo();
  });

  const[text,setText] = useState('');

  const onChange =(event)=>{
    setText(event.target.value)
  }

 const[questionText,setQuestionText] = useState('');
 const[resultText,setResultText] = useState('');
 const[loader,setLoader] = useState(false);
 const[showresult,setResult] = useState(false)
 const[saveResult,setSaveResult] = useState([])

 const typingEffect = (word)=>{
  let index = 0;
   setResultText('')

  const interval = setInterval(() => {
     if(index < word.length){
      setResultText((pre)=> pre+ word[index]+" ")
      index++
     }else{
      clearInterval(interval)
     }
   },30);
 }

  const onClick = async()=>{
    setResult(true)
    if(text){
      setQuestionText(text)
      setSaveResult((pre)=>[...pre,text])
    }
    setLoader(true)
    const output =await getInfo(text);
    let array = output.split("**");
    let newResponse;
    for(let i=0 ; i<array.length ;i++){
      if (i===0 || i%2!==1) {
        newResponse+= array[i];
      }else{
        newResponse+= `<b>${array[i]}</b>`;
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>")
    let newResponse3 = newResponse2.replace(/## \s*(.*)/g, `<h2 style={fontsize = 1.5rem}>$1</h2>`).replace(/\n/g, '<br>')
    // let newResponse3 = newResponse2.replace(/^##/s , '').replace(/\n/g, '<br>')

    console.log(newResponse3)
    console.log(output)
    // setResultText(newResponse3)
    // setResultText(newResponse3)
    const wordsArray = newResponse3.split(" ");
    typingEffect(wordsArray)
    setLoader(false)
  }

  const[open,setOpen] = useState(false)

 let setOpenfun = ()=>{
  console.log(open);
  setOpen(!open)
  }
  
  const newChat=()=>{
    setResult(false)
  }
 
  return (
    <div className='font-outfit flex'>
    <Sidebar open={open} toggle={setOpenfun} saveResult={saveResult} newChat={newChat}/>
    <Nav open={open} />
    <div className='w-full flex flex-col content-center '>
      {!showresult? <>
     <div className='text-[56px] ml-[22rem] mt-20 '>
    <Header/>
    </div>
    </>
      : 
     <div className='flex flex-col items-center justify-center mt-10  '>
      <Result value={questionText} resultText={resultText} loader={loader}/>
    </div>
      }
  
 
    <div className='mt-20 ml-32'>
    <Input text={text} onChange={onChange} click={onClick}/>
    </div>
  
    </div>
  
     </div>
      
      
       
  )
}
