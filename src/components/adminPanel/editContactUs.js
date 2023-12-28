import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {
    Container,
    Editable,
    EditableInput,
    EditablePreview,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    Stack,
    VStack,
    HStack,
    Grid,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
    VisuallyHidden,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    useToast
} from '@chakra-ui/react'
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md'
import { BsWhatsapp, BsPerson, BsMessenger } from 'react-icons/bs'
const baseUrl = process.env.REACT_APP_BASE_URL

//GET
const EditContactUs = (props) => {
    const toast = useToast()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        email: "",
        address: "",
        phoneNumber1: 0,
        phoneNumber2: 0,
        whatsappId: "",
        facebookId: "",
        oneTapMessengerLink: "",
        contactUsHeading: "",
        contactUsSubHeading: "",
    });

    const GetHeaderData = async () => {
        const res = await axios.get(`${baseUrl}/get-contact`)
        if (res) {
            setData(res.data.data)
            setFormData({
                email: data.email,
                address: data.address,
                phoneNumber1: data.phoneNumber1,
                phoneNumber2: data.phoneNumber2,
                whatsappId: data.whatsappId,
                facebookId: data.facebookId,
                oneTapMessengerLink: data.oneTapMessengerLink,
                contactUsHeading: data.contactUsHeading,
                contactUsSubHeading: data.contactUsSubHeading,
            })
        } else {
            alert("Failed to fech header data")
        }
    }

    useEffect(() => {
        GetHeaderData()
    }, [])

    //PUT
    const handleInputChange = async(event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    console.log("FORMDATA: " + formData)
    const handleUpdateData = async() => {
        try{
            const data = axios.put(`${baseUrl}/admin/edit-contact`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if(data){
                toast({
                    title: 'Success.',
                    description: 'Data updated.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
                GetHeaderData() 
            }else{
                toast({
                    title: 'Error.',
                    description: 'Failed to update data.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
            }
        }catch(error){
            console.error("Error", error)
            toast({
                title: 'Error.',
                description: "Could not connect to server.",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
        }
    }

    return (
        <Container pos="relative" top="12px" py={1} maxW="full" maxh={"100%"} centerContent overflow="hidden"
            bg={useColorModeValue('purple.100', 'purple.700')}
            color={useColorModeValue('purple.800', 'grey.100')}
        >
          <Heading  fontSize="3xl" fontWeight="bold" >Edit Contact Us Page</Heading>
          {data && data.updatedAt &&(<Text fontStyle="italic"  >Last edited on {data.updatedAt.slice(0, 10)}</Text>)}
            <Box
                bg={useColorModeValue('blue.600', 'gray.800')}
                color={'white'}
                borderRadius="lg"
                m={{ sm: 2, md: 3, lg: 3 }}
                p={{ sm: 2, md: 3, lg: 3 }}>
                <form onSubmit={handleUpdateData}>
                <Grid templateColumns={{ sm: '1fr', md: '1fr', lg: '1fr 1fr 1fr' }} p={10} gap={10}  >
                    <Box w={200} pt={3} justifySelf="center"  >
                        <Editable fontSize="3xl" fontWeight="bold" placeholder={data.contactUsHeading} >
                            <EditablePreview />
                            <EditableInput
                                maxW={200}
                                _placeholder={{
                                    color: "gray.100",
                                }}
                                w="auto"
                                name="contactUsHeading"
                                value={data.contactUsHeading}
                                onChange={handleInputChange}
                            />
                        </Editable>
                        <Editable fontSize="md" mt={{ sm: 3, md: 3, lg: 5 }} color={useColorModeValue('grey.200', 'grey.200')} placeholder={data.contactUsSubHeading} >
                            <EditablePreview />
                            <EditableInput
                                _placeholder={{
                                    color: "gray.100",
                                }}
                                w="auto"
                                value={data.contactUsSubHeading}
                                name="contactUsSubHeading"
                                onChange={handleInputChange}
                            />
                        </Editable>
                        <Box py={{ base: 1, sm: 1, md: 2, lg: 3 }} color={useColorModeValue('grey.800', 'grey.100')}>
                            <Stack pl={0} spacing={3} color={useColorModeValue('grey.800', 'grey.100')}>
                                <Box pl={0} spacing={0} justifySelf="left" color={'white'}>
                                    <Button
                                        size="md"
                                        height="48px"
                                        width="200px"
                                        variant="ghost"
                                        _hover={{ border: '2px solid #1C6FEB' }}
                                        leftIcon={<MdPhone color="white" size="20px" />}
                                        color={'white'}
                                    >
                                        <Editable placeholder={data.phoneNumber1} >
                                            <EditablePreview />
                                            <EditableInput
                                                type="number"
                                                maxW={200}
                                                _placeholder={{
                                                    color: "gray.100",
                                                }}
                                                w="auto"
                                                value={data.phoneNumber1}
                                                name="phoneNumber1"
                                                onChange={handleInputChange}
                                            />
                                        </Editable>
                                    </Button>
                                    <Button
                                        color={'white'}
                                        size="md"
                                        height="48px"
                                        width="200px"
                                        variant="ghost"
                                        _hover={{ border: '2px solid #1C6FEB' }}
                                        leftIcon={<VisuallyHidden><MdPhone color="white" size="20px" /></VisuallyHidden>}
                                    >
                                        <Editable placeholder={data.phoneNumber2} >
                                            <EditablePreview />
                                            <EditableInput
                                                type="number"
                                                maxW={200}
                                                _placeholder={{
                                                    color: "gray.100",
                                                }}
                                                w="auto"
                                                value={data.phoneNumber2}
                                                name="phoneNumber2"
                                                onChange={handleInputChange}
                                            />
                                        </Editable>
                                    </Button>
                                </Box>
                                <Button
                                    color={'white'}
                                    size="md"
                                    height="48px"
                                    width="200px"
                                    variant="ghost"
                                    _hover={{ border: '2px solid #1C6FEB' }}
                                    leftIcon={<MdEmail color="white" size="20px" />}
                                >
                                    <Editable placeholder={data.email} >
                                        <EditablePreview />
                                        <EditableInput
                                            type="email"
                                            maxW={200}
                                            _placeholder={{
                                                color: "gray.100",
                                            }}
                                            w="auto"
                                            value={data.email}
                                            name="email"
                                            onChange={handleInputChange}
                                        />
                                    </Editable>
                                </Button>
                                <Button
                                    color={'white'}
                                    size="md"
                                    height="48px"
                                    width="200px"
                                    variant="ghost"
                                    _hover={{ border: '2px solid #1C6FEB' }}
                                    leftIcon={<MdLocationOn color="white" size="20px" />}>
                                    <Editable placeholder={data.address} >
                                        <EditablePreview />
                                        <EditableInput
                                            maxW={200}
                                            _placeholder={{
                                                color: "gray.100",
                                            }}
                                            w="auto"
                                            value={data.address}
                                            name="address"
                                            onChange={handleInputChange}
                                        />
                                    </Editable>
                                </Button>
                            </Stack>

                            {/* ICONS */}
                            <HStack
                                mt={{ lg: 10, md: 10 }}
                                spacing={2}
                                px={0}
                                justify="center"
                            >
                                <Popover  >
                                    <PopoverTrigger >
                                        <IconButton
                                            color={'white'}
                                            aria-label="whatsapp"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<BsWhatsapp size="28px" />}
                                        />
                                    </PopoverTrigger>
                                    <PopoverContent
                                     bg={useColorModeValue("blue.500", 'gray.700')}
                                     >
                                        <PopoverArrow
                                         borderColor={useColorModeValue("gray.400", 'gray.300')}
                                         bg={useColorModeValue("blue.500", 'gray.700')}
                                         />
                                        <PopoverCloseButton />
                                        <PopoverHeader fontSize={"lg"} fontWeight="bold">WhatsApp number (+977)</PopoverHeader>
                                        <PopoverBody>
                                            <Editable placeholder={data.whatsappId} >
                                                <EditablePreview />
                                                <EditableInput
                                                    _placeholder={{
                                                        color: "gray.100",
                                                    }}
                                                    value={data.whatsappId}
                                                    name="whatsappId"
                                                    onChange={handleInputChange}
                                                />
                                            </Editable>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>

                                <Popover  >
                                    <PopoverTrigger >
                                        <IconButton
                                            color={'white'}
                                            aria-label="whatsapp"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<MdFacebook size="28px" />}
                                        />
                                    </PopoverTrigger>
                                    <PopoverContent bg={useColorModeValue("blue.500", 'gray.700')}>
                                        <PopoverArrow bg={useColorModeValue("blue.500", 'gray.700')} />
                                        <PopoverCloseButton />
                                        <PopoverHeader fontSize={"lg"} fontWeight="bold">Facebook user ID</PopoverHeader>
                                        <PopoverBody>
                                            <Editable placeholder={data.facebookId} >
                                                <EditablePreview />
                                                <EditableInput
                                                    _placeholder={{
                                                        color: "gray.100",
                                                    }}
                                                    value={data.facebookId}
                                                    name="facebookId"
                                                    onChange={handleInputChange}
                                                />
                                            </Editable>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>

                                <Popover  >
                                    <PopoverTrigger >
                                        <IconButton
                                            color={'white'}
                                            aria-label="whatsapp"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<BsMessenger size="28px" />}
                                        />
                                    </PopoverTrigger>
                                    <PopoverContent bg={useColorModeValue("blue.500", 'gray.700')}>
                                        <PopoverArrow bg={useColorModeValue("blue.500", 'gray.700')} />
                                        <PopoverCloseButton />
                                        <PopoverHeader fontSize={"lg"} fontWeight="bold" >FaceBook Messanger ID</PopoverHeader>
                                        <PopoverBody>
                                            <Editable placeholder={data.oneTapMessengerLink} >
                                                <EditablePreview />
                                                <EditableInput
                                                    _placeholder={{
                                                        color: "gray.100",
                                                    }}
                                                    value={data.oneTapMessengerLink}
                                                    name="oneTapMessengerLink"
                                                    onChange={handleInputChange}
                                                />
                                            </Editable>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>

                             
                                {/* <IconButton
                      color={'white'}
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsInstagram size="28px" />} */}
                            </HStack>
                        </Box>
                    </Box>

                    <Box bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} h={{base: '500px', sm: '450', md: '450' }}   w={{base: '300px', sm: '400px', md: '400px', lg: '350px', xl: '400px' }} borderRadius="lg" alignContent="center" >
                        <Box m={8} color={'white'}>
                            <VStack spacing={5}>
                                <Text fontSize="xl" fontWeight="bold" color={useColorModeValue('grey.200', 'grey.200')}>Send us a direct message</Text>

                                <FormControl id="name">
                                    <FormLabel>Your Name</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement pointerEvents="none">
                                            <BsPerson color="gray.800" />
                                        </InputLeftElement>
                                        <Input type="text" size="md" />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name">
                                    <FormLabel>Email</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement pointerEvents="none">
                                            <MdOutlineEmail color="gray.800" />
                                        </InputLeftElement>
                                        <Input type="text" size="md" />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name" >
                                    <FormLabel >Message</FormLabel>
                                    <Textarea
                                        borderColor="gray.300"
                                        _hover={{
                                            borderRadius: 'gray.300',
                                        }}

                                    />
                                </FormControl>
                                <FormControl id="name" float="right">
                                    <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                                        Send Message
                                    </Button>
                                </FormControl>
                            </VStack>
                        </Box>
                    </Box>

                    <Box overflow='hidden' borderRadius={10} h={{base: '500px', sm: '450', md: '450' }}   w={{base: '300px', sm: '400px', md: '400px', lg: '350px', xl: '400px' }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1023.6851100697893!2d85.33048799804155!3d!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b0522ead%3A0x392af32fe87dd0ea!2sRadiant%20Infotech%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1690782916035!5m2!1sen!2snp"
                            className='footer-map'
                            width="400"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Box>
                </Grid>
                <HStack pb={2} spacing={6} direction={['column', 'row']}  justify="center">
                    <Button
                        bg={'red.400'}
                        color={'white'}
                        w="150px"
                        _hover={{
                            bg: 'red.500',
                        }}
                        onClick={() => navigate("/edit-home")}
                    >
                        Cancel
                    </Button>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="150px"
                        _hover={{
                            bg: 'blue.500',
                        }}
                        type='submit'>
                        Save Changes
                    </Button>
                </HStack>
                </form>
            </Box>
        </Container>
    )
}

export default EditContactUs