import { Box, useColorModeValue } from "@chakra-ui/react"
import ArticleCard from "../../components/card/articleCard"
import HeroWithBgButton from "../../components/card/heroWithBgButton"

const AboutUs = () => {
    // const [currentAboutUsData, setCurrentAboutUsData] = useState([])
    // const GetAboutUsData = async () => {
    //     const res = await axios.get(`${baseUrl}/get-aboutuspage`)
    //     if (res.data && res.data.headerData) {
    //         setCurrentAboutUsData(res.data.headerData)
    //         setFormData({
    //             heading1: res.data.headerData.heading1,
    //             text1: res.data.headerData.text1,
    //             heading2: res.data.headerData.heading2,
    //             text2: res.data.headerData.text2,
    //             heading3: res.data.headerData.heading3,
    //             text3: res.data.headerData.text3,
    //             heading4: res.data.headerData.heading4,
    //             text4: res.data.headerData.text4,
    //         });
    //     } else {
    //         alert("Failed to fetch header data")
    //     }
    // }

    // useEffect(() => {
    //     GetAboutUsData()
    // }, [])

    const currentAboutUsData = {
            aboutUsLandmark: "skywaynepal.com",
            heading1: "SKY-WAY MANAGEMENT",
            text1: "Sky Way Management, A last resort of Manpower requirement to its clients, has started its service since 2013 then continuously supplies the manpower pertaining Blue to White Colors Workers in the Middle East and Malaysia. It has a team of competent, Talents who have worked in the sectors for decades. Team of Talents goes deep down through the requirements received by its value clients and always focuses for the best output meeting the target in one –go to save the time and effort of both the parties for fair and successful recruitment. We always value ethics and professionalism at the top.\n\nWe excel in Hospitality, Facility Management, Security Services, Oil and Gas, Aviation and Ground Handling, Business need, MEP, Construction, and almost all sectors’ Manpower needs from our valued clients.\n\nWe have a good nexus of training institutes and Vocational Training centers to source the skilled manpower. Besides these we have our own clear data base pool from where we source the competent and qualified aspirants to address the manpower need in one-go.\n\nWe respect the job seekers, help them to enhance their skill and recommend the right job based on their cognitive power believing “Right person in the right Job” for the best result.\n\nSky-Way Leaves no Stones unturned to serve its’ value client by all measures of multiple dimensions based on the new principle of Human Resources Management. We have a standard Skill test program to understand the competency level of job seekers looking for jobs in abroad and accordingly place them in fair recruitment based on merits.\n\nWe believe in Ethical Recruitment; Equal and Free Recruitment opportunity for the Nepalese Workers.\n\nWe are against Force Labor, Debt Bondage, and unfair recruitment practices .We respect the ILO and Human Right Mandate while recruiting the manpower and always put it on the Top priority",
            heading2: "Choose Us",
            text2: "We differ from other overseas manpower suppliers because we don’t supply manpower: We provide clients with the best candidates-those who will make the clients business more profitable and successful in long run. Similarly, we place our candidates with the right opportunity, in right industry and right location making the situation WIN WIN for all the stakeholders involved in the whole process because our success is related to the success of our candidates and clients.",
            heading3: "Our Mission",
            text3: "\nTo be a leading recruitment agency in the nation in the sector for fulfilling the manpower need in OneGo to the valued clients over the globe with the the tailored based program for all sectors’ manpower recruitment for the best result.",
            heading4: "Our Vision",
            text4: "we work hard to achieve our goals together as a team with a clear shared purpose. We adapt to our clients changing needs as well changes in the market to make sure we are a business of growth, success and happiness.",
            aboutUsImage : "1.jpeg"
        }

    const imageUrl = `url("/uploads/aboutUsImage/${currentAboutUsData.aboutUsImage}")`

    return (
        <>
            <Box bg={useColorModeValue('teal.50', 'gray.1000')}>
                <Box>
                    <HeroWithBgButton imageUrl={imageUrl} />
                    <ArticleCard currentAboutUsData={currentAboutUsData} />
                </Box>
            </Box>
        </>
    )
}

export default AboutUs