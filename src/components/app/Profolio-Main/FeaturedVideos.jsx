import React, { forwardRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, Text } from "@chakra-ui/react";
import VideoSlider from "./VideoSlider";

const FeaturedVideos = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTriggered(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: triggered ? 400 : 0, // Delay animation if triggered
  });

  return (
    <Box bg="#242424" py={{ base: '40px',md:'50px' ,lg: '60px',xl:'147px' }} ref={ref}>
      <Box mx="auto" maxW={{ base: "480px", md: "768px", lg: "991px",xl:'1280px',xxl:'1440px',xxxl:'1560px' }} w="100%" px="40px">
        <Box>
          <animated.div style={animationProps}>
            <Text
              fontWeight="600"
              fontSize={{base:'22px',lg:'26px',xl:'28px',xxl:'33px',xxxl:'44px'}}
            lineHeight={{base:'32px',lg:'34px',xl:'36px',xxl:'46px',xxxl:'56px'}}
              color="#FFFFFF"
              mb="7px"
              fontFamily="inter"
              textAlign={"center"}
            >
              Featured Videos
            </Text>
          </animated.div>
        </Box>
      </Box>
      <Box
        mt="60px"
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
  );
});

export default FeaturedVideos;
