import React from "react";
import { Flex, Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";
const AdditionalResearch = () => {
  const img1 =
    "https://www.nature.com/research-intelligence/product/ae204238-beb8-42a3-a1cd-896e9609aa1a/image/cardLogo_1/view";
  const img2 =
    "https://www.nature.com/research-intelligence/product/fcb2b590-6425-4a05-91f5-5a8ab0ad2ebe/image/cardLogo_1/view";
  return (
    <Flex pt={"131px"} pb={"58px"} bg={"#e6e7e8"} flexDirection={"column"}>
      <Flex width={"100%"} justifyContent={"center"}>
        <Text
          fontSize={["26px", "26px", "30px","36px"]}
          textAlign={"center"}
          fontWeight={"900"}
        >
          Additional Research Intelligence solutions
        </Text>
      </Flex>

      <Flex mt={"50px"} p={["0px","0px","50px"]} alignItems={["center","center","normal"]} justifyContent={["normal","normal","center"]} flexDirection={["column","column","row"]}>
        <Flex maxW={["100%","83%","50%","33%"]}  p={"15px"} >
        <Flex
          flexDirection={"column"}
          boxShadow={"3px 7px 25px 0 rgba(0,0,0,.07)"}
          borderRadius={"10px"}
          pt={"91px"}
          pr={"31px"}
          pb={"38px"}
          pl={"41px"}
          bg={"#fff"}
          alignItems={["center","center","start"]}
        >
          <Flex mb={"22px"}>
            <Box>
              <img src={img1} alt="" height={50} width={88} />
            </Box>
          </Flex>
          <Flex mb={"59px"}>
            <Text textAlign={["center","center","start"]}>
              Track your progress and refine future strategy with a holistic
              benchmark of your research performance.
            </Text>
          </Flex>
          <Flex>
            <Text color={"#f15a40"}>Learn more</Text><Icon color={"#f15a40"} ml={"14px"} w={"26px"} h={"26px"} as={BsArrowRightCircle}/>
          </Flex>
        </Flex>
        </Flex>
        <Flex maxW={["100%","83%","50%","33%"]} p={"15px"}>
        <Flex
          flexDirection={"column"}
          boxShadow={"3px 7px 25px 0 rgba(0,0,0,.07)"}
          borderRadius={"10px"}
          pt={"91px"}
          pr={"31px"}
          pb={"38px"}
          pl={"41px"}
          bg={"#fff"}
          alignItems={["center","center","start"]}
        >
          <Flex mb={"22px"}>
            <Box>
              <img src={img2} alt="" width={138} height={50}/>
            </Box>
          </Flex>
          <Flex mb={"59px"}>
            <Text textAlign={["center","center","start"]}>
              Track your progress and refine future strategy with a holistic
              benchmark of your research performance.
            </Text>
          </Flex>
          <Flex alignItems={"center"} >
            <Text color={"#f15a40"}>Learn more</Text><Icon color={"#f15a40"} ml={"14px"} w={"26px"} h={"26px"} as={BsArrowRightCircle}/>
          </Flex>
        </Flex>
      </Flex>
      </Flex>
    </Flex>
  );
};

export default AdditionalResearch;
