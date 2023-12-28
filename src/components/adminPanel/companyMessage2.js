import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, FormControl, Grid, Input, Textarea, Image, useToast } from '@chakra-ui/react';
import axios from 'axios';

const CompanyMessage2 = () => {
  const [image2, setImage2] = useState('');
  const [displaySelectedImage, setDisplaySelectedImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null)
  const toast = useToast()
  const [heading2, setHeading2] = useState('');
  const [text2, setText2] = useState('');
  const imageInputRef = useRef()
  const baseUrl = process.env.REACT_APP_BASE_URL 


  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/get-companymessage2`);
      const data = response.data
      setImage2(`data:image/jpeg;base64,${data.data.companyMsgImage2}`);
      setHeading2(data.data.heading2);
      setText2(data.data.text2);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setDisplaySelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      if(selectedImage){
          formData.append('companyMsgImage2', selectedImage);
      }
      formData.append('heading2', heading2);
      formData.append('text2', text2);

      const res = await axios.post(`${baseUrl}/edit-homepage/companyMessage2`, formData);
      if (res) {
        toast({
            title: 'Success.',
            description: 'Data updated.',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top'
        });
        fetchData()
    } else {
        toast({
            title: 'Error.',
            description: 'Failed to update data.',
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top'
        });
    }

} catch (error) {
    console.error("Error updating image: ", error)
    toast({
        title: 'Error.',
        description: "Could not connect to server.",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
    });
}
  };

  return (
    <Box p={4} maxW="full" m="auto">
      <form onSubmit={handleSubmit}>
        <Grid 
        templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr' }} 
        gap={10} 
        px={{ sm: '2', md: '10', lg: '15' }} 
        alignContent='center' 
        align='center' 
        maxW={'95%'}>
        <Box 
        p={5} 
        display="flex" 
        flexDirection="column" 
        alignItems="center">
            <Box 
            position="relative" 
            cursor="pointer" 
            p={1} 
            _hover={{ '& img': { filter: 'brightness(0.6)' } }}
            >
              <Image 
              maxH={"300px"} 
              src={displaySelectedImage || image2} 
              alt="Upload Image" 
              onClick={() => imageInputRef.current.click()} 
              />
              <input 
              type="file" 
              style={{ display: 'none' }} 
              id="fileInput" 
              accept="image/*" 
              ref={imageInputRef}
              onChange={handleImageSelect} 
              />
              <Box 
              position="absolute" 
              top="50%" left="50%" 
              transform="translate(-50%, -50%)" 
              textAlign="center" 
              color="white" 
              fontSize="24px" 
              fontWeight="bold" 
              opacity={0} 
              transition="opacity 0.3s ease" 
              _hover={{ opacity: 1, brightness: 0.7 }}>
                Edit Image
              </Box>
            </Box>
          </Box>
          <Box>
            <FormControl id="heading2" mt={4}>
              <Input
              fontWeight='bold'
              fontSize={24}
               textAlign={'center'} 
               value={heading2} 
               onChange={(e) => setHeading2(e.target.value)}
                />
            </FormControl>
            <FormControl id="text2" mt={4}>
              <Textarea 
              minH={"250px"} 
              value={text2} 
              onChange={(e) => setText2(e.target.value)} />
            </FormControl>
          </Box>
        </Grid>
        <Button type="submit" mt={4} colorScheme="teal">
          Update Data
        </Button>
      </form>
    </Box>
  );
};

export default CompanyMessage2;
