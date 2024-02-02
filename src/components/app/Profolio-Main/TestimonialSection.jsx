import React, { forwardRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, Text } from "@chakra-ui/react";
import TestimonialCards from './TestimonialCards';


const TestimonialSection = forwardRef((props, ref) => {
 

  

  

  return (
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
           Testimonials
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
           <TestimonialCards/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default TestimonialSection;
