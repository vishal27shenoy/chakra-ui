import React from 'react'
import { Flex,Text, Button} from '@chakra-ui/react'

const Six = () => {
  return (
    <Flex pt={["60px","153px"]} pb={["60px","123px"]} bg={"#f15a40"}>
        <Flex maxW={"1280px"} mx={"auto"} flexDirection={["column","row","row","row"]} >
            <Flex w={["100%","50%"]}>
                <Text fontSize={["36px","38px","46px","50px"]} lineHeight={"50px"} fontWeight={"bold"} color={"white"} textAlign={["center","start"]}>
                Learn more about benchmarking your research performance
                </Text>
            </Flex>
            <Flex w={["100%","50%"]} justifyContent={"center"} alignItems={"center"} mt={["30px",0]}>
            <Button
            size="lg"
            bgColor={"#111111"}
            color={"#ffffff"}
            w={"250.14px"}
            h={"73px"}
          >
            Talk to an expert
          </Button>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Six