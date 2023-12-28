import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Box, Grid, Heading, useColorModeValue, Button, Input, FormControl, useToast } from '@chakra-ui/react';
const baseUrl = process.env.REACT_APP_BASE_URL

const EditStats = () => {
    const toast = useToast()
    //FETCH
    const [barChartData, setBarChartData] = useState({})

    //EDIT
    // COLUMN BARS
    const [column1Label, setColumn1Label] = useState('');
    const [column2Label, setColumn2Label] = useState('');
    const [column3Label, setColumn3Label] = useState('');
    const [column1height, setColumn1height] = useState(0);
    const [column2height, setColumn2height] = useState(0);
    const [column3height, setColumn3height] = useState(0);

    // NUMBERS BOXES
    const [box1TopText, setBox1TopText] = useState('');
    const [box2TopText, setBox2TopText] = useState('');
    const [box3TopText, setBox3TopText] = useState('');
    const [box1NumberData, setBox1NumberData] = useState('');
    const [box2NumberData, setBox2NumberData] = useState('');
    const [box3NumberData, setBox3NumberData] = useState('');
    const [box1BottomText, setBox1BottomText] = useState('');
    const [box2BottomText, setBox2BottomText] = useState('');
    const [box3BottomText, setBox3BottomText] = useState('');

    //FETCH AND ANIMATE


    const fetchBarChartData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-stats`)
            const newData = await res.data.data
            //COLUMN BARS
            setColumn1Label(newData.column1Label)
            setColumn2Label(newData.column2Label)
            setColumn3Label(newData.column3Label)
            setColumn1height(newData.column1height)
            setColumn2height(newData.column2height)
            setColumn3height(newData.column3height)
            //NUMBER BOXES
            setBox1TopText(newData.box1TopText)
            setBox2TopText(newData.box2TopText)
            setBox3TopText(newData.box3TopText)
            setBox1NumberData(newData.box1NumberData)
            setBox2NumberData(newData.box2NumberData)
            setBox3NumberData(newData.box3NumberData)
            setBox1BottomText(newData.box1BottomText)
            setBox2BottomText(newData.box2BottomText)
            setBox3BottomText(newData.box3BottomText)
            setBarChartData(newData)
        } catch (error) {
            console.error("Error: ", error)
        }
    }
    console.log(barChartData._id)

    //EDIT
    const handleEditSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await axios.put(`${baseUrl}/edit-homepage/edit-stats`, {
                _id: barChartData._id,
                //COLUMN BARS
                column1height,
                column2height,
                column3height,
                column1Label,
                column2Label,
                column3Label,
                //NUMBER BOXES 
                box1TopText: box1TopText,
                box2TopText: box2TopText,
                box3TopText: box3TopText,
                box1NumberData: box1NumberData,
                box2NumberData: box2NumberData,
                box3NumberData: box3NumberData,
                box1BottomText: box1BottomText,
                box2BottomText: box2BottomText,
                box3BottomText: box3BottomText,
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

    useEffect(() => {
        fetchBarChartData()
    }, [])

    return (
        <Box color={useColorModeValue('blue.600', 'gray.500')}
            p={10}
        >
            <Heading color={useColorModeValue('gray.100', 'gray.50')} m={2} fontSize={'4xl'} fontFamily={'body'} mb={30} minH={'200px'}>
                Sky Way Nepal Statistics
            </Heading>
            <form onSubmit={handleEditSubmit} >
                <FormControl>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-end"
                        minHeight="200px"
                        width="100%"
                        marginBottom="20px"
                        h={{ sm: "30vh" }}
                        p={10}
                    >
                        <Box
                            width={'100px'}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            marginX="30px"
                        >
                            <Input
                                p={2}
                                fontSize={"md"}
                                fontWeight={"bold"}
                                color="yellow.400"
                                textAlign={'center'}
                                value={column1height}
                                onChange={(e) => setColumn1height(e.target.value)}
                            />
                            <Box
                                width="100%"
                                minW={'50px'}
                                h={column1height}
                                bg="yellow.400"
                                shadow={"xl"}
                            />
                            <Input
                                p={2}
                                fontSize={"md"}
                                fontWeight={"bold"}
                                color="yellow.400"
                                textAlign={'center'}
                                value={column1Label}
                                onChange={(e) => setColumn1Label(e.target.value)}
                            />
                        </Box>
                        <Box
                            width={'100px'}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            marginX="30px"
                        >
                            <Input
                                p={2}
                                fontSize={"md"}
                                fontWeight={"bold"}
                                color="yellow.400"
                                textAlign={'center'}
                                value={column2height}
                                onChange={(e) => setColumn2height(e.target.value)}
                            />
                            <Box
                                width="100%"
                                minW={'50px'}
                                h={column2height}
                                bg="red.400"
                                shadow={"xl"}
                            />
                            <Input
                                p={2}
                                fontSize={"md"}
                                fontWeight={"bold"}
                                color="red.400"
                                value={column2Label}
                                onChange={(e) => setColumn2Label(e.target.value)}
                                textAlign={'center'} />
                        </Box>
                        <Box
                            width={'100px'}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            marginX="30px"
                        >
                            <Input
                                p={2}
                                fontSize={"md"}
                                fontWeight={"bold"}
                                color="yellow.400"
                                textAlign={'center'}
                                value={column3height}
                                onChange={(e) => setColumn3height(e.target.value)}
                            />
                            <Box
                                width="100%"
                                minW={'50px'}
                                h={column3height}
                                bg="green.400"
                                shadow={"xl"}
                            />
                            <Input
                                p={2}
                                fontSize={"md"}
                                fontWeight={"bold"}
                                color="green.400"
                                textAlign={'center'}
                                value={column3Label}
                                onChange={(e) => setColumn3Label(e.target.value)} />
                        </Box>
                    </Box>

                    <Grid
                        templateColumns={{ base: '1fr', md: '1fr', lg: '1fr 1fr 1fr' }}
                        templateRows={{ base: '1fr 1fr 1fr',  md: '1fr 1fr 1fr',lg: '1fr' }}
                        pb={{md: "600px", lg: '0px'}}
                        gap={5}
                        alignItems="center"
                        justifyItems="center"
                        maxH={{ sm: '75vh', md: '30vh' }}
                        marginBottom="20px"
                        color={'white'}
                    >
                        <Box
                            bg="yellow.400" w={320} h={200} p={4} rounded={'xl'} shadow={'xl'}
                        >

                            <Input
                                textAlign={"center"}
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                                value={box1TopText}
                                onChange={(e) => setBox1TopText(e.target.value)}
                            />
                            <Input
                                duration={4}
                                style={{ color: "white", fontSize: "70px", fontWeight: "bold" }}
                                textAlign={"center"}
                                minH={20}
                                value={box1NumberData}
                                onChange={(e) => setBox1NumberData(e.target.value)}
                            />

                            <Input
                                textAlign={"center"}
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                                value={box1BottomText}
                                onChange={(e) => setBox1BottomText(e.target.value)}

                            />
                        </Box>
                        <Box bg="red.400" w={320} h={200} p={4} rounded={'xl'} shadow={'xl'}>

                            <Input
                                textAlign={"center"}
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                                value={box2TopText}
                                onChange={(e) => setBox2TopText(e.target.value)}

                            />
                            <Input
                                duration={4}
                                style={{ color: "white", fontSize: "70px", fontWeight: "bold" }}
                                textAlign={"center"}
                                minH={20}
                                value={box2NumberData}
                                onChange={(e) => setBox2NumberData(e.target.value)}
                            />
                            <Input
                                textAlign={"center"}
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                                value={box2BottomText}
                                onChange={(e) => setBox2BottomText(e.target.value)}

                            />
                        </Box>
                        <Box bg="green.400" w={320} h={200} p={4} rounded={'xl'} shadow={'xl'}>

                            <Input
                                textAlign={"center"}
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                                value={box3TopText}
                                onChange={(e) => setBox3TopText(e.target.value)}

                            />

                            <Input
                                value={box3NumberData}
                                style={{ color: "white", fontSize: "70px", fontWeight: "bold" }}
                                textAlign={"center"}
                                minH={20}
                                onChange={(e) => setBox3NumberData(e.target.value)}
                            />
                            <Input
                                textAlign={"center"}
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                                value={box3BottomText}
                                onChange={(e) => setBox3BottomText(e.target.value)}

                            />

                        </Box>
                    </Grid>
                    <Button
                        m={10}
                        bg={'blue.400'}
                        color={'white'}
                        w="300px"
                        _hover={{
                            bg: 'blue.500',
                        }}
                        type='submit'>
                        Save Changes
                    </Button>
                </FormControl>
            </form>
        </Box>
    );
};

export default EditStats;
