import {
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  Stack,
  VStack,
  Grid,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsWhatsapp, BsPerson, BsMessenger } from 'react-icons/bs'

const ContactCard = (props) => {

  function openMessengerChat(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const messengerUrl = `https://m.me/${props.data.oneTapMessengerLink}`;
    window.open(messengerUrl, 'Messenger Chat', 'width=600,height=400');
  }

  function openFaceBookPage(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const facebookUrl = `https://facebook.com/${props.data.facebookId}`;
    window.open(facebookUrl, 'Facebook Page', 'width=600,height=400');
  }

  function openWhatsappChat(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const whatsappPhoneNumber = `https://wa.me/${props.data.whatsappId}`;
    window.open(whatsappPhoneNumber, 'Whatsapp Chat', 'width=600,height=400');
  }

  return (
    <Box maxW="full" mt={0} centerContent overflow="hidden">
      <Box
        bg={useColorModeValue('blue.600', 'gray.800')}
        color={'white'}
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        px={{ sm: 5, md: 5, lg: 16 }}>
        <Grid templateColumns={{ sm: '1fr', md: '1fr', lg: '1fr 1fr 1fr' }} p={10} gap={10}  >
          {/* LEFT */}
          <Box w={200} pt={3} alignSelf="center"  >
            <Heading fontSize="3xl" >{props.data.contactUsHeading}</Heading>
            <Text fontSize="md" mt={{ sm: 3, md: 3, lg: 5 }} color={useColorModeValue('grey.200', 'grey.200')}
            >
              {props.data.contactUsSubHeading}
            </Text>
            <Box py={{ base: 1, sm: 1, md: 2, lg: 3 }} color={useColorModeValue('grey.800', 'grey.100')} alignSelf={'center'} >
              <Stack pl={0} spacing={3} color={useColorModeValue('grey.800', 'grey.100')}>
                <Box pl={0} spacing={0} justifySelf="left" color={'white'}>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    _hover={{ color: '#0080FE' }}
                    leftIcon={<MdPhone color="white" size="20px" />}
                    color={'white'}
                  >
                    <a href={`tel:${props.data.phoneNumber1}`}>{props.data.phoneNumber1}</a>
                  </Button>
                  <Button
                    color={'white'}
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    _hover={{ color: '#0080FE' }}
                    leftIcon={<MdPhone color="white" size="20px" />}
                  >
                    <a href={`tel:${props.data.phoneNumber2}`}>{props.data.phoneNumber2}</a>
                  </Button>
                </Box>
                <Button
                  color={'white'}
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  _hover={{ color: '#0080FE' }}
                  leftIcon={<MdEmail color="white" size="20px" />}
                >
                  <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
                </Button>
                <Button
                  color={'white'}
                  size="md"
                  height="48px"
                  width="100%"
                  variant="ghost"
                  _hover={{ color: '#0080FE' }}
                  leftIcon={<MdEmail color="white" size="20px" />}
                >
                  <a href={`mailto:${props.data.email}`}>{props.data.email2}</a>
                </Button>
                <Button
                  color={'white'}
                  size="md"
                  height="48px"
                  width="full"
                  variant="ghost"
                  _hover={{ color: '#0080FE' }}
                  leftIcon={<MdLocationOn color="white" size="20px" />}>
                  {props.data.address}
                </Button>
              </Stack>
              <Stack
                direction={'horizontal'}
                mt={{ lg: 10, md: 10 }}
                spacing={2}
                px={0}
                alignSelf="center"
              >
                <IconButton
                  color={'white'}
                  aria-label="whatsapp"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsWhatsapp size="28px" />}
                  onClick={() => openWhatsappChat(props.data.facebookId)}

                />
                <IconButton
                  color={'white'}
                  aria-label="facebook"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<MdFacebook size="28px" />}
                  onClick={() => openFaceBookPage(props.data.facebookId)}

                />

                <IconButton
                  color={'white'}
                  aria-label="messanger"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsMessenger size="28px" />}
                  onClick={() => openMessengerChat(props.data.messengerId)}
                />

              </Stack>
            </Box>
          </Box>
          {/* MIDDLE */}
          <Box bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} h={{ base: '500px', sm: '450', md: '450' }} w={{ base: '300px', sm: '400px', md: '400px', lg: '350px', xl: '400px' }} borderRadius="lg" alignContent="center" >
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
          {/* RIGHT */}
          <Box overflow='hidden' borderRadius={10} w={{ base: '300px', sm: '400px', md: '400px', lg: '350px', xl: '400px' }} h={450}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.020088774581!2d85.34113409999999!3d27.7016894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1983ee163391%3A0x8cbc1871ad79125f!2sSKYWAY%20MANAGEMENT%20PVT.%20LTD.!5e0!3m2!1sen!2snp!4v1703396705561!5m2!1sen!2snp" 
            className='footer-map'
            width="400"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default ContactCard