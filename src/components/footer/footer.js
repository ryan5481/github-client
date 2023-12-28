import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactNode } from 'react'
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Input,
    IconButton,
    useColorModeValue,
    Image,
    Center,
    useToast
} from '@chakra-ui/react'
import { FaFilePdf } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { BsWhatsapp, BsMessenger } from 'react-icons/bs'
import { MdFacebook } from 'react-icons/md'

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

const Footer = () => {
    const navigate = useNavigate()
    // const [currentFooterData, setCurrentFooterData] = useState([])
    // const [logoImageData, setLogoImageData] = useState({});
    const [email, setEmail] = useState('');
    const toast = useToast()

    //MAIL SUBSCRIBE
    const handleInputChange = async (event) => {
        setEmail(event.target.value)
    }

    const handleSubscribeMail = (event) => {
        event.preventDefault()
        try {
            setEmail(event.target.value)
            if (email) {
                toast({
                    title: 'Subscribed',
                    description: 'You are subscribed to our newsletter.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                })
            }
        } catch (error) {
            console.error("Error: " + error)
        }
    }

    // const fetchLogoImage = async () => {
    //     try {
    //         const res = await axios.get(`${baseUrl}/get-logo-image`)
    //         const data = res.data.data
    //         setLogoImageData(data)

    //     } catch (error) {
    //         console.error("Error: ", error)
    //     }
    // }

    const logoImageData = {
        image: "1.jpeg"
    }

    //SOCIAL ICON LINKS
    function openMessengerChat(recipientId) {
        const messengerUrl = `https://m.me/${socialData.oneTapMessengerLink}`;
        window.open(messengerUrl, 'Messenger Chat', 'width=600,height=400');
    }

    function openFaceBookPage(recipientId) {
        const facebookUrl = `https://facebook.com/${socialData.facebookId}`;
        window.open(facebookUrl, 'Facebook Page', 'width=600,height=400');
    }

    function openWhatsappChat(recipientId) {
        const whatsappPhoneNumber = `https://wa.me/${socialData.whatsappId}`;
        window.open(whatsappPhoneNumber, 'Whatsapp Chat', 'width=600,height=400');
    }



    //GET FOOTER SOCIAL LINKS
    // const [socialData, setSocialData] = useState([])

    // const GetHeaderData = async () => {
    //     const res = await axios.get(`${baseUrl}/get-contact`)
    //     if (res) {
    //         // console.log("DATAAAA:" + data)
    //         setSocialData(res.data.data)
    //     } else {
    //         alert("Failed to fech header data")
    //     }
    // }

    // useEffect(() => {
    //     GetHeaderData()
    // }, [])

    const socialData = {
        "oneTapMessengerLink": "facebook.com/Skywaymanagement",
        "landmark": "radiantInfoTech",
        "regdField": "Regd.No. 1234567890",
        "licenseField": "Lic.No. 900/067/068",
        "email": "info@skywaynepal.com",
        "address": "Gaushala-8 Batissputali, Kathmandu, Nepal",
        "phoneNumber1": "+977-1-14560160",
        "phoneNumber2": "+977-1-14460697",
        "whatsappId": "+9779818368104",
        "facebookId": "Skywaymanagement",
        "viberId": "viber.com.id",
        "contactUsHeading": "Stay In Touch",
        "contactUsSubHeading": "Click to call, email or message us",
        "column1Line1": "Line 1",
        "column1Line2": "Line 2",
        "column1Line3": "Line 3",
        "fileDownloadText": "Download Brochure",
        "messengerId": "Skywaymanagement"
    }

    //GET FOOTER DATA
    // const GetFooterData = async () => {
    //     const res = await axios.get(`${baseUrl}/get-footer`)
    //     if (res) {
    //         setCurrentFooterData(res.data.footerData)

    //     } else {
    //         alert("Failed to fech footer data")
    //     }
    // }

    // useEffect(() => {
    //     // fetchLogoImage()
    //     GetFooterData()
    // }, [])

    const currentFooterData = {
        "column1Line1": "Sky-Way Management Pvt Ltd",
        "column1Line2": "Connecting Talent to Opportunity",
        "column1Line3": "since 2001",
        "facebookLink": "facebook.com",
        "messangerLink": "messangermessanger",
        "whatsappLink": "+9779851041538",
        "twitterLink": "tweettweet",
        "youtubeLink": "youtubeyoutube",
        "instagramLink": "instainstainstagrat",
        "fileDownloadText": "Download Brochure",
        "messengerLink": "messenger.com"
    }

    return (
        <Box
            bg={useColorModeValue('blue.900', 'gray.1000')}
            color={useColorModeValue('gray.200', 'gray.200')}
            p={1}
        >
            <Container as={Stack} maxW={'7xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }}
                    spacing={5}>
                    <Stack 
                    px={2}
                    spacing={6}>
                        <Box align="center">
                            <Image
                                h={20}
                                src={`/uploads/logoImage/${logoImageData.image}`}
                                alt='Logo'
                            />
                        </Box>
                        <Text fontSize={'sm'}>{currentFooterData.column1Line1}</Text>
                        <Text fontSize={'sm'}>{currentFooterData.column1Line2}</Text>
                        <Text fontSize={'sm'}>{currentFooterData.column1Line3}</Text>
                        <Stack direction={'row'} spacing={6} alignSelf="center" >
                            <IconButton
                                color={'white'}
                                aria-label="whatsapp"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                _hover={{ bg: '#0D74FF' }}
                                icon={<BsWhatsapp size="28px" />}
                                onClick={() => openWhatsappChat(socialData.facebookId)}

                            />
                            <IconButton
                                color={'white'}
                                aria-label="facebook"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                _hover={{ bg: '#0D74FF' }}
                                icon={<MdFacebook size="28px" />}
                                onClick={() => openFaceBookPage(socialData.facebookId)}

                            />

                            <IconButton
                                color={'white'}
                                aria-label="messanger"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                _hover={{ bg: '#0D74FF' }}
                                icon={<BsMessenger size="28px" />}
                                onClick={() => openMessengerChat(socialData.messengerId)}
                            />
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'} >
                        <ListHeader>Company</ListHeader>
                        <Box as="a" href={'/about'} _hover={{ color: '#0D74FF' }} >
                            About us
                        </Box>
                        <Box as="a" href={'/choose-us'} _hover={{ color: '#0D74FF' }}>
                            Why Choose us
                        </Box>
                        <Box as="a" href={'/about-nepal'} _hover={{ color: '#0D74FF' }}>
                            About Nepal
                        </Box>
                        <Box as="a" href={'/gallery'} _hover={{ color: '#0D74FF' }}>
                            Image Gallery
                        </Box>

                    </Stack>
                    <Stack align={'flex-start'} >
                        <ListHeader>Support</ListHeader>
                        <Box as="a" href={'contact-us'} _hover={{ color: '#0D74FF' }}>
                            Contact Us
                        </Box>

                        <Box as="a" href={'/license'} _hover={{ color: '#0D74FF' }}>
                            License
                        </Box>
                        <Box as="a" href={'/resume'} _hover={{ color: '#0D74FF' }}>
                            Submit Resume
                        </Box>

                        <Box as="a" href={'/jobs'} _hover={{ color: '#0D74FF' }}>
                            Latest Jobs
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <IconButton
                                bg={useColorModeValue('blue.700', 'blue.400')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{ bg: '#0D74FF' }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                                onClick={(event) => handleSubscribeMail(event)}
                            />
                            <Input
                                placeholder={'Email'}
                                w={150}
                                bg={useColorModeValue('blue.700', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                                onChange={handleInputChange}
                            />
                        </Stack>
                        <Stack direction={'row'} >
                            <IconButton
                                bg={useColorModeValue('blue.700', 'blue.400')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{ bg: '#0D74FF' }}
                                aria-label="Subscribe"
                                icon={<FaFilePdf />}
                                onClick={() => navigate("/brochure")}
                            />
                            <Center>
                                <Text>{currentFooterData.fileDownloadText}</Text>
                            </Center>
                        </Stack>
                    </Stack>
                    <Stack overflow='hidden' borderRadius={10} h={260} w={200} align={'center'} alignItems={'center'}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.020088774581!2d85.34113409999999!3d27.7016894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1983ee163391%3A0x8cbc1871ad79125f!2sSKYWAY%20MANAGEMENT%20PVT.%20LTD.!5e0!3m2!1sen!2snp!4v1703396705561!5m2!1sen!2snp"

                            width="200"
                            height="260"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
export default Footer