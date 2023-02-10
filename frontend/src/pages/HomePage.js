import React from 'react'
import Signup from '../component/Authentication/Signup'
import Login from '../component/Authentication/Login'

import {
  Box, 
  Container,
  Tab,TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react'


const HomePage = () => {
  return  (
     <Container maxW='xl' centerContent>
         <Box
         display='flex'
         justifyContent='center'
         p={3}
         bg={"white"}
         w="100%" 
         m="40px 0 15px 0"
         borderRadius='lg'
         borderWidth="1px"

         >
          <Text fontSize='4xl'  fontFamily='Work sans' color='black'>Talk-A-Tive</Text>
         </Box>        
        
         <Box bg='white' w='100%' p={4} borderRadius="lg" borderWidth='1px'>
          
       <Tabs variant='soft-rounded' >
        <TabList mb='1em'>
       <Tab w='50%'>Login</Tab>
        <Tab w='50%'>Signup</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
        <Login/>
       </TabPanel>
       <TabPanel>
        <Signup/>
       </TabPanel>
     </TabPanels>
     </Tabs>

           </Box>
          
  </Container>
      
    
  ) 
  
}

export default HomePage
