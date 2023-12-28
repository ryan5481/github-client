import React, { useEffect, useState, useRef } from "react";
import { Text, useDisclosure, useToast, Box, Grid, Input, FormControl, IconButton, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button, Heading } from "@chakra-ui/react"
import { SmallCloseIcon, CheckCircleIcon, AddIcon } from "@chakra-ui/icons";
import { MdAddCircle } from "react-icons/md";
import axios from "axios"
const baseUrl = process.env.REACT_APP_BASE_URL 

const OperatingProcedure = () => {
    const toast = useToast()
    //POST
    const [newStepText, setNewStepText] = useState(null)
    //GET
    const [stepperData, setStepperData] = useState([])
    //PUT
    const [stepTextList, setStepTextList] = useState(null)
    //DELETE
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [stepTodelete, setStepToDelete] = useState(null)

    const cancelRef = useRef()


    const stepNumberToWord = (number) => {
        const words = [
            "First",
            "Second",
            "Third",
            "Fourth",
            "Fifth",
            "Sixth",
            "Seventh",
            "Eighth",
            "Ninth",
            "Tenth",
            "Eleventh",
            "Twelfth",
            "Thirteenth",
            "Fourteenth",
            "Fifteenth",
            "Sixteenth",
            "Seventeenth",
            "Eighteenth",
        ];
        return words[number - 1] || "";
    };

    //POST
    const handleAddStep = async () => {
        if (newStepText) {
            try {
                const res = axios.post(`${baseUrl}/edit-homepage/add-procedure`, {
                    procedureText: newStepText
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
                    fetchStepperData()
                    setNewStepText('')
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

    //GET
    const fetchStepperData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-procedure`)
            if (res) {
                const newData = res.data.data
                setStepperData(newData)
                const initialStepperList = newData.map(step => step.procedureText || '')
                setStepTextList(initialStepperList)
            }
        } catch (error) {
            console.error("Error: ", error)
        }
    }

    //PUT
    const updateStep = async (stepId, index) => {
        if (!stepId) {
            console.error("No stepId was provided")
            return
        }
        const updatedStepText = stepTextList[index]
        try {
            const res = await axios.put(`${baseUrl}/edit-homepage/procedure`, {
                _id: stepId,
                procedureText: updatedStepText,
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
                fetchStepperData()
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

    //DELETE
    const handleStepDelete = async () => {
        if (setStepToDelete) {
            try {
                const res = await axios.delete(`${baseUrl}/delete-procedure/${stepTodelete}`)
                if (res) {
                    toast({
                        title: 'Success.',
                        description: 'Data updated.',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top'
                    });
                    fetchStepperData()
                    onClose()
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
        fetchStepperData()
    }, [])

    return (
        <Box alignItems={'center'} px={10} pb={{ sm: '2', md: '7', lg: '10' }}>
            <Heading m={2} fontSize={'4xl'} fontFamily={'body'} pt={10}>
                Operating Procedure
            </Heading>
            <Text fontSize={'xl'} textAlign='center' pb={10} >
                Maximum of 18 steps
            </Text>
            <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1r', lg: '1fr 1fr 1fr 1fr 1fr 1fr' }} gap px={{ sm: '2', md: '10', lg: '15' }} alignContent='center' align='center' rowGap={20} maxW={'100%'}>
                {stepperData.map((step, index) => {
                    return (<>

                        <Box

                            boxShadow={'2xl'}
                            key={step._id}
                            p={2}
                            _hover={{ boxShadow: "0 0 0 2px rgba(251, 251, 251, 0.5)" }}
                            transition="box-shadow 0.4s"
                            rounded="10px"
                        >

                            <CheckCircleIcon
                                color={'green.400'}
                                boxSize={10}
                                left="10%"
                            />
                            <Text fontSize={'2xl'} textAlign='center' fontWeight={'bold'} >
                                {stepNumberToWord(index + 1)}
                            </Text>
                            <Input
                                fontSize={'sm'}
                                textAlign='center'
                                w="90%"
                                value={stepTextList[index]}
                                onChange={(e) => {
                                    const updatedTextList = [...stepTextList]
                                    updatedTextList[index] = e.target.value
                                    setStepTextList(updatedTextList)
                                }}
                            >
                            </Input>
                            <Button
                                mt="2"
                                maxW="150"
                                type='submit'
                                onClick={() => updateStep(step._id, index)}
                                left='10%'
                                isCentered
                            >Update Step</Button>
                            <Box
                                as={IconButton}
                                size='sm'
                                w='5'
                                colorScheme='red'
                                rounded="full"
                                top='-75%'
                                left='5%'
                                boxShadow="2xl"
                                onClick={() => {
                                    setStepToDelete(step._id)
                                    onOpen()
                                }}
                            >
                                <SmallCloseIcon
                                    color='gray.50'
                                    w='30px'
                                />
                            </Box>

                        </Box>

                    </>)
                })}
                {stepperData.length <= 17 ?
                    (<FormControl >
                        <Box
                            boxShadow={'2xl'}
                            p={2}
                            _hover={{ boxShadow: "0 0 0 2px rgba(251, 251, 251, 0.5)" }}
                            transition="box-shadow 0.3s"
                            rounded="10px"
                        >
                            <Box
                                as={IconButton}
                                h={10}
                                size='sm'
                                w='10'
                                bg="green.400"
                                rounded="full"
                                zIndex='1'
                                boxShadow="2xl"
                            >
                                <AddIcon boxSize={5} color="blue.900" />
                            </Box>
                            <Text fontSize={'2xl'} textAlign='center' fontWeight={'bold'} >
                                {stepNumberToWord(stepperData.length + 1)}
                            </Text>
                            <Text fontSize={''} textAlign='center' w="100%" ></Text>
                            <Input
                                fontSize={'xl'}
                                textAlign='center'
                                w="80%"
                                rounded="5px"
                                color='gray.100'
                                _placeholder={{ color: "gray.400", fontWeight: "normal", fontSize: "sm" }}
                                fontWeight="bold"
                                value={newStepText}
                                placeholder="Type new step"
                                onChange={(e) => setNewStepText(e.target.value)}
                            ></Input>
                            <Button
                                mt="2"
                                onClick={handleAddStep}

                            >Add Step</Button>
                        </Box>
                    </FormControl>)
                    : (null)
                }
            </Grid >
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay >
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Procedure Step
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={handleStepDelete} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    )
}

export default OperatingProcedure

