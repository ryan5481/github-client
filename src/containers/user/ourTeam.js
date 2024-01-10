import React from "react"
import GalleryPhotoCard from "../../components/card/galleryPhotoCard";
import {
    Heading, Grid, Center, useColorModeValue, Image, Box, Text
} from '@chakra-ui/react'

const OurTeam = () => {

    const teamImages = [
        {
            image: "1.png",
            title: "President",
            name: "Bhupendra Kadariya",
            email: "bhupendrakadariya83@gmail.com",
        },
        {
            image: "2.png",
            title: "Director",
            name: "Manoj Dahal",
            email: "info@skywaynepal.com",
        },
        {
            image: "3.png",
            title: "Country Director, Qatar",
            name: "Aftab Khan",
            email: "aftaabkhan.official@gmail.com",
        },
        {
            image: "4.png",
            title: "Country Director, UAE",
            name: "Tulsi Poudyal",
            email: "md.skywayuae@gmail.com",
        },
    ]

    return (
        <Center
            py={10}
            bg={useColorModeValue('blue.600', 'gray.800')}
            color='gray.100'
            w={"full"}
        >
            <Heading m={2} fontSize={'3xl'} fontFamily={'body'} p={5}>
                Our Team
                <Grid templateColumns={{ sm: '1fr', lg: '1fr 1fr 1fr 1fr' }} gap={5} p={10} align="center" rowGap={5}>
                    {teamImages && teamImages.map((item, index) => (
                        <Box
                            reative
                            h="250px"
                            m="20px"
                        >
                            <Image
                                src={`/uploads/ourTeamImages/${item.image}`}
                                alt={item.title}
                                rounded={"10px"}
                                border={"2px solid white"}
                                objectFit='cover'
                                h="200px"
                                w="100%"
                                _hover={{
                                    transform: 'scale(1.05)',
                                }}
                                transition="0.4s ease-in-out"
                                absoulte
                            />
                            <Box
                                absolute
                                p={2}
                            >
                                <Text
                                    absolute
                                    fontSize={20}
                                >
                                    {item?.name}
                                </Text>
                                <Text
                                    absolute
                                    color="red.400"
                                    fontSize={18}
                                >
                                    {item?.title}
                                </Text>
                                <Text
                                    absolute
                                    fontSize={14}
                                    // fontStyle="italic"
                                    fontWeight="6"
                                    color="teal.100"
                                >
                                    {item?.email}
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Heading>
        </Center>
    )
}

export default OurTeam