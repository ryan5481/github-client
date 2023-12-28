import React from "react";
import { Text, Box, Grid  } from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'

const Procedure1 = () => {
  // const [stepperData, setStepperData] = useState([])

  // const fetchStepperData  = async() => {
  //   try{
  //     const res = await axios.get(`${baseUrl}/get-procedure`)
  //     if(res){
  //       setStepperData(res.data.data)
  //     }
  //   }catch(error){
  //     console.error("Error: ", error)
  //   }
  // }

  // useEffect(() => {
  //   fetchStepperData()
  // }, [])

  const stepperData = [
    {
        "procedureText": "Receive Demand",
        "__v": 0
    },
    {
        "procedureText": "Candidate Acceptance",
        "__v": 0
    },
    {
        "procedureText": "Prescreening",
        "__v": 0
    },
    {
        "procedureText": "Client Interview",
        "__v": 0
    },
    {
        "procedureText": "Selection Results",
        "__v": 0
    },
    {
        "procedureText": "Sign Offer",
        "__v": 0
    },
    {
        "procedureText": "Medical & Documentation",
        "__v": 0
    },
    {
        "procedureText": "Receive Visa",
        "__v": 0
    },
    {
        "procedureText": "Orientation",
        "__v": 0
    },
    {
        "procedureText": "Preboarding",
        "__v": 0
    },
    {
        "procedureText": "Deployment",
        "__v": 0
    },
    {
        "procedureText": "Feedback",
        "__v": 0
    },
    {
        "procedureText": "Deployment",
        "__v": 0
    }
]

  const stepNumberToWord = (number) => {
    const words = [
      "First",
      "Second",
      "Third",
      "Fourth",
      "Fifth",
      "Sixth",
      "Seventh",
      "Eighth",
      "Ninth",
      "Tenth",
      "Eleventh",
      "Twelfth",
      "Thirteenth",
      "Fourteenth",
      "Fifteenth",
      "Sixteenth",
      "Seventeenth",
      "Eighteenth",
    ];
    
    return words[number - 1] || "";
  };



  return (
    <Box alignItems={'center'} px={10} pb={{ sm: '2', md: '7', lg: '10' }}>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1r', lg: '1fr 1fr 1fr 1fr 1fr 1fr' }} gap px={{ sm: '2', md: '10', lg: '15' }} alignContent='center' align='center' rowGap={20} maxW={'95%'}> 
        {stepperData.map((item, index) => {
          return (<>
            <Box >
              <CheckCircleIcon color={'green.400'} boxSize={10} />
              <Text fontSize={'2xl'} textAlign='center' fontWeight={'bold'} >
              {stepNumberToWord(index + 1)}
              </Text>
              <Text fontSize={'xl'} textAlign='center' >
                {item.procedureText}
                
              </Text>
              </Box>
              
            </>)
        })} 
          </Grid > 
    </Box>
  )
}

export default Procedure1

