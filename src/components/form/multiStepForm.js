import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Progress,
  Grid,
  RadioGroup,
  Radio,
  Spacer,
  Box,
  Button,
  Heading,
  Flex,
  FormControl,
  Stack,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Textarea,
  Center,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import axios from "axios"
import { useFormik } from 'formik'
import * as Yup from 'yup'
const baseUrl = process.env.REACT_APP_BASE_URL

const Form1 = ({ formData, setFormData, nextStep }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobIdFromQuery = queryParams.get('jobId');

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
    nationality: Yup.string().required('Nationality is required'),
    passportNumber: Yup.string().required('Passport Number is required'),
    placeOfIssue: Yup.string().required('Place of issue is required'),
    expiryDate: Yup.string().required('Expiry Date is required'),
    dateOfBirth: Yup.string().required('Date of birth is required'),
    height: Yup.string().required('Height is required'),
    weight: Yup.string().required('Weight is required'),
    maritalStatus: Yup.string().required('marital Status is required'),
    religion: Yup.string().required('Religion is required')
  })

  const formik = useFormik({
    initialValues: {
      fullName: formData.fullName || '',
      gender: formData.gender || '',
      address: formData.address || '',
      nationality: formData.nationality || '',
      passportNumber: formData.passportNumber || '',
      placeOfIssue: formData.placeOfIssue || '',
      expiryDate: formData.expiryDate || '',
      dateOfBirth: formData.dateOfBirth || '',
      height: formData.height || '',
      weight: formData.weight || '',
      maritalStatus: formData.maritalStatus || '',
      religion: formData.religion || '',
    },
    validationSchema,
    onSubmit: () => {
      if (formik.isValid) {
        nextStep();
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        color={useColorModeValue('blue.700', 'gray.1000')}
      >
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Personal Information
        </Heading>
        <Flex>

          <FormControl mr="5%" py={2}>
            <FormLabel htmlFor="job-code" >
              Job code (Optional)
            </FormLabel>
            <Input id="jobCode" placeholder="Job code for the published job you want to apply for"
              value={jobIdFromQuery || formik.values.jobId}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  jobId: e.target.value,
                });
              }} />
          </FormControl>

        </Flex>
        {/* NAME ADDRESS */}
        <Flex>
          <FormControl mr={"5%"} py={2} id="fullName" isInvalid={formik.errors.fullName && formik.touched.fullName}>
            <FormLabel htmlFor="fullName" isTruncated>Full Name</FormLabel>
            <Input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={formik.values.fullName}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  fullName: e.target.value,
                });
              }}
              onBlur={formik.handleBlur}
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <Box color="red.500" mt={1}>
                {formik.errors.fullName}
              </Box>
            )}
          </FormControl>
          <FormControl mr={"5%"} py={2} id="address" isInvalid={formik.errors.address && formik.touched.address}>
            <FormLabel htmlFor="address" isTruncated>Address</FormLabel>
            <Input
              type="text"
              id="address"
              placeholder="Address"
              value={formik.values.address}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  address: e.target.value,
                });
              }}
              onBlur={formik.handleBlur}
            />
            {formik.errors.address && formik.touched.address && (
              <Box color="red.500" mt={1}>
                {formik.errors.address}
              </Box>
            )}
          </FormControl>
        </Flex>

        {/* NATIONALITY PASSPORT */}
        <Flex>
          <FormControl mr={"5%"} py={2} id="nationality" isInvalid={formik.errors.nationality && formik.touched.nationality}>
            <FormLabel htmlFor="address" isTruncated>Nationality</FormLabel>
            <Input
              type="text"
              id="nationality"
              placeholder="nationality"
              value={formik.values.nationality}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  nationality: e.target.value,
                });
              }}
              onBlur={formik.nationality}
            />
            {formik.errors.nationality && formik.touched.nationality && (
              <Box color="red.500" mt={1}>
                {formik.errors.nationality}
              </Box>
            )}
          </FormControl>

          <FormControl mr={"5%"} py={2} id="passportNumber" isInvalid={formik.errors.passportNumber && formik.touched.passportNumber}>
            <FormLabel htmlFor="passportNumber" isTruncated>Passport Number</FormLabel>
            <Input
              type="number"
              id="passportNumber"
              placeholder="passportNumber"
              value={formik.values.passportNumber}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  passportNumber: e.target.value,
                });
              }}
              onBlur={formik.passportNumber}
            />
            {formik.errors.passportNumber && formik.touched.passportNumber && (
              <Box color="red.500" mt={1}>
                {formik.errors.passportNumber}
              </Box>
            )}
          </FormControl>
          {/* GENDER */}
          <FormControl id="gender" py={2} isInvalid={formik.errors.gender && formik.touched.gender}>
            <FormLabel>Gender</FormLabel>
            <Select
              id="gender"
              placeholder="Select one"
              value={formik.values.gender}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  gender: e.target.value,
                });
              }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
            {formik.errors.gender && formik.touched.gender && (
              <Box color="red.500" mt={1}>
                {formik.errors.gender}
              </Box>
            )}
          </FormControl>
        </Flex>
        {/* PLACE & EXPIRY */}
        <Flex>

          <FormControl mr={"5%"} py={2} id="placeOfIssue" isInvalid={formik.errors.placeOfIssue && formik.touched.placeOfIssue}>
            <FormLabel htmlFor="placeOfIssue" isTruncated>Place of issue</FormLabel>
            <Input
              type="text"
              id="placeOfIssue"
              placeholder="placeOfIssue"
              value={formik.values.placeOfIssue}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  placeOfIssue: e.target.value,
                });
              }}
              onBlur={formik.placeOfIssue}
            />
            {formik.errors.placeOfIssue && formik.touched.placeOfIssue && (
              <Box color="red.500" mt={1}>
                {formik.errors.placeOfIssue}
              </Box>
            )}
          </FormControl>


          <FormControl mr={"5%"} py={2} id="expiryDate" isInvalid={formik.errors.expiryDate && formik.touched.expiryDate}>
            <FormLabel htmlFor="expiryDate" isTruncated>Expiry Date</FormLabel>
            <Input
              type="text"
              id="expiryDate"
              placeholder="expiryDate"
              value={formik.values.expiryDate}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  expiryDate: e.target.value,
                });
              }}
              onBlur={formik.expiryDate}
            />
            {formik.errors.expiryDate && formik.touched.expiryDate && (
              <Box color="red.500" mt={1}>
                {formik.errors.expiryDate}
              </Box>
            )}
          </FormControl>
        </Flex>
        {/* DOB HEIGHT WEIGHT */}
        <Flex>
          <FormControl mr={"5%"} py={2} id="dateOfBirth" isInvalid={formik.errors.dateOfBirth && formik.touched.dateOfBirth}>
            <FormLabel htmlFor="dateOfBirth" isTruncated>Date of birth</FormLabel>
            <Input
              type="text"
              id="dateOfBirth"
              placeholder="dateOfBirth"
              value={formik.values.dateOfBirth}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  dateOfBirth: e.target.value,
                });
              }}
              onBlur={formik.dateOfBirth}
            />
            {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
              <Box color="red.500" mt={1}>
                {formik.errors.dateOfBirth}
              </Box>
            )}
          </FormControl>
          <FormControl mr={"5%"} py={2} id="height" isInvalid={formik.errors.height && formik.touched.height}>
            <FormLabel htmlFor="height" isTruncated>Height*</FormLabel>
            <Input
              type="number"
              id="height"
              placeholder="height"
              value={formik.values.height}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  height: e.target.value,
                });
              }}
              onBlur={formik.height}
            />
            {formik.errors.height && formik.touched.height && (
              <Box color="red.500" mt={1}>
                {formik.errors.height}
              </Box>
            )}
          </FormControl>
          <FormControl mr={"5%"} py={2} id="weight" isInvalid={formik.errors.weight && formik.touched.weight}>
            <FormLabel htmlFor="weight" isTruncated>Weight</FormLabel>
            <Input
              type="number"
              id="weight"
              placeholder="weight"
              value={formik.values.weight}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  weight: e.target.value,
                });
              }}
              onBlur={formik.weight}
            />
            {formik.errors.weight && formik.touched.weight && (
              <Box color="red.500" mt={1}>
                {formik.errors.weight}
              </Box>
            )}
          </FormControl>
        </Flex>
        <Flex>
          <FormControl id="maritalStatus" mr={"5%"} py={2} isInvalid={formik.errors.maritalStatus && formik.touched.maritalStatus}>
            <FormLabel isTruncated>Marital status</FormLabel>
            <Select
              id="maritalStatus"
              placeholder="Select one"
              value={formik.values.maritalStatus}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  maritalStatus: e.target.value,
                });
              }}
            >
              <option value="Married">Married</option>
              <option value="Single">Single</option>
            </Select>
            {formik.errors.maritalStatus && formik.touched.maritalStatus && (
              <Box color="red.500" mt={1}>
                {formik.errors.maritalStatus}
              </Box>
            )}
          </FormControl>

          <FormControl mr={"5%"} py={2} id="children" isInvalid={formik.errors.children && formik.touched.children}>
            <FormLabel htmlFor="children" isTruncated>Children</FormLabel>
            <Input
              type="children"
              id="children"
              placeholder="Number of children"
              value={formik.values.children}
              onChange={formik.handleChange}
              onBlur={formik.children}
            />
            {formik.errors.children && formik.touched.children && (
              <Box color="red.500" mt={1}>
                {formik.errors.children}
              </Box>
            )}
          </FormControl>
          <FormControl mr={"5%"} py={2} id="religion" isInvalid={formik.errors.religion && formik.touched.religion}>
            <FormLabel htmlFor="religion" isTruncated >Religion</FormLabel>
            <Input
              type="religion"
              id="religion"
              placeholder="Religion"
              value={formik.values.religion}
              onChange={(e) => {
                formik.handleChange(e);
                setFormData({
                  ...formData,
                  religion: e.target.value,
                });
              }}
              onBlur={formik.religion}
            />
            {formik.errors.religion && formik.touched.religion && (
              <Box color="red.500" mt={1}>
                {formik.errors.religion}
              </Box>
            )}
          </FormControl>
        </Flex>
      </Box>
      <Button type="submit" mt={4} colorScheme="blue" w={'200px'} rounded={"10px"}>
        Next
      </Button>
    </form>
  )
}

const Form2 = ({ formData, setFormData, nextStep }) => {
  const validationSchema = Yup.object().shape({
    arabic: Yup.object().shape({
      speaking: Yup.string().required('Select proficiency for Speaking'),
      listening: Yup.string().required('Select proficiency for Listening'),
      reading: Yup.string().required('Select proficiency for Reading'),
      writing: Yup.string().required('Select proficiency for Writing'),
    }),
    english: Yup.object().shape({
      speaking: Yup.string().required('Select proficiency for Speaking'),
      listening: Yup.string().required('Select proficiency for Listening'),
      reading: Yup.string().required('Select proficiency for Reading'),
      writing: Yup.string().required('Select proficiency for Writing'),
    }),
    hindi: Yup.object().shape({
      speaking: Yup.string().required('Select proficiency for Speaking'),
      listening: Yup.string().required('Select proficiency for Listening'),
      reading: Yup.string().required('Select proficiency for Reading'),
      writing: Yup.string().required('Select proficiency for Writing'),
    }),
    education: Yup.string().required('Education is a required field'),
    workExpNepal: Yup.object().shape({
      field: Yup.string().required('Field is required'),
      employer: Yup.string().required('Employer is required'),
      duration: Yup.number().required('Duration is required').positive().integer(),
      address: Yup.string().required('Address is required'),
    }),
    workExpOverseas: Yup.object().shape({
      field: Yup.string().required('Field is required'),
      employer: Yup.string().required('Employer is required'),
      duration: Yup.number().required('Duration is required').positive().integer(),
      country: Yup.string().required('Country is required'),
    }),
    otherSkills: Yup.string().max(200, 'Other Skills must be 200 characters or less'),
  });

  const formik = useFormik({
    initialValues: {
      arabic: {
        speaking: formData.arabic?.speaking || '',
        listening: formData.arabic?.listening || '',
        reading: formData.arabic?.reading || '',
        writing: formData.arabic?.writing || '',
      },
      english: {
        speaking: formData.english?.speaking || '',
        listening: formData.english?.listening || '',
        reading: formData.english?.reading || '',
        writing: formData.english?.writing || '',
      },
      hindi: {
        speaking: formData.hindi?.speaking || '',
        listening: formData.hindi?.listening || '',
        reading: formData.hindi?.reading || '',
        writing: formData.hindi?.writing || '',
      },
      education: formData.education || '',
      workExpNepal: {
        field: formData.workExpNepal?.field || '',
        employer: formData.workExpNepal?.employer || '',
        duration: formData.workExpNepal?.duration || '',
        address: formData.workExpNepal?.address || '',
      },
      workExpOverseas: {
        field: formData.workExpOverseas?.field || '',
        employer: formData.workExpOverseas?.employer || '',
        duration: formData.workExpOverseas?.duration || '',
        address: formData.workExpOverseas?.address || '',
      },
      otherSkills: formData.otherSkills || '',
    },

    validationSchema,
    onSubmit: () => {
      if (formik.isValid) {
        nextStep();
      }
    }
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const [section, key] = id.split('.');

    if (section === 'education' || section === 'otherSkills') {
      // Handle 'education' and 'otherSkills' here
      setFormData((prevData) => ({
        ...prevData,
        [section]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [key]: value,
        },
      }));
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box color={useColorModeValue('blue.700', 'gray.1000')}>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Qualification
        </Heading>
        {/*🔴 ARABIC */}
        <FormControl py={2} isInvalid={formik.errors.arabic && formik.touched.arabic}>
          <FormLabel fontWeight="bold" size='xl'>Language Proficeincy</FormLabel>
          <FormLabel fontWeight="bold" size='xl'>Arabic</FormLabel>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }} gap={5}>
          <Box>
          {/* Speaking */}
          <FormLabel>Speaking</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.arabic.speaking}
            onChange={(e) => {
              formik.setFieldValue('arabic', {
                ...formik.values.arabic,
                speaking: e.target.value,
              });
              setFormData({
                ...formData,
                arabic: {
                  ...formData.arabic,
                  speaking: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
          </Box>
          <Box>
          {/* Listening */}
          <FormLabel>Listening</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.arabic.listening}
            onChange={(e) => {
              formik.setFieldValue('arabic', {
                ...formik.values.arabic,
                listening: e.target.value,
              });
              setFormData({
                ...formData,
                arabic: {
                  ...formData.arabic,
                  listening: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
          </Box>
          <Box>
          {/* Reading */}
          <FormLabel>Reading</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.arabic.reading}
            onChange={(e) => {
              formik.setFieldValue('arabic', {
                ...formik.values.arabic,
                reading: e.target.value,
              });
              setFormData({
                ...formData,
                arabic: {
                  ...formData.arabic,
                  reading: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
          </Box>
          <Box>
          {/* Writing */}
          <FormLabel>Writing</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.arabic.writing}
            onChange={(e) => {
              formik.setFieldValue('arabic', {
                ...formik.values.arabic,
                writing: e.target.value,
              });
              setFormData({
                ...formData,
                arabic: {
                  ...formData.arabic,
                  writing: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
          
          {formik.errors.arabic && formik.touched.arabic && (
            <Box color="red.500" mt={2}>
              Please select proficiency for all fields.
            </Box>
          )}
          </Box>
      </Grid>
        </FormControl>
        {/* 🔴ENGLISH */}

        <FormControl py={2} isInvalid={formik.errors.english && formik.touched.english}>
          <FormLabel fontWeight="bold" size='xl'>English</FormLabel>

          {/* Speaking */}
          <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }} gap={5}>
            <Box>
          <FormLabel>Speaking</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.english.speaking}
            onChange={(e) => {
              formik.setFieldValue('english', {
                ...formik.values.english,
                speaking: e.target.value,
              });
              setFormData({
                ...formData,
                english: {
                  ...formData.english,
                  speaking: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
          </Box>
          <Box>
          {/* Listening */}
          <FormLabel>Listening</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.english.listening}
            onChange={(e) => {
              formik.setFieldValue('english', {
                ...formik.values.english,
                listening: e.target.value,
              });
              setFormData({
                ...formData,
                english: {
                  ...formData.english,
                  listening: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
          </Box>
          <Box>

          {/* Reading */}
          <FormLabel>Reading</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.english.reading}
            onChange={(e) => {
              formik.setFieldValue('english', {
                ...formik.values.english,
                reading: e.target.value,
              });
              setFormData({
                ...formData,
                english: {
                  ...formData.english,
                  reading: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
          </Box>
          <Box>
          {/* Writing */}
          <FormLabel>Writing</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.english.writing}
            onChange={(e) => {
              formik.setFieldValue('english', {
                ...formik.values.english,
                writing: e.target.value,
              });
              setFormData({
                ...formData,
                english: {
                  ...formData.english,
                  writing: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>

          {formik.errors.english && formik.touched.english && (
            <Box color="red.500" mt={2}>
              Please select proficiency for all fields.
            </Box>
          )}
          </Box>
          
          </Grid>
        </FormControl>


        {/*🔴 HINDI */}
        <FormControl py={2} isInvalid={formik.errors.hindi && formik.touched.hindi}>
          <FormLabel fontWeight="bold" size='xl'>Hindi</FormLabel>

          {/* Speaking */}
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }} gap={5}>
            <Box>
          <FormLabel>Speaking</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.hindi.speaking}
            onChange={(e) => {
              formik.setFieldValue('hindi', {
                ...formik.values.hindi,
                speaking: e.target.value,
              });
              setFormData({
                ...formData,
                hindi: {
                  ...formData.hindi,
                  speaking: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
          </Box>
          <Box>
          {/* Listening */}
          <FormLabel>Listening</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.hindi.listening}
            onChange={(e) => {
              formik.setFieldValue('hindi', {
                ...formik.values.hindi,
                listening: e.target.value,
              });
              setFormData({
                ...formData,
                hindi: {
                  ...formData.hindi,
                  listening: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
          </Box>
          <Box>
          {/* Reading */}
          <FormLabel>Reading</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.hindi.reading}
            onChange={(e) => {
              formik.setFieldValue('hindi', {
                ...formik.values.hindi,
                reading: e.target.value,
              });
              setFormData({
                ...formData,
                hindi: {
                  ...formData.hindi,
                  reading: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
          </Box>
          <Box>
          {/* Writing */}
          <FormLabel>Writing</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.hindi.writing}
            onChange={(e) => {
              formik.setFieldValue('hindi', {
                ...formik.values.hindi,
                writing: e.target.value,
              });
              setFormData({
                ...formData,
                hindi: {
                  ...formData.hindi,
                  writing: e.target.value,
                },
              });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>

          {formik.errors.hindi && formik.touched.hindi && (
            <Box color="red.500" mt={2}>
              Please select proficiency for all fields.
            </Box>
          )}
          </Box>
          </Grid>
        </FormControl>


        <Spacer h={5} />
        {/* 🔴 EDUCATION */}

        <FormControl id="education" py={2} isInvalid={formik.errors.education && formik.touched.education}>
          <FormLabel fontWeight="bold" size='xl'>Education level</FormLabel>
          <RadioGroup
            name="education"
            value={formik.values.education}
            onChange={(value) => {
              formik.setFieldValue('education', value);
              setFormData({ ...formData, education: value });
            }}
          >
            <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
              <Radio value="Under SLC">Under SLC</Radio>
              <Radio value="SLC">SLC</Radio>
              <Radio value="+2">+2</Radio>
              <Radio value="Bachelors">Bachelors</Radio>
              <Radio value="Masters">Masters</Radio>
            </Stack>
          </RadioGroup>
          {formik.errors.education && formik.touched.education && (
            <Box color="red.500" mt={1}>
              {formik.errors.education}
            </Box>
          )}
        </FormControl>
        <Spacer h={5} />
        {/* 🔴 NEPAL WORK EXPERIENCE */}
        <FormControl py={2} isInvalid={formik.errors.workExpNepal && formik.touched.workExpNepal}>
          <FormLabel fontWeight="bold" size='xl'>Work Experience in Nepal</FormLabel>
          <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr ' }} gap={5}>
          {/* Field */}
          <FormControl id="workExpNepal.field">
            <FormLabel as='h2' size='md'>Field</FormLabel>
            <Input
              placeholder="Field"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={formik.values.workExpNepal.field}
              onChange={(e) => {
                formik.setFieldValue('workExpNepal.field', e.target.value);
                handleInputChange({ target: { id: 'workExpNepal.field', value: e.target.value } });
              }}
            />
          </FormControl>

          {/* Employer */}
          <FormControl id="workExpNepal.employer">
            <FormLabel htmlFor="nepali-employer">Employer</FormLabel>
            <Input
              placeholder="Employer"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={formik.values.workExpNepal.employer}
              onChange={(e) => {
                formik.setFieldValue('workExpNepal.employer', e.target.value);
                handleInputChange({ target: { id: 'workExpNepal.employer', value: e.target.value } });
              }}
            />
          </FormControl>

          {/* Duration */}
          <FormControl id="workExpNepal.duration">
            <FormLabel>Duration</FormLabel>
            <Input
              placeholder="In years"
              _placeholder={{ color: 'gray.500' }}
              type="number"
              value={formik.values.workExpNepal.duration}
              onChange={(e) => {
                formik.setFieldValue('workExpNepal.duration', e.target.value);
                handleInputChange({ target: { id: 'workExpNepal.duration', value: e.target.value } });
              }}
            />
          </FormControl>

          {/* Address */}
          <FormControl id="workExpNepal.address">
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="Address"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={formik.values.workExpNepal.address}
              onChange={(e) => {
                formik.setFieldValue('workExpNepal.address', e.target.value);
                handleInputChange({ target: { id: 'workExpNepal.address', value: e.target.value } });
              }}
            />
          </FormControl>
          </Grid>
          {formik.errors.workExpNepal && formik.touched.workExpNepal && (
            <Box color="red.500" mt={2}>
              Please fill in all work experience fields.
            </Box>
          )}
          
        </FormControl>



        <Spacer />
        {/* 🔴 OVERSEAS WORK EXPERIENCE */}
        <FormControl py={2} isInvalid={formik.errors.workExpOverseas && formik.touched.workExpOverseas}>
          <FormLabel fontWeight="bold" size='xl'>Work Experience Overseas</FormLabel>
          
          <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr ' }} gap={5}>
          {/* Field */}
          <FormControl id="workExpOverseas.field">
            <FormLabel>Field</FormLabel>
            <Input
              placeholder="Field"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={formik.values.workExpOverseas.field}
              onChange={(e) => {
                formik.setFieldValue('workExpOverseas.field', e.target.value);
                handleInputChange({ target: { id: 'workExpOverseas.field', value: e.target.value } });
              }}
            />
          </FormControl>

          {/* Employer */}
          <FormControl id="workExpOverseas.employer">
            <FormLabel htmlFor="nepali-employer">Employer</FormLabel>
            <Input
              placeholder="Employer"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={formik.values.workExpOverseas.employer}
              onChange={(e) => {
                formik.setFieldValue('workExpOverseas.employer', e.target.value);
                handleInputChange({ target: { id: 'workExpOverseas.employer', value: e.target.value } });
              }}
            />
          </FormControl>

          {/* Duration */}
          <FormControl id="workExpOverseas.duration">
            <FormLabel>Duration</FormLabel>
            <Input
              placeholder="In years"
              _placeholder={{ color: 'gray.500' }}
              type="number"
              value={formik.values.workExpOverseas.duration}
              onChange={(e) => {
                formik.setFieldValue('workExpOverseas.duration', e.target.value);
                handleInputChange({ target: { id: 'workExpOverseas.duration', value: e.target.value } });
              }}
            />
          </FormControl>
          {/* Country */}
          <FormControl id="workExpOverseas.country">
            <FormLabel>Country</FormLabel>
            <Input
              placeholder="Country"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={formik.values.workExpOverseas.country}
              onChange={(e) => {
                formik.setFieldValue('workExpOverseas.country', e.target.value);
                handleInputChange({ target: { id: 'workExpOverseas.country', value: e.target.value } });
              }}
            />
          </FormControl>
          </Grid>
          {formik.errors.workExpOverseas && formik.touched.workExpOverseas && (
            <Box color="red.500" mt={2}>
              Please fill in all work experience fields.
            </Box>
          )}
        </FormControl>

        <FormControl
          mr={"5%"}
          py={2}
          id="otherSkills"
          isInvalid={formik.errors.otherSkills && formik.touched.otherSkills}
        >
          <FormLabel fontWeight="bold" size='xl'>Other Skills</FormLabel>
          <Textarea
            type="text"
            id="otherSkills"
            placeholder="Other skills"
            value={formik.values.otherSkills}
            onChange={(e) => {
              formik.handleChange(e);
              setFormData({
                ...formData,
                otherSkills: e.target.value,
              });
            }}
            onBlur={formik.handleBlur}
          />
          {formik.errors.otherSkills && formik.touched.otherSkills && (
            <Box color="red.500" mt={1}>
              {formik.errors.otherSkills}
            </Box>
          )}
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4} w={'200px'} rounded={"10px"}>
          Next
        </Button>
      </Box>
    </form>
  )
}

const Form3 = ({ formData, setFormData, submitForm }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email address'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    homeNumber: Yup.string().required('Home Number is required'),
    relativesNumber: Yup.string().required("Relative's Number is required"),
  });

  const formik = useFormik({
    initialValues: {
      agentName: formData.agentName || '',
      phoneNumber: formData.phoneNumber || '',
      email: formData.email || '',
      homeNumber: formData.homeNumber || '',
      relativesNumber: formData.relativesNumber || '',
    },
    validationSchema,
    onSubmit: (values) => {
      // You don't need to check formik.isValid, formik will only trigger
      // onSubmit if the form is valid due to Yup validation schema.
      submitForm();
    },
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box color={useColorModeValue('blue.700', 'gray.1000')}>
        <Heading w="100%" textAlign={'center'} fontWeight="normal">
          Contact Information
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          {/* FORM CONTROL */}
          <FormControl mt={1}>
            <FormControl
              mr={'5%'}
              py={2}
              id="agentName"
              isInvalid={formik.errors.agentName && formik.touched.agentName}
            >
              <FormLabel fontWeight="bold" size='xl' isTruncated>Agent's Name (Optional)</FormLabel>
              <Input
                type="text"
                id="agentName"
                placeholder="Agent Name"
                value={formik.values.agentName}
                onChange={(e) => {
                  formik.handleChange(e);
                  setFormData({
                    ...formData,
                    agentName: e.target.value,
                  });
                }}
                onBlur={formik.handleBlur}
              />
            </FormControl>

            <Flex py={2}>
              <FormControl mr="5%">
                <FormLabel fontWeight="bold" size='xl' isTruncated>Your phone number</FormLabel>
                <Input
                  id="phoneNumber"
                  type="number"
                  placeholder="Phone number"
                  value={formik.values.phoneNumber}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setFormData({
                      ...formData,
                      phoneNumber: e.target.value,
                    });
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <Box color="red.500" mt={1}>
                    {formik.errors.phoneNumber}
                  </Box>
                )}
              </FormControl>
              <FormControl mr="5%">
                <FormLabel fontWeight="bold" size='xl'>Email</FormLabel>
                <Input
                  id="email"
                  type='email'
                  placeholder="Email"
                  value={formData['email'] || ''}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                  }}
                />
              </FormControl>
            </Flex>

            <Flex py={2}>
              <FormControl mr="5%">
                <FormLabel fontWeight="bold" size='xl' isTruncated>Home phone number</FormLabel>
                <Input
                  id="homeNumber"
                  type="number"
                  placeholder="Home number"
                  value={formik.values.homeNumber}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setFormData({
                      ...formData,
                      homeNumber: e.target.value,
                    });
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.homeNumber && formik.touched.homeNumber && (
                  <Box color="red.500" mt={1}>
                    {formik.errors.homeNumber}
                  </Box>
                )}
              </FormControl>
              <FormControl mr="5%">
                <FormLabel fontWeight="bold" size='xl' isTruncated>Relative's number</FormLabel>
                <Input
                  id="relativesNumber"
                  type="number"
                  placeholder="Relative's number"
                  value={formik.values.relativesNumber}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setFormData({
                      ...formData,
                      relativesNumber: e.target.value,
                    });
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.relativesNumber && formik.touched.relativesNumber && (
                  <Box color="red.500" mt={1}>
                    {formik.errors.relativesNumber}
                  </Box>
                )}
              </FormControl>
            </Flex>
          </FormControl>
          <Center>
            <Button type="submit" colorScheme="red" mt={4} w={'200px'} rounded={"10px"}>
              Submit
            </Button>
          </Center>
        </SimpleGrid>
      </Box>
    </form>
  );
};



const MultiStepForm = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const jobIdFromQuery = queryParams.get('jobId');
  const toast = useToast()
  const totalSteps = 3; // Total number of steps in the form
  const [step, setStep] = useState(1);
  // const [progress, setProgress] = useState(33.33)
  const [progress, setProgress] = useState((step / totalSteps) * 100);
  const [formData, setFormData] = useState(
    {
      jobCode: jobIdFromQuery,
      fullName: '',
      gender: '',
      address: '',
      nationality: '',
      passportNumber: '',
      placeOfIssue: '',
      expiryDate: '',
      dateOfBirth: '',
      height: '',
      weight: '',
      maritalStatus: '',
      religion: '',
      arabic: {
        speaking: '',
        listening: '',
        reading: '',
        writing: '',
      },
      english: {
        speaking: '',
        listening: '',
        reading: '',
        writing: '',
      },
      hindi: {
        speaking: '',
        listening: '',
        reading: '',
        writing: '',
      },
      education: '',
      workExpNepal: {
        field: '',
        employer: '',
        duration: '',
        address: '',
      },
      workExpOverseas: {
        field: '',
        employer: '',
        duration: '',
        country: '',
      },
      otherSkills: '',
      agentName: '',
      phoneNumber: '',
      email: '',
      homeNumber: '',
      relativesNumber: ''
    }
  );
  const navigate = useNavigate()

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      const newProgress = (step + 1) * (100 / totalSteps); // Calculate new progress
      setProgress(newProgress);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      const newProgress = (step - 1) * (100 / totalSteps); // Calculate new progress
      setProgress(newProgress);
    }
  };




  //POST
  const submitForm = async () => {
    try {
      const res = await axios.post(`${baseUrl}/submit-resume`, formData)
      if (res.status === 200) {
        toast({
          title: 'Form submitted.',
          description: 'Your form has been successfully submitted.',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top'
        });
        navigate("/")
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (error) {

    }
  }

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        bg={useColorModeValue('gray.50', 'gray.1000')}
        color={useColorModeValue('blue.700', 'gray.1000')}
      >
        <Progress rounded={'lg'} h={4} hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 && <Form1 formData={formData} setFormData={setFormData} nextStep={nextStep} progress={progress} />}
        {step === 2 && <Form2 formData={formData} setFormData={setFormData} nextStep={nextStep} progress={progress} />}
        {step === 3 && <Form3 formData={formData} setFormData={setFormData} submitForm={submitForm} progress={progress} />}
        {step > 1 && (
          <Button colorScheme="blue" variant="outline" onClick={prevStep} mt={5} w={'200px'} rounded={"10px"}>
            Previous
          </Button>
        )}
      </Box>
    </>
  );
};

export default MultiStepForm