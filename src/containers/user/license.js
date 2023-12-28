import React, { useState } from "react"
import {
  Grid, Heading, Text, Box, useColorModeValue, Image, Center, Modal, ModalOverlay, ModalContent, useDisclosure, ModalBody
} from '@chakra-ui/react'

const License = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState(null);

  // const [certificatesList, setCertificatesList] = useState([])

  // const fetchCertificates = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}/get-certificate-images`)
  //     const data = res.data.data
  //     setCertificatesList(data)
  //   } catch (error) {
  //     console.error("Error: ", error)
  //   }
  // }

  // useEffect(() => {
  //   fetchCertificates()
  // }, [])

  const certificatesList = [
        {
            certificateImage: "1.jpeg", 
            certificateTitle: "License",
        },
        {
          certificateImage: "2.jpeg", 
            certificateTitle: "PAN",
        },
        {
          certificateImage: "3.jpeg", 
          certificateTitle: "Registration",
        }
    ]

  const openModal = (index) => {
    setSelectedCertificateIndex(index);
    onOpen();
  }

  const closeModal = () => {
    setSelectedCertificateIndex(null);
    onClose();
  }

  return (
    <Box
      bg={useColorModeValue('blue.500', 'gray.800')}
      color='gray.100'
      p={5}
      py={10}
    >

      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: 'xl', sm: '4xl', lg: '4xl' }}
        p={5}>

        <Text as={'span'}>
          Licenses and Certificates
        </Text>
      </Heading>
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: "1fr 1fr", xl: '1fr 1fr 1fr' }} gap={5} p={1} justifyItems="center">
        {certificatesList.map((cert, index) => {
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
                  src={`/uploads/licenseImages/${cert.certificateImage}`}
                />
              </Center>
              <Text fontWeight="bold" fontSize="2xl" m={5} textAlign={"center"} >{cert.certificateTitle}</Text>
              <Modal isOpen={isOpen && selectedCertificateIndex === index} onClose={closeModal} size='xl' zIndex={9999} >
                <ModalOverlay />
                <ModalContent >
                  <ModalBody  >
                    <Image
                      py={3}
                      src={`/uploads/licenseImages/${cert.certificateImage}`}
                      alt={cert.certificateTitle}
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

export default License

