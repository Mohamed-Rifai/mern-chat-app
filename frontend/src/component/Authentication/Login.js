import { Button, FormControl,
         FormLabel, Input,
         InputGroup, InputRightElement,
         VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {

 const [show, setShow] = useState(true)
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()


 const handleClick = ()=> setShow(!show);
  
 const submitHandler = async () => { 

    setLoading(true)
    if(!email || !password) {
        toast({
            title: "Please Fill all the fields",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "top",
          })
          setLoading(false)
          return;
    }

    try {

      const config = {
        headers:{
          "Content-type": "application/json",
        },
      }
      
      const {data} = await axios.post(
        "/api/user/login",
        {email,password},config
      );

      toast({
         title: "Login Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
      });
      localStorage.setItem("userInfo",JSON.stringify(data));
      setLoading(false)
      navigate('/chats')
    } catch (error) {
       toast({
            title: "Error Ocurred!",
            description:error.response.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
      });
      setLoading(false)
    }
 }

  return (
    <VStack spacing='5px'>
     

       <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
        value={email}       
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
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick} >
              {show ? 'Show' : 'Hide'}
            </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>

      


<Button 
  colorScheme='blue'
  width='100%'
  style={{marginTop: 15}}
  onClick={submitHandler}
  isLoading={loading}
>
    Login
</Button>
<Button 
  variant='solid'
  colorScheme='red'
  width='100%'
  onClick={() =>{
    setEmail('guest@example.com')
    setPassword('123456')
  }}
>
    Get Guest User Credentials
</Button>
    </VStack>
  )
}

export default Login
