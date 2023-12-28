import {
  Box,
  Heading,
  Text,
  Wrap,
  Grid,
  Container,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'

const ArticleCard = (props) => {
  return (
    <Container maxW={'6xl'} p="12" borderRadius='lg'>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        shadow={'xl'}
        rounded={'5'}
      >
      </Box>
      <Heading as="h2" fontSize="4xl"
        color={useColorModeValue('blue.500', 'white')}
      >{props.currentAboutUsData.heading1}</Heading>
      <VStack paddingTop="40px" spacing="2" textAlign="left" color={useColorModeValue('blue.700', 'whiteAlpha.100')} >
        <Box maxW={{ sm: '100%', lg: '100%' }} p={10}
          gap={10}
          bg={useColorModeValue('blue.500', 'whiteAlpha.100')}
          color={'white'}
          w={'100%'}
          borderWidth="1px"
          rounded="10px"
          shadow="lg"
          position="relative">
          <Text as="p" fontSize="md" p={5} shadow={'xl'} rounded={'10px'}>
            {props.currentAboutUsData.text1}
          </Text>
        </Box>
      </VStack>
      <Box h={10}></Box>
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }}
        p={10}
        gap={10}
        bg={useColorModeValue('blue.500', 'whiteAlpha.100')}
        color={'white'}
        w={'100%'}
        borderWidth="1px"
        rounded="10px"
        shadow="lg"
        position="relative"
      >
        <Wrap spacing="30px" marginTop="5" p={5} shadow={'xl'} rounded={'5px'}>
          <Box w="100%">
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {props.currentAboutUsData.heading2}
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2" textAlign="left">
              {props.currentAboutUsData.text2}
            </Text>
          </Box>
        </Wrap>
        <Wrap spacing="30px" marginTop="5" shadow={'xl'} p={5} rounded={'5'}>
          <Box w="100%">
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {props.currentAboutUsData.heading3}
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2" textAlign="left">
              {props.currentAboutUsData.text3}
            </Text>
          </Box>
          <Box w="100%">
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {props.currentAboutUsData.heading4}
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2" textAlign="left">
              {props.currentAboutUsData.text4}
            </Text>
          </Box>
        </Wrap>
      </Grid>
    </Container>
  )
}

export default ArticleCard