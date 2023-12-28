
import { Image, Stack, useToast, Input, Box, Grid, Button, Heading, AspectRatio, Text, FormControl, IconButton, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import { SmallCloseIcon } from "@chakra-ui/icons"
import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"
const baseUrl = process.env.REACT_APP_BASE_URL

const JobSectors = (props) => {
    const [sectorsData, setSectorsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedSectorId, setSelectedSectorId] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [sectorTitles, setSectorTitles] = useState('');
    const toast = useToast()
    const [sectorTitle, setSectorTitle] = useState('');
    const [newPreviewImage, setNewPreviewImage] = useState(null)

    const sectorImageInputRef = useRef();
    const newImageInputRef = useRef();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [sectorToDelete, setSectorToDelete] = useState(null);
    const cancelRef = useRef()

    const handleSectorDelete = async () => {
        if (sectorToDelete) {
            try {
                const res = await axios.delete(`${baseUrl}/delete-worksector/${sectorToDelete}`)
                if (res) {
                    toast({
                        title: 'Success.',
                        description: 'Data updated.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top'
                    });
                    onClose();
                    fetchWorkSectors();
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
        }
    }

    // FETCH DATA FROM THE BACKEND FOR DISPLAY
    const fetchWorkSectors = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-worksectors`);
            const newData = await res.data.data
            setSectorsData(newData)
            const initialSectorTitles = newData.map(sector => sector.sectorTitle || '')
            setSectorTitles(initialSectorTitles)
            console.log(sectorsData)
            // setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            // setLoading(false);
        }
    };

    // UPDATE JOB SECTOR TITLE
    const handleTitleSubmit = async (sectorId, index) => {
        if (!sectorId) {
            console.error("No sectorId provided.")
            return
        }
        const updatedTitle = sectorTitles[index]
        const formData = new FormData();
        formData.append('_id', sectorId);
        formData.append('sectorTitle', updatedTitle);
        try {
            const res = await axios.put(`${baseUrl}/edit-homepage/worksectors`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (res) {
                toast({
                    title: 'Success.',
                    description: 'Data updated.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
                fetchWorkSectors();
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
    }

    const handleImageSelect = (event) => {
        setSelectedImageFile(event.target.files[0])
        if (event.target.files && event.target.files[0]) {
            setNewPreviewImage(URL.createObjectURL(event.target.files[0]));
        }        
    }

    const handleImageReplace = async (sectorId) => {
        if (selectedImageFile) {
            const formData = new FormData()
            formData.append("sectorImage", selectedImageFile)
            formData.append("_id", sectorId)
            try {
                const res = await axios.put(`${baseUrl}/edit-homepage/worksectors`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                if (res) {
                    toast({
                        title: 'Success.',
                        description: 'Data updated.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top'
                    });
                    fetchWorkSectors();
                setSelectedImageFile(null);
                setSelectedSectorId(null);
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
        }
    }

    // ADD A NEW SECTOR 
    const handleSectorAdd = async () => {
        if (selectedImageFile && sectorTitle) {
            const formData = new FormData();
            formData.append('sectorImage', selectedImageFile);
            formData.append('sectorTitle', sectorTitle);

            try {
                const res = await axios.post(`${baseUrl}/edit-homepage/add-worksector`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                if (res) {
                    toast({
                        title: 'Success.',
                        description: 'Sector added.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top'
                    });
                    fetchWorkSectors();
                    setSelectedImageFile(null);
                    setSectorTitle('');
                    setNewPreviewImage(null)
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
        }
    }


    useEffect(() => {
        fetchWorkSectors();
    }, [])


    return (
        <>
            <Heading m={2} fontSize={'4xl'} fontFamily={'body'} pt={5}
                color="gray.100"
            >
                Sectors We Work In
            </Heading>

            <Grid templateColumns={{base:'1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr 1fr 1fr'}} p={10} gap={10}>

                {sectorsData.map((sector, index) => {
                    return (<>

                        <Box
                            key={sector._id}
                            role={'group'}
                            p={2}
                            maxW={'330px'}
                            w={'full'}
                            h={{base: '430px', sm: '460px', md: '400px',lg: '380px' }}
                            boxShadow={'2xl'}
                            pos={'relative'}
                            zIndex={1}
                            _hover={{ boxShadow: "0 0 0 2px rgba(251, 251, 251, 0.5)" }}
                            transition="box-shadow 0.3s"
                            rounded="10px">
                            <Box
                                rounded={'lg'}
                                pos={'relative'}
                                height={'230px'}
                                _after={{
                                    transition: 'all .1s ease',
                                    content: '""',
                                    w: 'full',
                                    h: '120px',
                                    pos: 'absolute',
                                    top: 5,
                                    left: 0,
                                    filter: 'blur(13px)',
                                    zIndex: -1,
                                }}
                                _groupHover={{
                                    _after: {
                                        filter: 'blur(20px)',
                                    },
                                }}>
                                <Box
                                    as={IconButton}
                                    size='sm'
                                    colorScheme='red'
                                    rounded="full"
                                    top='20px'
                                    left='50%'
                                    zIndex='10'
                                    boxShadow="2xl"
                                    onClick={() => {
                                        setSectorToDelete(sector._id)
                                        onOpen()
                                    }}
                                >
                                    <SmallCloseIcon
                                        color='gray.50'
                                        w='30px'
                                    />
                                </Box>
                                <AspectRatio>
                                    <Image
                                        src={`data:image/jpeg;base64,${sector.sectorImage}`}
                                        alt={sector.sectorTitle}
                                        borderRadius='lg'
                                        h={120}
                                        objectFit="contain"
                                        width="100%"
                                        transition="0.15s ease-in-out"
                                        _hover={{
                                            filter: "brightness(0.6)"
                                        }}
                                        onClick={() => sectorImageInputRef.current.click()}
                                    />
                                </AspectRatio>

                                <input
                                    type='file'
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    ref={sectorImageInputRef}
                                    onChange={handleImageSelect}
                                />
                                <Button
                                    mt="2"
                                    onClick={() => handleImageReplace(sector._id)}
                                >Update Image</Button>
                                <form onSubmit={handleTitleSubmit}>
                                    <FormControl mt='7' spacing='3' id='sectorTitle'>
                                        <Input
                                            size='sm'
                                            rounded="10px"
                                            color='gray.100'
                                            fontWeight="bold"
                                            fontSize="16px"
                                            textAlign="center"
                                            value={sectorTitles[index]}
                                            onChange={(e) => {
                                                const updatedTitles = [...sectorTitles]
                                                updatedTitles[index] = e.target.value
                                                setSectorTitles(updatedTitles)
                                            }}
                                        ></Input>
                                    </FormControl>
                                    <Stack alignItems="center">
                                        <Button
                                            mt="2"
                                            maxW="150"
                                            type='submit'
                                            onClick={() => handleTitleSubmit(sector._id, index)}
                                        >Update Title</Button>
                                    </Stack>
                                </form>
                            </Box>
                        </Box>

                    </>)
                })}
                <Box
                    boxShadow={'2xl'}
                    _hover={{ boxShadow: "0 0 0 2px rgba(251, 251, 251, 0.5)" }}
                    transition="box-shadow 0.4s"
                    rounded="10px"
                    role={'group'}
                    p={2}
                    maxW={'330px'}
                    w={'full'}
                    minH="400"
                    pos={'relative'}
                    zIndex={1}>
                    <Text fontWeight="bold" pb={2} >Image Preview</Text>
                    <AspectRatio>
                        <Image
                            src={newPreviewImage || 'https://image.pngaaa.com/768/791768-middle.png'}
                            // selectedImageFile ? URL.createObjectURL(selectedImageFile) : 
                            alt='Add Image'
                            rounded='10px'
                            h={120}
                            objectFit="contain"
                            width="100%"
                            transition="0.15s ease-in-out"
                            _hover={{
                                brightness: '0.8',
                            }}
                            onClick={() => newImageInputRef.current.click()}
                        />
                    </AspectRatio>
                    <input
                        type='file'
                        accept="image/*"
                        style={{ display: "none" }}
                        ref={newImageInputRef}
                        onChange={handleImageSelect}
                    />

                    <FormControl mt='7' id='sectorTitle'>
                        <Input
                            size='sm'
                            rounded="10px"
                            color='gray.100'
                            fontWeight="bold"
                            fontSize="16px"
                            textAlign="center"
                            value={sectorTitle}
                            onChange={(e) => setSectorTitle(e.target.value)}
                        ></Input>
                        <Button
                            mt="2"
                            onClick={handleSectorAdd}

                        >Add Sector</Button>
                    </FormControl>
                </Box>

            </Grid>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay >
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Sector
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={handleSectorDelete} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default JobSectors