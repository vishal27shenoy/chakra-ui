import { Flex,Text,Image} from '@chakra-ui/react'
import React from 'react'
const InsightsCard = ({img,heading,name,date}) => {
  return (
    <Flex flexDirection={"column"} flex={1} h={"95%"}>
        <Flex marginBottom={"26px"} height={"150px"}>
            <Image src={img} alt="" objectFit={'cover'}/>
        </Flex>
        <Flex flexDirection={"column"} flex={1}>
        <Flex mb={"10px"} flex={1} justifyContent={["center","normal"]} >
        <Text fontSize={"20px"} lineHeight={"26px"} fontWeight={"bold"}  _hover={{ textDecoration: "underline" }} textAlign={["center","center","center","start"]}>
             {heading}
        </Text>
        </Flex>
        <Flex flexDirection={"column"} mb={"10px"} alignItems={["center","center","start","start"]} >
        <Text fontSize={"16px"}>{name}</Text>
            <Text fontSize={"16px"} display={"flex"} textAlign={["center"]}>
            <Text  fontSize={"16px"} fontWeight={"bold"}>NEWS  </Text>{" "} {date}</Text>
        </Flex>
        </Flex>
    </Flex>
  )
}

export default InsightsCard