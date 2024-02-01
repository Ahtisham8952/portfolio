import { Box, Button, Flex, Grid, Text, Image } from "@chakra-ui/react";
import React from "react";
import VideoSlider from "./VideoSlider";
import EducationSection from "./EducationSection";
const FeaturedVideos = () => {
  return (
    <Box bg="#242424" py={{ base: "100px", lg: "147px" }}>
      <Box mx="auto" maxW={"1566px"} w="100%" px="40px">
        <Box>
          <Text
            fontWeight="600"
            fontSize="44px"
            lineHeight="56px"
            color="#FFFFFF"
            mb="7px"
            fontFamily="inter"
            textAlign={"center"}
          >
            Featured Videos
          </Text>
        </Box>
      </Box>
      <Box
        my="60px"
        backgroundImage="url('./vediosliderbg.png')"
        backgroundSize="cover"
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
        width="100%"
        height="474px"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box mx="auto" maxW={"1566px"} w="100%" px="40px">
          <Box>
            <VideoSlider />
          </Box>
        </Box>
      </Box>
      <Box  mx="auto" maxW={"1566px"} w="100%" px="40px">
       <EducationSection/>
      </Box>
    </Box>
  );
};

export default FeaturedVideos;
