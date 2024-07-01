import React from 'react'
import { Box, Flex, Text, Image } from "@chakra-ui/react";
const img1 = "https://www.nature.com/research-intelligence/product/ae204238-beb8-42a3-a1cd-896e9609aa1a/image/benefit_1/view";
const img2 = "https://www.nature.com/research-intelligence/product/ae204238-beb8-42a3-a1cd-896e9609aa1a/image/benefit_2/view";
const img3 = "https://www.nature.com/research-intelligence/product/ae204238-beb8-42a3-a1cd-896e9609aa1a/image/benefit_3/view"
const Features = () => {
  return (
    <Flex pt={"120px"} pb={"70px"} bg={"#e6e7e8"}>
        <Flex maxW={"1280px"} mx={"auto"} w={"100%"}  alignItems={"center"} flexDirection={"column"}>
            <Flex maxW={"83%"} flexDirection={"column"}  w={"100%"} alignItems={"center"} mb={"56px"}>
                <Text color={"#575756"} fontWeight={"bold"}>Key benefits</Text>
                <Text color={"#111111"} fontSize={"35px"} fontWeight={"bold"} mt={["26px","30px","36px"]} mb={"20px"} textAlign={"center"}>Understand how your organisation’s research delivers academic and, coming soon, real-world impact</Text>
                <Text color={"#575756"} fontWeight={"200"} textAlign={"center"}>Comprehensive research metrics across a wide range of criteria.</Text>
            </Flex>
            <Flex w={["100%","90%","83%"]} justifyContent={"space-evenly"} alignItems={["center","center","start"]} flexWrap={"wrap"} flexDirection={["column","row"]}>
                <Flex flexDirection={"column"} alignItems={"center"} maxW={["70%","50%","25%"]} fontWeight={"bold"} >
                    <Box mt={"-30px"}>
                    <Image src={img1}/>
                    </Box>
                    <Text mt={"30px"} fontSize={"20px"} textAlign={"center"}>High-quality, comprehensive data from trusted sources</Text>
                </Flex>
                <Flex flexDirection={"column"} alignItems={"center"} maxW={["70%","50%","25%"]} fontWeight={"bold"} mt={["50px",0]}>
                    <Box>
                    <Image src={img2}/>
                    </Box>
                    <Text mt={"30px"} fontSize={"20px"} textAlign={"center"}>Independent, data-rich reporting that reveal the stories behind the numbers</Text>
                </Flex>
                <Flex flexDirection={"column"} alignItems={"center"} maxW={["70%","50%","25%"]} fontWeight={"bold"} mt={["50px","50px",0,0]}>
                    <Box>
                    <Image src={img3}/>
                    </Box>
                    <Text mt={"30px"} fontSize={"20px"} textAlign={"center"}>Free to access</Text>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Features