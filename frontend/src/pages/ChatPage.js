import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ChatPage = () => {
 const [chats , setChats] = useState('')
    const fetchData =async () =>{
      
        const {data} = await axios.get('/api/chats')

        setChats(data);
 }

 useEffect(()=>{
    fetchData()
 },[])

  return (
    <div>
     {chats}
    </div>
  )
}

export default ChatPage

