
import { Image, Box, Grid, Button, Heading, useToast, IconButton, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Textarea, VStack, useColorModeValue } from '@chakra-ui/react';
import { SmallCloseIcon } from "@chakra-ui/icons"
import React, { useState, useRef } from 'react'
import axios from "axios"

const EditImageGallery = (props) => {
    const [selectedimageId, setSelectedimageId] = useState(null);
    //upload new
    const [newSelectedImageFile, setNewSelectedImageFile] = useState(null);
    const [newSelectedPreviewImage, setNewSelectedPreviewImage] = useState(null);
    //update image
    const [imageToUpdateWith, setImageToUpdateWith] = useState(null);

    const [imageTitle, setImageTitle] = useState('');
    const [imageDescription, setImageDescription] = useState('');

    const updateImageInputRef = useRef(null); 
    const newImageUploadInputRef = useRef(null);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [imageToDelete, setImageToDelete] = useState(null);
    const cancelRef = useRef()
    const toast = useToast()
    const baseUrl = process.env.REACT_APP_BASE_URL 


    //EDIT
    const handleNewImageSelect = (event) => {
        setNewSelectedImageFile(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            setNewSelectedPreviewImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleImageReplaceSelect = (event) => {
        setImageToUpdateWith(event.target.files[0]);
    }

    const handleUploadNewImage = async (event) => {
        event.preventDefault()
        if (newSelectedImageFile) {
            const formData = new FormData();
            formData.append('galleryImage', newSelectedImageFile);

            try {
                const res = await axios.post(`${baseUrl}/admin/add-gallery-image`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                if (res.status === 200) {
                    toast({
                        title: 'Success.',
                        description: 'Image updated.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top'
                    });
                    props.fetchGalleryImages();
                    setNewSelectedImageFile(null);
                    setNewSelectedPreviewImage(null)
                } else {
                    toast({
                        title: 'Error.',
                        description: 'Failed to update image.',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                        position: 'top'
                    });
                }

            } catch (error) {
                console.error('Error adding sector:', error);
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

    const handleImageDelete = async () => {
        if (imageToDelete) {
            try {
                const res = await axios.delete(`${baseUrl}/admin/delete-gallery-image/${imageToDelete}`)
                if (res.status === 200) {
                    toast({
                        title: 'Success.',
                        description: 'Image deleted.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top'
                    });
                    props.fetchGalleryImages();
                    onClose();
                }
                if (res) {
                    
                    props.fetchGalleryImages();
                } else {
                    toast({
                        title: 'Error.',
                        description: 'Failed to delete data.',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                        position: 'top'
                    });
                }

            } catch (error) {
                console.error('Error adding sector:', error);
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

    const handleImageReplace = async (imageId) => {
        if (imageToUpdateWith || imageTitle || imageDescription) {
            const formData = new FormData()
            formData.append("_id", imageId)
            formData.append("galleryImage", imageToUpdateWith)
            formData.append("imageTitle", imageTitle)
            formData.append("imageDescription", imageDescription)
            try {
                const res = await axios.put(`${baseUrl}/admin/update-gallery-image`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
               
                if (res.status === 200) {
                    toast({
                        title: 'Success.',
                        description: 'Image Updated.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top'
                    });
                    props.fetchGalleryImages();
                    setImageToUpdateWith(null);
                    setSelectedimageId(null);
                }
                if (res) {
                    
                    props.fetchGalleryImages();
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
                console.error('Error adding sector:', error);
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

    return (
        <><Box bg={useColorModeValue('purple.100', 'gray.100')}
            color={useColorModeValue('purple.800', 'gray.100')}
            h={"full"}
        >
            <Heading m={2} fontSize={'4xl'} fontFamily={'body'} pt={5}
                color={useColorModeValue('purple.800', 'gray.100')}
            >
                Gallery
            </Heading>
            <Grid templateColumns={{sm: '1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }} gap={5} p={10} align="center" rowGap={5}>

                {props.imageGalleryData.map((imageData, index) => {
                    return (<>
                        <Box> 
                        <Box
                                w='30px'
                                as={IconButton}
                                size='sm'
                                colorScheme='red'
                                rounded="full"
                                bottom='-5%'
                                left='140px'
                                zIndex='4'
                                boxShadow="2xl"
                                onClick={() => {
                                    setImageToDelete(imageData._id)
                                    onOpen()
                                }}
                            >
                                <SmallCloseIcon
                                    color='gray.50'
                                    w='30px'
                                />
                            </Box>
                            <Box
                                maxW='sm'
                                h=''
                                borderWidth='1px'
                                borderRadius='lg'
                                overflow='hidden'
                                shadow={'xl'}
                                cursor='pointer'
                                bg='gray.100'
                            >
                                <VStack>
                                    
                                    {/* <form onSubmit={handleImageReplace(imageData._id)} > */}
                                    <Box maxH="xs">
                                    <Image
                                        src={`data:image/jpeg;base64,${imageData.galleryImage}`}
                                        alt={imageData.imageTitle}
                                        objectFit="contain"
                                        h='100%'
                                        overflow="hidden"
                                        transition="0.15s ease-in-out"
                                        _hover={{
                                            brightness: '0.8',
                                        }}
                                        onClick={() => updateImageInputRef.current.click()}
                                    />
                                    <input
                                        type='file'
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        ref={updateImageInputRef}
                                        onChange={handleImageReplaceSelect}
                                    />
                                    </Box>
                                    <Box p='6'>
                                       
                                        <Button
                                            mt="2"
                                            colorScheme='purple'
                                            type='submit'
                                            onClick={() => handleImageReplace(imageData._id)}
                                        >Update Image</Button>
                                    </Box>

                                    {/* </form> */}
                                </VStack>

                            </Box>
                            
                        </Box>

                    </>)
                })}
                <Box>
                            <Box
                                w='30px'
                               h="30px"
                            >
                            </Box>
                            <Box
                                maxW='sm'
                                borderWidth='1px'
                                borderRadius='lg'
                                overflow='hidden'
                                shadow={'xl'}
                                cursor='pointer'
                                bg='gray.100'
                            >
                                <VStack>
                                    
                                    {/* <form onSubmit={handleImageReplace(imageData._id)} > */}
                                    <Box maxH="xs">
                                    <Image
                                        src={newSelectedPreviewImage || 'https://image.pngaaa.com/768/791768-middle.png'}
                                        alt='Add Image'
                                        objectFit="contain"
                                        h='100%'
                                        overflow="hidden"
                                        transition="0.15s ease-in-out"
                                        _hover={{
                                            filter: "brightness(0.6)"
                                        }}
                                        onClick={() => newImageUploadInputRef.current.click()}
                                    />
                                    <input
                                        type='file'
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        ref={newImageUploadInputRef}
                                        onChange={handleNewImageSelect}
                                    />
                                    </Box>
                                    <Box p='6'>
                                       
                                        <Button
                                            mt="2"
                                            colorScheme='purple'
                                            type='submit'
                                            onClick={(event) =>handleUploadNewImage(event)}
                                        >Update Image</Button>
                                    </Box>

                                    {/* </form> */}
                                </VStack>

                            </Box>
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
                            Delete Image
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button
                                ref={cancelRef} onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button colorScheme='red'
                                onClick={handleImageDelete} ml={3}
                            >
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
        </>
    )
}

export default EditImageGallery