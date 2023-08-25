import { useState, useEffect } from "react"
function ChatBot({userInfo='defaultName'}) {
  const [send,setSend]=useState('')
  const [msg,setMsg]=useState('')
    const handleSubmit=(e)=>{
    e.preventDefault()
    setSend(msg)

  }
  
   const [responseMsg,setResponseMsg]=useState('')
    console.log('hi')
    useEffect(()=>{
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${send}`
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b0bd217498msh8fc8b6c6e488d37p143f91jsn736af337e39b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
async function fetchInfo(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
    setResponseMsg(result)
	console.log(result);
} catch (error) {
	console.error(error);
}}
fetchInfo()
        //call api
    },[send])
  return (<>
    <div style={{height:500,width:300,overflow:'auto',backgroundColor:'pink'}}>
      <span>Hi {userInfo}, Whether in {msg} is {responseMsg?.current?.condition?.text}</span>

    </div>
    <form onSubmit={handleSubmit}>
        <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
        <button type='submit'>Send</button>
      </form>
      </>
  )
}

export default ChatBot;
