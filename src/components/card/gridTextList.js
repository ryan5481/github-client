import React from "react";

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Spacer,
    Center,
    useColorModeValue
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'


export default function GridTextList(props) {



    return (
        <Box p={4} color={useColorModeValue('blue.700', 'gray.400')} justifySelf="center" >
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>{props.data.textTitle}</Heading>
                <Text color={useColorModeValue('blue.600', 'gray.400')} fontSize={'xl'}>
                {props.data.tagline}
                </Text>
            </Stack>
            <Spacer/>
            <br/>
            <Center>

            <Box maxW={"80%"} p={15}   >
                <Text color={useColorModeValue('blue.700', 'gray.400')} fontSize={'xl'} textAlign="center">
                {props.data.paragraph}                
                </Text>
            </Box>
            </Center>

            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} color={useColorModeValue('blue.700', 'gray.400')} pb={5}>
                 
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data.featureTitle1}</Text>
                                <Text  align={'left'}>{props.data.featureText1}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data.featureTitle2}</Text>
                                <Text  align={'left'}>{props.data.featureText2}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data.featureTitle3}</Text>
                                <Text  align={'left'}>{props.data.featureText3}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data.featureTitle4}</Text>
                                <Text  align={'left'}>{props.data.featureText4}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data.featureTitle5}</Text>
                                <Text  align={'left'}>{props.data.featureText5}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data.featureTitle6}</Text>
                                <Text  align={'left'}>{props.data.featureText6}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data.featureTitle7}</Text>
                                <Text  align={'left'}>{props.data.featureText7}</Text>
                            </VStack>
                        </HStack>
                        <HStack  align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600} >{props.data.featureTitle8}</Text>
                                <Text  align={'left'}>{props.data.featureText8}</Text>
                            </VStack>
                        </HStack>
                  
                </SimpleGrid>
            </Container>
        </Box>
    )
}