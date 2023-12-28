import React from 'react'
import { Box } from '@chakra-ui/react'
import HeroWithBg from '../../components/card/heroWithBg'
import AllJobs from './allJobs'


const Jobs = () => {
    // const [data, setData] = useState()
    // const [loading, setLoading] = useState(true)


    // const fetchJobsList = async () => {
    //     try {
    //         console.log("Fetching job list...");
    //         const res = await axios.get(`${baseUrl}/jobslist`);
    //         setData(res.data.jobsList);
    //         // console.log(data)
    //         setLoading(false);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         setLoading(false);
    //     }
    // };



    // useEffect(() => {
    //     fetchJobsList();
    // }, [])

    return (
        <>
            <Box pt={5} m={"0px"}>
                <HeroWithBg />
               <AllJobs  displayAll={true}/>
            </Box>
        </>
    )
}

export default Jobs

