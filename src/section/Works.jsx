import React from 'react'
import { Box ,Flex,Text,Image,Button} from '@chakra-ui/react'
const img1 = "https://www.nature.com/research-intelligence/product/ae204238-beb8-42a3-a1cd-896e9609aa1a/image/content_1/view";
const img2 = "https://www.nature.com/research-intelligence/product/ae204238-beb8-42a3-a1cd-896e9609aa1a/image/content_2/view";
const img3 = "https://www.nature.com/research-intelligence/product/ae204238-beb8-42a3-a1cd-896e9609aa1a/image/content_3/view";
const Works = () => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
        <Flex maxW={"1280px"} flexDirection={"column"}  alignItems={"center"} pt={"120px"} pb={"80px"}>
            <Flex flexDirection={"column"} maxW={"83%"} alignItems={"center"}>
            <Box>
                <Text fontSize={"20px"} color={"#575756"} fontWeight={"bold"}>How it works</Text>
            </Box>
            <Box mt={"36px"} mb={"20px"}>
                <Text fontSize={["24px","26px","35px"]} textAlign={"center"} fontWeight={"bold"}>Simple, transparent and current metrics that demonstrate high-quality research, collaboration, and real-world impact</Text>
            </Box>
            </Flex>
        </Flex>
        <Flex maxW={"1280px"} justifyContent={"center"} pt={"30px"} pb={"76px"}>
            <Flex maxW={"83%"} justifyContent={"space-between"} alignItems={"center"} flexDirection={["column","column","row",]}>
                <Flex flexDirection={"column"} maxW={["100%","83%","43%"]}>
                    <Text color={"#111111"} fontWeight={"bold"} fontSize={"25px"} mb={"20px"} textAlign={["center","center","start","start"]}>Diverse data sources for comprehensive benchmarking</Text>
                    <Text mb={"16px"} textAlign={["center","center","start","start"]} >Nature Index is building on its history of monitoring publication output to include a richer, more valuable set of metrics. We’re combining leading sources of data from surveys, public and government sources, our bibliographic data partners, and more, to provide a set of measures that help you assess your research performance, and then determine how to improve it.</Text>
                </Flex>
                <Box boxShadow={"8px 8px 45px 0 rgba(0, 0, 0, .22)"} maxW={["100%","83%","43%","43%"]}>
                    <Image src={img1} w={"100%"}/>
                </Box>
            </Flex>
        </Flex>
        <Flex maxW={"1280px"} justifyContent={"center"} pt={"30px"} pb={"76px"}>
            <Flex maxW={"83%"} justifyContent={"space-between"} alignItems={"center"} flexDirection={["column","column","row",]}>
            <Box boxShadow={"8px 8px 45px 0 rgba(0, 0, 0, .22)"} maxW={["100%","83%","43%","43%"]} order={[1,1,0,0]}>
                    <Image src={img2} w={"100%"}/>
                </Box>
                <Flex flexDirection={"column"} maxW={["100%","83%","43%"]}>
                    <Text color={"#111111"} fontWeight={"bold"} fontSize={"25px"} mb={"20px"} textAlign={["center","center","start","start"]}>Nature Index is expanding to deliver data beyond publication and citations</Text>
                    <Text mb={"16px"} textAlign={["center","center","start","start"]} >Get access to the wide range of metrics you need to understand your organisation’s research performance. The Nature Index team monitors organisations on meaningful academic, societal, and economic indicators to support a rounded view of impact, which will become available as part of our future free to access releases. That gives you greater freedom to decide what metrics are important to you, and to track your progress accordingly.</Text>
                </Flex>
            </Flex>
        </Flex>
        <Flex maxW={"1280px"} justifyContent={"center"} pt={"30px"} pb={"76px"}>
            <Flex maxW={"83%"} justifyContent={"space-between"} alignItems={"center"} flexDirection={["column","column","row",]}>
                <Flex flexDirection={"column"} maxW={["100%","83%","43%"]}>
                    <Text color={"#111111"} fontWeight={"bold"} fontSize={"25px"} mb={"20px"} textAlign={["center","center","start","start"]}>Nature Index can form a central part of your monitoring strategy</Text>
                    <Text mb={"16px"} textAlign={["center","center","start","start"]} >The easy-to-use and transparent Nature Index can support your monitoring activity. You can compare current and historical data to track trends over time. And you can combine Nature Index with other data sets for deeper, more meaningful analysis that uncovers valuable insights to inform your research strategy.</Text>
                </Flex>
                <Box boxShadow={"8px 8px 45px 0 rgba(0, 0, 0, .22)"} maxW={["100%","83%","43%","43%"]}>
                    <Image src={img3} w={"100%"}/>
                </Box>
            </Flex>
        </Flex>
        <Flex pb={"100px"}>
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
    </Flex>
  )
}

export default Works;