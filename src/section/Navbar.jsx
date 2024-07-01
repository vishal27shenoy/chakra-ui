import React from 'react'
import {
    Flex,
    Box,
    Text,
    Button,
  } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";
  const uri =
  "https://www.nature.com/research-intelligence/build/vectors/nature-research-logo.svg";
const bgUri =
  "https://www.nature.com/research-intelligence/product/fcb2b590-6425-4a05-91f5-5a8ab0ad2ebe/hero-background-image/view";
const uri3 =
  "https://www.nature.com/research-intelligence/product/fcb2b590-6425-4a05-91f5-5a8ab0ad2ebe/hero-logo/view";
  const array = [
    {
      title: "Overview",
      arror: false,
    },
    {
      title: "Nature Index",
      arror: true,
    },
    {
      title: "Nature Strategy Reports",
      arror: true,
    },
    {
      title: "Nature Navigator",
      arror: true,
    },
    {
      title: "Data sources",
      arror: false,
    },
    {
      title: "Contact",
      arror: false,
    },
  ];
const Navbar = () => {
  return (
    <Box>
      <Box px={["10px","10px","60px"]} pt={"22px"} pb={"27px"}>
        <Box borderBottom={"solid lightgray 1px"} pb={"10px"}>
          <Flex>
            <Box flexDirection={"column"}>
              <img src={uri} alt=''/>
            </Box>
            <Flex
              ml={"auto"}
              alignItems={"center"}
              display={["none", "none", "none", "flex"]}
            >
              <Button
                size="lg"
                bgColor={"#f15a40"}
                color={"#ffffff"}
                pt={"16px"}
                pr={"29"}
                pb={"15"}
                pl={"30px"}
                w={"200.14px"}
                h={"53px"}
              >
                Talk to an expert
              </Button>
            </Flex>
          </Flex>
        </Box>

        <Box pt={"29px"} display={["none", "none", "none", "flex"]}>
          <nav>
            <ul style={{ listStyleType: "none", display: "flex" }}>
              {array.map((item) => {
                return (
                  <li style={{ marginRight: "27px" }}>
                    <a href="/">
                      <Text
                        fontWeight={"bold"}
                        _hover={{ textDecoration: "underline" }}
                      >
                        {item?.title}
                        {item?.arror && (
                          <ChevronDownIcon w={5} h={5} color="black" />
                        )}
                      </Text>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Box>
        <Flex
          display={["flex", "flex", "flex", "none"]}
          h={"37px"}
          w={"47px"}
          border={"solid lightgray 1px"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={"8px"}
        >
          <Icon as={IoIosMenu} height={35} w={35} />
        </Flex>
      </Box>

      <Flex
        bg={"black"}
        flexDirection={"column"}
        bgImage={bgUri}
        backgroundSize={"contain"}
        backgroundPosition={"100%"}
        pl={"40px"}
        pr={"40px"}
        pb={"90px"}
        pt={"91px"}
        backgroundRepeat={"no-repeat"}
      >
        <Flex flexDirection={"column"} height={"358px"} maxW={"958px"}    paddingLeft={[0,0,"70px","70px"]}>
          <Box mb={"56px"} mx={["auto","auto","0"]}>
            <img src={uri3} alt="" width={"212px"} h={"28px"} />
          </Box>
          <Box maxW={"928px"} mb={"12px"}>
            <Text
              fontWeight={"bold"}
              color={"#ffffff"}
              fontSize={["30px","42px","53px","60px"]}
              lineHeight={["30px","42px","53px","60px"]}
              textAlign={["center","center","left","left"]}
           
            >
              An expanding way to assess your research performance
            </Text>
          </Box>
          <Box maxW={"480px"}>
            <Text color={"#ffffff"}  textAlign={["center","center","left","left"]}>
              One centralised, holistic solution to use emerging research topics
              to steer strategic direction.
            </Text>
          </Box>
        </Flex>
        <Flex paddingLeft={[0,0,"70px","70px"]}>
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
            Get Started
          </Button>
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
            ml={"48px"}
          >
            Public Library
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar;