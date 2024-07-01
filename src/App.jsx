import "./App.css";
import {
  Flex,
  Box,
} from "@chakra-ui/react";

import Footer from "./section/Footer";
import AdditionalResearch from "./section/AdditionalResearch";
import Insights from "./section/Insights";
import NatureIndex from "./section/NatureIndex";
import Six from "./section/Six";
import Works from "./section/Works";
import Three from "./section/Three";
import Features from "./section/Features";
import Navbar from "./section/Navbar";


function App() {
  return (
    <>
      <Flex flexDirection={"column"}>
      <Box>
      <Navbar/>
        </Box>
      <Box>
      <Features/>
        </Box>
      <Box>
          <Works />
        </Box>
        <Box>
        <Three/>
        </Box>
      <Box>
          <NatureIndex />
        </Box>
        <Box>
          <Insights />
        </Box>
        <Box>
          <Six />
        </Box>
        <Box>
          <AdditionalResearch />
        </Box>
        <Box>
          <Footer />
        </Box>
      </Flex> 
    </>
  );
}

export default App;
