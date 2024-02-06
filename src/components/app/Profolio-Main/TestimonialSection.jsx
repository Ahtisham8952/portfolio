import React, { forwardRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, Text } from "@chakra-ui/react";
import TestimonialCards from './TestimonialCards';


const TestimonialSection = forwardRef((props, ref) => {
 

  

  

  return (
    <Box bg="#242424" pt={{ base: '40px',md:'50px' ,lg: '60px',xl:'147px' }} ref={ref}>
      <Box mx="auto" maxW={"1566px"} w="100%" px="40px">
        <Box>
         
            <Text
              fontWeight="600"
              fontSize={{base:'22px',lg:'26px',xl:'28px',xxl:'33px',xxxl:'44px'}}
              lineHeight={{base:'32px',lg:'34px',xl:'36px',xxl:'46px',xxxl:'56px'}}
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
        mt="60px"
        py={{base:'30px',lg:'0px'}}
        backgroundImage="url('./vediosliderbg.png')"
        backgroundSize="cover"
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
        width="100%"
        height={{md:'auto',lg:'474px'}}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box mx="auto" maxW={"1566px"} w="100%" >
          <Box>
           <TestimonialCards/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default TestimonialSection;
