import { Flex ,Image,Text} from '@chakra-ui/react'
import React from 'react'
const img1 = "https://www.nature.com/research-intelligence/product/fcb2b590-6425-4a05-91f5-5a8ab0ad2ebe/image/infoCard_1/view";
const img2 = "https://www.nature.com/research-intelligence/build/images/orange-tick-icon.bc81109a.svg";
const NatureIndexCard = () => {
  return (
    <Flex mx={"auto"} flexDirection={"column"} maxW={["90%","83%","42%","41%"]} mb={["60px","60px",0,0]}>
        <Flex h={"260px"}>
            <Image src={img1}/>
        </Flex>
        <Flex flexDirection={"column"} mt={"30px"}>
            <Text fontSize={"30px"} color={"#111111"} fontWeight={"bold"} mb={"20px"}>Influencing strategic direction</Text>
            <Text mb={"20px"}>Existing solutions focus on searching for individual articles, reducing research topics to an afterthought. Nature Navigator places research topics at its core, combining the latest AI and our expertise to give you a simple way to discover research trends and stay up to date.</Text>
            <Text mb={"20px"} display={"flex"} gap={"20px"}><img src={img2} alt="" />Web pages focused on a coherent research topic</Text>
            <Text mb={"20px"} display={"flex"} gap={"20px"}><img src={img2} alt="" />Provide a trusted external view</Text>
            <Text mb={"20px"} display={"flex"} gap={"20px"}><img src={img2} alt="" />Deliver insight in a high-quality, actionable format</Text>
        </Flex>
    </Flex>
  )
}

export default NatureIndexCard