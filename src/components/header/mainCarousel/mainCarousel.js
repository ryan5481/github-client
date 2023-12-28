import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AspectRatio, Box } from "@chakra-ui/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const MainCarousel = () => {
  // const [carouselImageData, setCarouselImageData] = useState([])

  // const fetchCarouselImages = async () => {
  //     const res = await axios.get(`${baseUrl}/get-carousel-images`);
  //     if (res.status === 200) {
  //       setCarouselImageData(res.data.data);
  //     } else {
  //       console.log('Failed to fetch images');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching images:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCarouselImages();
  // }, []);

  const carouselImageData = [
    {
      image: "1.jpeg",
      title: "Dubai"
    },
    {
      image: "2.jpeg",
      title: "UAE"
    },
    {
      image: "3.jpeg",
      title: "Oman"
    },
    {
      image: "4.jpeg",
      title: "Malaysia"
    },
  ]

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      speed={1500}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={"mySwiper relative mt-[100px]"}
    >
      {carouselImageData && carouselImageData.map((item, index) => (
        <SwiperSlide key={index}>
          <Box 
          pos="relative"
          alignItems="center"
          justifyContent="center"
          justifyItems="center"
          >

            <AspectRatio ratio={16 / 9} w="full" h="70vh">
              <Box
              pos="absolute"
                as="img"
                src={`/uploads/topCarouselImages/${item.image}`}
                alt={item.title}
                objectFit="cover"
                style={{ filter: 'brightness(0.7)' }}
              />
            </AspectRatio>
            <Box
              pos="absolute"
              zIndex='10'
              textColor="white"
              className='absolute text-white z-10 text-3xl font-bold cursor-pointer'
              data-aos="zoom-out"
              data-aos-once="true"
              data-aos-duration="800"
            >
              {item.title}
            </Box>
          </Box>

        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MainCarousel