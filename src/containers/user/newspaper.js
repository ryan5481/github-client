import React, { useState } from "react"
import {
  Grid, Heading, Text, Box, useColorModeValue, Image, Center, Modal, ModalOverlay, ModalContent, useDisclosure, ModalBody
} from '@chakra-ui/react'

const Newspaper = () => {
  // const [newspaperAds, setNewspaperAds] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAdIndex, setSelectedAdIndex] = useState(null);

  // const fetchNewspaperAds = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}/get-newspaper-images`)
  //     const data = res.data.data
  //     setNewspaperAds(data)
  //   } catch (error) {
  //     console.error("Error: ", error)
  //   }
  // }

  // useEffect(() => {
  //   fetchNewspaperAds()
  // }, [])

  const newspaperAds = [
        {
            newsAdImage: "1.png",
        },
        {
          newsAdImage: "2.png",
        },
        {
          newsAdImage: "3.png",
        }
    ]

  const openModal = (index) => {
    setSelectedAdIndex(index);
    onOpen();
  }

  const closeModal = () => {
    setSelectedAdIndex(null);
    onClose();
  }

  return (
    <Box
      bg={useColorModeValue('blue.500', 'gray.800')}
      color='gray.100'
      p={5}
      py={10}
      pb={10}
    >

      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: 'xl', sm: '4xl', lg: '4xl' }}
        p={5}>

        <Text as={'span'}>
          Newspaper Advertisements
        </Text>
      </Heading>
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: "1fr 1fr", xl: '1fr 1fr 1fr' }} gap={5} p={1} justifyItems="center">
        {newspaperAds.map((ad, index) => {
          return (
            <Box key={index}>
              <Center
                minH={530}
                p={2}
                w={{ sm: 'xs', md: 'sm', lg: "sm" }}
                alignItems="center"
                justifyContent="center"
                rounded="10px"
                borderWidth="1px"
                shadow="lg"
                position="relative"
                isCentered
                onClick={() => openModal(index)}
                cursor="pointer"
              >
                <Image
                  rounded={"10px"}
                  objectFit="cover" 
                  width="100%"
                  src={`/uploads/newspaperAdImages/${ad.newsAdImage}`}
                />
              </Center>
              <Modal isOpen={isOpen && selectedAdIndex === index} onClose={closeModal} size='xl' zIndex={9999} >
                <ModalOverlay />
                <ModalContent >
                  <ModalBody  >
                    <Image
                      py={3}
                      src={`/uploads/newspaperAdImages/${ad.newsAdImage}`}
                      alt={ad.newsAdTitle}
                    />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Newspaper

