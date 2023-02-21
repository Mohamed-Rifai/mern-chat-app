import { Button, FormControl,
         FormLabel, Input, 
         InputGroup, InputRightElement,
         useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [show, setShow] = useState(true)
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [conPassword,setConPassword] = useState()
  const [pic,setPic] = useState()
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()


 const handleClick = ()=> setShow(!show);
 
 const postDetails = (pics)=> {
     setLoading(true)
     if(pics === undefined){
           toast({
          title: 'Please Select an Image!',
          status: 'warning',
          duration: 5000,
          isClosable: true,
          position: 'bottom'
        })
        return;
     }

     if(pics.type === "image/jpeg" || pics.type === "image/png"){
        const data = new FormData();
        data.append ("file",pics);
        data.append ("upload_preset","chat-app")
        data.append ("cloud_name", "dyylv0o0s")
        fetch("https://api.cloudinary.com/v1_1/dyylv0o0s/image/upload", {
          method: "post",
          body:data,
        })
          .then((res)=> res.json())
          .then(data => {
            setPic(data.url.toString());
            console.log(data.url.toString());
            setLoading(false)
          })
          .catch((err)=>{
            console.log(err);
            setLoading(false)
          })
     }else{
        toast({
          title: 'Please Select an Image!', 
          status: 'warning',
          duration: 5000,
          isClosable: true,
          position: 'bottom'
        })
        setLoading(false);
        return;
     }
 // 
  };
 
 const submitHandler = async () => {
     setLoading(true)
     if(!name || !email || !password || !conPassword ){
          toast({
            title: "Please Fill all the fields",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          })
          setLoading(false)
          return;
     }
     if(password !== conPassword){
      toast({
        title:"Password Do Not Match",
        status:"warning",
        duration: 5000,
        isClosable:true,
        position:'bottom',
      })
      setLoading(false)
      return;
     }

     try {
        const config = {
          headers:{
            "Content-type":"application/json",
          },
        }

        const {data} = await axios.post(
          '/api/user',
          {name, email, password, pic},
          config
          );
          toast({
            title: "Registration Successfully",
            status: "success",
            duration: 5000,
            isClosable:true,
            position: "bottom"
          })

          localStorage.setItem('userInfo',JSON.stringify(data))
          setLoading(false)
          navigate('/chats')

     } catch (error) {
       toast({
            title: "Error",
            description: error.response.data.message,
            status: "error",
            duration: 5000,
            isClosable:true,
            position: "bottom"
          })
          setLoading(false)
      
     }
  }



  return (
    <VStack spacing='5px'>
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
        placeholder='Enter Your name'
        onChange={(e)=>setName(e.target.value)}
        />
      </FormControl>

       <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
        placeholder='Enter Your email'
        onChange={(e)=>setEmail(e.target.value)}
        />
      </FormControl>

       <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
        
        <Input
        type={show ?'password' : 'text'}
        placeholder='Enter Your password'
        onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick} >
              {show ? 'Show' : 'Hide'}
            </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>

       <FormControl id='Conpassword' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
        
        <Input
        type={show ?'password' : 'text'}
        placeholder='Repeat your password'
        onChange={(e)=>setConPassword(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick} >
              {show ? 'Show' : 'Hide'}
            </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>

   <FormControl id='pic'>

    <FormLabel>Upload Your Image</FormLabel>
    <Input
    type='file'
    p={1.5}
   accept="image/*"
   onChange={(e) => postDetails(e.target.files[0])}
    />

   </FormControl>


<Button 
  colorScheme='blue'
  width='100%'
  style={{marginTop: 15}}
  onClick={submitHandler}
  isLoading={loading}
>
    Signup
</Button>

    </VStack>
  )
}

export default Signup
