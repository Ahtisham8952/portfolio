import { Box, Button, Flex, Grid, Text, Image } from "@chakra-ui/react";
import React, { forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';
import VideoSlider from "./VideoSlider";
import EducationSection from "./AwardsSection";
const FeaturedVideos = forwardRef((props, ref) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 400, // Adjust delay as needed
  });
  return (
    <animated.div style={animationProps}>
    <Box bg="#242424" py={{ base: "100px", lg: "120px" }} ref={ref}>
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
      
    </Box>
    </animated.div>
  );
})

export default FeaturedVideos;
