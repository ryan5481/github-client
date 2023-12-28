
import { Image, Stack, Heading, Box, AspectRatio } from '@chakra-ui/react'
import React  from 'react'
import { useNavigate } from 'react-router-dom'

const SimpleCard = (props) => {
    const navigate = useNavigate()
    // const [sectorsData, setSectorsData] = useState([])

    // const fetchWorkSectors = async () => {
    //     try {
    //         const res = await axios.get(`${baseUrl}/get-worksectors`);
    //         const newData = await res.data.data
    //         setSectorsData(newData)
    //         // setLoading(false);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         // setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     fetchWorkSectors();
    // }, [])

    const sectorsData = [
        {
            image: "1.jpeg",
            sectorTitle: "Transportation",
        },
        {
            image: "2.jpeg",
            sectorTitle: "Engineering",
        },
        {
            image: "3.jpeg",
            sectorTitle: "Agriculture",
        },
        {
            image: "4.jpeg",
            sectorTitle: "Construction",
        },
        {
            image: "5.jpeg",
            sectorTitle: "Restaurant",
        },
        {
            image: "6.jpeg",
            sectorTitle: "Cruise",
        },
        {
            image: "7.jpeg",
            sectorTitle: "Security",
        },
        {
            image: "8.jpeg",
            sectorTitle: "Office",
        },
        {
            image: "9.jpeg",
            sectorTitle: "Aviation",
        },
        {
            image: "10.jpeg",
            sectorTitle: "Refinery",
        },
        {
            image: "1.jpeg",
            sectorTitle: "Technician",
        }
    ]

    const handleCategoryClick = (category) => {
        // Navigate to "/jobs" and set the selected category
        navigate('/jobs', { state: { selectedCategory: category } });
    };


    return (
        <>
            {sectorsData.map((sector, index) => {
                return (<>
                    
                            <Box
                             role={'group'}
                             p={2}
                             maxW={'330px'}
                             w={'full'}
                             maxH={420}
                             boxShadow={'2xl'}
                             rounded={'lg'}
                             pos={'relative'}
                             zIndex={1}
                             _hover={{
                                transform: 'scale(1.1)',
                            }}
                            transition="0.15s ease-in-out"
                            onClick={() => handleCategoryClick(sector.sectorTitle)}
                             >
                            <Box
                              rounded={'lg'}
                              pos={'relative'}
                              maxH={400}
                              _after={{
                                  transition: 'all .1s ease',
                                  content: '""',
                                  w: 'full',
                                  h: '120px',
                                  pos: 'absolute',
                                  top: 5,
                                  left: 0,
                                  backgroundImage: `url("/uploads/jobSectorImages/${sector.image}")`,
                                  filter: 'blur(13px)',
                                  zIndex: -1,
                              }}
                              _groupHover={{
                                  _after: {
                                      filter: 'blur(20px)',
                                  },
                              }}>
                                <AspectRatio>
                                <Image
                                    src={`/uploads/jobSectorImages/${sector.image}`}
                                    alt={sector.sectorTitle}
                                    borderRadius='lg'
                                    h={120}
                                    objectFit="contain"
                                    width="100%"
                                    transition="0.2s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />
                                </AspectRatio>
                                <Stack mt='7' spacing='3'>
                                    <Heading pb={2} fontSize='22'>{sector.sectorTitle}</Heading>
                                </Stack>
                            </Box>
                            </Box>
                       
                </>)
            })}
        </>
    )
}

export default SimpleCard