import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Center, useBreakpointValue } from '@chakra-ui/react';
import { Document, Page, pdfjs } from 'react-pdf';
const baseUrl = process.env.REACT_APP_BASE_URL 

// Configure pdfjs worker URL (you can adjust this path as needed)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Brochure = () => {
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const [pdfData, setPdfData] = useState();
    const [numPages, setNumPages] = useState(null);

    // GET PDF data
    const getPdfData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-brochure-file`);
            if (res) {
                setPdfData(res.data.data);
            } else {
                alert('Failed to fetch PDF data');
            }
        } catch (error) {
            console.error('Error fetching PDF data:', error);
        }
    };

    useEffect(() => {
        getPdfData();
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };



    return (
        <>
            {isMobileView ? (<Box w={"100%"} >
                {pdfData && (
                    <>
                        <Center>
                            <Box  > 
                                <Document
                                    file={{
                                        data: pdfData.brochurePdfFile.data,
                                    }}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                >
                                    {Array.from(new Array(numPages), (el, index) => (
                                        <Page
                                            key={`page_${index + 1}`}
                                            pageNumber={index + 1}
                                            width={"375"}
                                        />
                                    ))}
                                </Document>
                            </Box>
                        </Center>
                    </>
                )
                }
            </Box>) 
            :
            (<Box w={"100%"} >
            {pdfData && (
                <>
                    <Center>
                        <Box  > 
                            <Document
                                file={{
                                    data: pdfData.brochurePdfFile.data,
                                }}
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                {Array.from(new Array(numPages), (el, index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        width={900}
                                    />
                                ))}
                            </Document>
                        </Box>
                    </Center>
                </>
            )
            }
        </Box>)
            }
        </>
    );
};

export default Brochure;
