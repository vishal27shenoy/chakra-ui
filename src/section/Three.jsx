import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
const img1 =
  "https://www.nature.com/research-intelligence/build/images/quote-carousel-bg.425f7197.svg";
const Three = () => {
  return (
    <Flex
      pt={["60px","60px","124px"]}
      pb={["60px","60px","90px"]}
      bg={"#111111"}
      bgImage={["","",img1]}
      backgroundRepeat={"no-repeat"}
    >
      <Box maxW={"1280px"} mx={"auto"}>
        <Flex w={["95%","90%","83%"]}  mx={"auto"} flexDirection={"column"}>
        <Text color={"white"} textAlign={"center"} fontSize={["20px","25px","30px"]} fontWeight={"bold"} mb={"50px"}>
          “As a research leader in a modern university, I find the Nature Index
          incredibly useful since it recognises and rewards – via a robust
          evaluation process – an institution’s publications in what have been
          the world’s best journals over a prolonged period. It is my go-to list
          for a reading of the academic excellence at my university.”
        </Text>
        <Text color={"white"} textAlign={"center"} fontSize={"18px"} fontWeight={"bold"}>Professor Roland De Marco,</Text>
        <Text color={"white"} textAlign={"center"} fontSize={"18px"}>
    Pro Vice-Chancellor Research and Innovation, Fiji National University</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Three;
