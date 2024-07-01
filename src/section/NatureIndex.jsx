import React from 'react'
import { Box ,Flex,Text,Button} from '@chakra-ui/react'
import FiveCard from './NatureIndexCard'

const NatureIndex = () => {
  return (
    <Flex py={"120px"} flexDirection={"column"}>
        <Flex flexDirection={"column"} alignItems={"center"} w={"100%"} mb={"56px"} px={["10px",]}>
            <Text fontSize={"20px"} color={"#575756"} textAlign={"center"}>Nature Index is expanding to help solve your research assessment challenges</Text>
            <Text mt={"30px"} mb={"20px"} fontSize={"35px"} fontWeight={"bold"} textAlign={"center"}>Complete, accurate, and reliable monitoring data</Text>
            <Text fontSize={"18px"} color={"#575756"} textAlign={"center"}>Validate the assumptions that drive your research strategy decisions.</Text>
        </Flex>
        <Flex  mx={"auto"} flexDirection={["column","column","row"]} maxW={"1280px"}>
            <FiveCard/>   <FiveCard/>
        </Flex>
        <Flex justifyContent={"center"} mt={"60px"}>
        <Button
            size="lg"
            bgColor={"#f15a40"}
            color={"#ffffff"}
            pt={"16px"}
            pr={"29px"}
            pb={"15px"}
            pl={"30px"}
            w={"200.14px"}
            h={"53px"}
          >
            Talk to an expert
          </Button>
        </Flex>
        <Box borderBottom={"solid black 1px"} maxW={"1280px"} w={["90%"]} mx={"auto"} pb={"60px"}>
        </Box>
    </Flex>
  )
}

export default NatureIndex