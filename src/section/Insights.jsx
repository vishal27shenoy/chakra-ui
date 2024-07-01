import React from "react";
import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import InsightsCard from "./InsightsCard";
const img1 =
  "https://images.nature.com/original/magazine-assets/d41586-024-01749-3/d41586-024-01749-3_27173142.jpg";
const img2 =
  "https://images.nature.com/original/magazine-assets/d41586-024-01748-4/d41586-024-01748-4_27154344.jpg";
const img3 =
  "https://images.nature.com/original/magazine-assets/d41586-024-01595-3/d41586-024-01595-3_27149434.jpg";
const img4 =
  "https://images.nature.com/original/magazine-assets/d41586-024-01597-1/d41586-024-01597-1_27149508.jpg";
const Insights = () => {
  return (
    <Flex pb={"120px"} flexDirection={"column"} alignItems={"center"}>
      <Flex px={"15px"} flexDirection={"column"} maxW={["100%","83%","100%","1280px"]}>
        <Flex mx={"auto"} mb={"77px"}>
          <Text fontSize={"36px"} fontWeight={"bold"}>
            Latest Insights
          </Text>
        </Flex>
        <Box>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns={["repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(3, 1fr)"]}
            gap={0}
          >
            <GridItem colSpan={[4,4,2,2]} bg="#1F242E">
              <Flex
                flexDirection={"column"}
                pt={"33px"}
                pr={"50px"}
                pb={"38px"}
                pl={"35px"}
              >
                <Flex flexDirection={"column"} >
                  <Text
                    color={"#ffffff"}
                    fontSize={"30px"}
                    _hover={{ textDecoration: "underline" }}
                    fontWeight={"bold"}
                    mb={"10px"}
                    textAlign={["center","center","start","start"]}
                  >
                    Three ways two recognize hidden labour in research
                  </Text>
                  <Text
                    color={"#ffffff"}
                    fontSize={"16px"}
                    _hover={{ textDecoration: "underline" }}
                    mb={"10px"}
                    textAlign={["center","center","start","start"]}
                  >
                    From designing studies and translating science to technical
                    services, the work of support staff is highly diverse — and
                    it needs merit systems to match.
                  </Text>
                </Flex>
                <Flex
                  mt={["30px","30px","60px","150px"]}
                  mb={"28px"}
                  flexDirection={"column"}
                  lineHeight={"10px"}

                >
                  <Text color={"#ffffff"}    textAlign={["center","center","start","start"]} fontSize={"16px"} mb={"10px"}>
                    Linda nordling
                  </Text>
                  <Text color={"#ffffff"}    textAlign={["center","center","start","start"]} fontSize={"16px"}>
                    NEWS | 13 June 2024
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem
              colSpan={1}
              bgSize={"cover"}
              bgImage={img1}
              display={["none", "none", "none", "grid"]}
            />

            <GridItem flexWrap={"wrap"} mt={["15px","15px",0,"15px"]} mr={[0,0,0,"15px"]} ml={[0,0,"15px",0]} colSpan={[4,4,2,1]} flex={1}  borderBottom={"solid black 1px"}>
              <InsightsCard
                img={img2}
                heading={
                  "Open access is working — but researchers in lower-income countries enjoy fewer benefits"
                }
                name={"Holly Else"}
                date={"| 11 JUNE 2024"}
              />
            </GridItem>
            <GridItem flexWrap={"wrap"} mt={"15px"} mx={[0,0,0,"15px"]} flex={1} colSpan={[4,4,2,1]}  borderBottom={"solid black 1px"}>
              <InsightsCard
                img={img3}
                heading={" China Seeks global impact and recognition"}
                name={"Simon Baker"}
                date={"| 05 JUNE 2024"}
              />
            </GridItem>
            <GridItem flexWrap={"wrap"} mt={"15px"} ml={[0,0,"15px","15px"]}  colSpan={[4,4,2,1]}  borderBottom={"solid black 1px"}>
              <InsightsCard
                img={img4}
                heading={"China's big-science bet"}
                name={"James Mitchell row"}
                date={" | 11 JUNE 2024"}
              />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Insights;
