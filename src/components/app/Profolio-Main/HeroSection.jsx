import { Box, Text } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
  return (
    <Box>
      <Box
        backgroundImage="url('./hero-banner.png')"
        backgroundSize="cover"
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
        width="100%"
        height="631px"
      >
        <Box
          mx="auto"
          maxW={"1566px"}
          w="100%"
          px="40px"
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          flexDirection={"column"}
          h="100%"
        >
          <Box>
            <Box mb="27px">
            <Text
              fontWeight="600"
              fontSize="44px"
              lineHeight="56px"
              color="#FFFFFF"
              mb="7px"
              fontFamily="inter"
            >
              Philip Cutting
            </Text>
            <Text
              fontWeight="400"
              fontSize="16px"
              lineHeight="24px"
              color="#FFFFFF"
             
              fontFamily="inter"
            >
              Thought Leader, Tech Entrepreneur, Investor
            </Text>
            </Box>
            <Box mb="27px">
            <Text
              fontWeight="600"
              fontSize="44px"
              lineHeight="56px"
              color="#FFFFFF"
              mb="7px"
              fontFamily="inter"
            >
             Founder and CEO
            </Text>
            <Text
              fontWeight="400"
              fontSize="16px"
              lineHeight="24px"
              color="#FFFFFF"
             maxW={"694px"}
              fontFamily="inter"
            >
            With a passion for tech and a lifelong commitment to nurturing visionary entrepreneurs, I
am eager to dedicate my life to transforming lives through innovation.
            </Text>
            </Box>
           
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
