import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
  const [show, setShow] = useState(true)
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [conPassword,setConPassword] = useState()
  const [pic,setPic] = useState()


 const handleClick = ()=> setShow(!show);
 
 const postDetails = (pics)=> { };
 
 const submitHandler = () => { }



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
>
    Signup
</Button>

    </VStack>
  )
}

export default Signup
