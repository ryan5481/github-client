import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, Grid, Input, Textarea, Image, useToast } from '@chakra-ui/react';
import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL

const CompanyMessage1 = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null)
  const toast = useToast()
  const [image, setImage] = useState('');
  const [heading1, setHeading1] = useState('');
  const [text1, setText1] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/get-companymessage1`);
      const data = response.data.data
      setImage(`data:image/jpeg;base64,${data.companyMsgImage1}`);
      setHeading1(data.heading1);
      setText1(data.text1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(event.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
      try {
        const formData = new FormData();
        if(selectedFile){
            formData.append('companyMsgImage1', selectedFile);
        }
        formData.append('heading1', heading1);
        formData.append('text1', text1);

        const res = await axios.post(`${baseUrl}/edit-homepage/companyMessage1`, formData);
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
        <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr' }} gap={10} px={{ sm: '2', md: '10', lg: '15' }} alignContent='center' align='center' maxW={'95%'}>
          <Box>
            <FormControl id="heading1" mt={4}>
              <Input textAlign={'center'} 
              fontWeight='bold'
              fontSize={24}
              value={heading1} 
              onChange={(e) => setHeading1(e.target.value)} />
            </FormControl>
            <FormControl 
            id="text1" 
            mt={4}>
              <Textarea minH={"250px"} 
              value={text1} 
              onChange={(e) => setText1(e.target.value)} />
            </FormControl>
          </Box>
          <Box p={5} display="flex" flexDirection="column" alignItems="center">
            <Box position="relative" cursor="pointer" p={1} _hover={{ '& img': { filter: 'brightness(0.6)' } }}>
              <Image maxH={"300px"} 
              src={previewImage || image} 
              alt="Click to Upload" 
              onClick={() => document.getElementById('fileInput').click()} 
              />
              <input type="file" 
              id="fileInput" 
              accept="image/*" 
              onChange={handleFileChange} 
              style={{ display: 'none' }} />
              <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center" color="white" fontSize="24px" fontWeight="bold" opacity={0} transition="opacity 0.3s ease" _hover={{ opacity: 1, brightness: 0.7 }}>
                Edit Image
              </Box>
            </Box>
          </Box>
        </Grid>
        <Button type="submit" mt={4} colorScheme="teal">
          Update Data
        </Button>
      </form>
    </Box>
  );
};

export default CompanyMessage1;
