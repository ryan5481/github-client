import React from "react"
import GalleryPhotoCard from "../../components/card/galleryPhotoCard";
import {
    Heading, Grid, Center, useColorModeValue
} from '@chakra-ui/react'

const Gallery = () => {
    // const [imageGalleryData, setImageGalleryData] = useState([])

    // const fetchGalleryImages = async () => {

    //     try {
    //         const res = await axios.get(`${baseUrl}/get-gallery-images`)
    //         if (res) {
    //             const data = await res.data.data
    //             setImageGalleryData(data)
    //         } else {
    //             console.log("Failed to fetch images")
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchGalleryImages();
    // }, [])

    const imageGalleryData = [
        {image: "1.jpeg"},
        {image: "2.jpg"},
        {image: "3.jpg"},
        {image: "4.jpg"},
        {image: "5.jpg"},
    ]
    
    return(
        <Center 
        py={10}
        bg={useColorModeValue('blue.500', 'gray.800')}
        color='gray.100'
            w={"full"}
            >
            <Heading m={2} fontSize={'2xl'} fontFamily={'body'} p={5}>
                Image Gallery
                <Grid templateColumns={{sm: '1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }} gap={5} p={10} align="center" rowGap={5}>
                    <GalleryPhotoCard imageGalleryData={imageGalleryData}/>
                </Grid>
            </Heading>
        </Center>
    )
}

export default Gallery