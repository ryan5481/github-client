import React from "react";
import
{ Box,
  Container,
  Stack,
  Text,
  Image,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react'

export default function AboutImageParagraphCard() {
  // const [data, setData] = useState([])

  // const fetchAboutNepalData = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}/get-about-nepal`);
  //     const data = res.data.data;
  //     setData(data)
  //     // setHeroImage(`data:image/jpeg;base64,${data.heroImage}`)
  
  //   } catch (error) {
  //     console.error("Error: ", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchAboutNepalData();
  // }, []);

    const data = {
        heroImage: "1.jpeg",
        title1: "About Nepal",
        tagline: "A country of lovingkindness and compassion",
        shortDescription: "Middle Eastern countries continue to attract hundreds of thousands of Nepali migrant workers every year.",
        paragraph: "Nepal is a mountainous and a landlocked country situated between two giant neighbors, China to the North and India to the South, East, and West. Nepal boasts of having the highest peak of the world, Mount Everest, and visitors from all over the world visit the country to climb Mount Everest and to see the beautiful panorama, snow-capped mountains, and gorgeous historic monuments.\n\nMoreover, it should also be noted that Nepal is the 2nd richest country in the world in water resources with a substantial number of rivers & streams flowing towards the South from the high Himalayas. And the Tilicho Lake situated at the highest land of the world is also in Nepal. So the people who visit Nepal definitely get optimal gratification from its natural gorgeous scenery.",
        title2: "Demographics",
        key1: "Population:",
        value1: "29,164,578",
        key2: "Growth Rate:",
        value2: "0.92%",
        key3: "Migration Rate:",
        value3: "0.92%", 
        key4: " Birth Rate:",
        value4: "17.53 births/1,000 population",
        key5: "Official Language:",
        value5: "Nepali",
        // key6: "Title 1",
        // value6: "Description 1",
        // key7: "Title:",
        // value7: "Description",
        // key8: "Title:",
        // value8: "Description",
        point1: "Construction",
        point2: "Security",
        point3: "Cook",
        point4: "Waiter",
        point5: "Caretaker",
        point6: "Driver",
        point7: "Assistant ",
        point8: "Accountant ",
        title3: "Overseas Nepali Immigrant Professions"
    }

  return (
    <Container maxW={'7xl'} color={useColorModeValue('blue.700', 'gray.400')}>
     
        <Stack spacing={{ base: 6, md: 10 }}>
        <Image
            rounded={'md'}
            alt={'product image'}
            src={`/uploads/aboutNepalImage/${data.heroImage}`}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {data.title1}
            </Heading>
            <Text
              color={useColorModeValue('gray.400', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {data.tagline}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('blue.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                  {data.shortDescription}
              </Text>
              <Text fontSize={'lg'}>
              {data.paragraph}              
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                {data.title2}
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key1}
                  </Text>{' '}
                  {data.value1}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key2}
                  </Text>{' '}
                  {data.value2}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key3}
                  </Text>{' '}
                  {data.value3}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key4}
                  </Text>{' '}
                  {data.value4}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key5}
                  </Text>{' '}
                  {data.value5}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key6}
                  </Text>{' '}
                  {data.value6}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key7}
                  </Text>{' '}
                  {data.value7}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key8}
                  </Text>{' '}
                  {data.value8}
                </ListItem>
              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                {data.title3}
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pb={10}>
                <List spacing={2}>
                  <ListItem>{data.point1}</ListItem>
                  <ListItem>{data.point3}</ListItem>{' '}
                  <ListItem>{data.point5}</ListItem>
                  <ListItem>{data.point7}</ListItem>
                </List>
                <List spacing={2}>
                <ListItem>{data.point2}</ListItem>
                <ListItem>{data.point4}</ListItem>
                <ListItem>{data.point6}</ListItem>
                <ListItem>{data.point8}</ListItem>

                </List>
              </SimpleGrid>
            </Box>
          </Stack>

        </Stack>
    </Container>
  )
}