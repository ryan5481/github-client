import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import {
    Box,
    Heading,
    Image,
    useToast,
    Input,
    Button,
    useColorModeValue,
    Container,
    Textarea,
    FormControl
} from '@chakra-ui/react'
const baseUrl = process.env.REACT_APP_BASE_URL


const ValuableClients = () => {
    const [displaySelectedImage, setDisplaySelectedImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null)
    const [image1, setImage1] = useState('')
    const [heading1, setHeading1] = useState('')
    const [text1, setText1] = useState('')
    const [description1, setDescription1] = useState('')
    const imageInputRef = useRef()
    const toast = useToast()


    const fetchData = async () => {
        try{
            const res = await axios.get(`${baseUrl}/get-valuableclients`)
            if (res) {
                const data = res.data.data
                setImage1(`data:image/jpeg;base64,${data.valuableClientsImage1}`)
                setHeading1(data.heading1)
                setText1(data.text1)
                setDescription1(data.description1)
            }
        }catch(error){
            console.log(error)
        }
    }

    const handleImageSelect = (event) => {
        setSelectedImage(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
          setDisplaySelectedImage(URL.createObjectURL(event.target.files[0]));
        }
      }
   
    const handleSubmit = async (event) => {
        event.preventDefault();
          try {
            const formData = new FormData();
            if(selectedImage){
                formData.append('valuableClientsImage1', selectedImage);
            }
            formData.append('heading1', heading1);
            formData.append('text1', text1);
            formData.append('description1', description1);
            
    
            const res = await axios.post(`${baseUrl}/edit-homepage/valuableClients`, formData);
            if(res){
                toast({
                    title: 'Success.',
                    description: 'Data updated.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
                fetchData()
                // res && window.location.reload()
            } else{
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
            toast({
                title: 'Error.',
                description: 'Failed to update data. Could not connect to server.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });;
          }
      };

      useEffect(() => {
        fetchData()
    }, [])

    return (
        <Box>

            <Container maxW={'100%'} p="12"
                maxH={'130vh'}
                bg={useColorModeValue('blue.600', 'gray.1000')}
                color='white'
                className="animated-div"
            >
                <form onSubmit={handleSubmit} >
                <Heading as="h1">Our Valuable Clients</Heading>
                <Box
                    marginTop={{ base: '1', sm: '5' }}
                    display="flex"

                    flexDirection={{ base: 'column', sm: 'row' }}
                    justifyContent="space-between">
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center">
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}
                            marginTop="5%">
                            <Box borderRadius="lg" overflow="hidden" maxH={"600px"}>
                                <Box textDecoration="none" _hover={{ '& img': { filter: 'brightness(0.6)' } }}>
                                    <Image
                                        borderRadius="lg"
                                        maxH={"500px"}
                                        src={displaySelectedImage || image1}
                                        alt="Upload image"
                                        objectFit="contain"
                                        width="100%"
                                        transition="0.3s ease-in-out"
                                        onClick={() => imageInputRef.current.click()} 
                                    />
                                    <input
                                        type='file'
                                        id='fileInput'
                                        accept='image/*'
                                        style={{ display: 'none' }} 
                                        ref={imageInputRef}
                                        onChange={handleImageSelect} 
                                    />
                                    <Box position="absolute"
                                        top="50%"
                                        left="50%"
                                        transform="translate(-50%, -50%)"
                                        fontWeight={"bold"}
                                        fontSize="24px"
                                        textAlign="center"
                                        _hover={{ opacity: 1, brightness: 0.7 }}
                                    >Edit Image</Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(white 1px, transparent 1px)',
                                    'radial(white 1px, transparent 1px)',
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.6"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '0' }}>

                        <FormControl id='heading1' mt="1">
                            <Input fontWeight="bold" 
                            fontSize="24px" 
                            textAlign="center"
                            value={heading1} 
                            onChange={(e) => setHeading1(e.currentTarget.value)}
                            />
                        </FormControl>
                        <Input  fontSize="24px" 
                        textAlign="center" 
                        value={text1} 
                        textDecoration="none" 
                        _hover={{ textDecoration: 'none' }}
                        onChange={(e) => setText1(e.currentTarget.value)}

                        />
                        <FormControl
                        id='description1'
                        >
                        <Textarea
                            marginTop="2"
                            color={useColorModeValue('gray50', 'gray.200')}
                            fontSize="lg"
                            minH={250}
                            value={description1}
                            onChange={(e) => setDescription1(e.currentTarget.value)}
                        />
                        </FormControl>
                    </Box>
                </Box>
                <Button type="submit" mt={4} colorScheme="teal">
                    Update Data
                </Button>
                </form>
            </Container>

        </Box>
    )
}

export default ValuableClients