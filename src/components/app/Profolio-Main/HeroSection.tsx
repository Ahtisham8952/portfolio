import { Box, Button, Text } from "@chakra-ui/react";
import React, { forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';

interface HeroSectionProps {
  onClick: () => void;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>((props, ref) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 400, // Adjust delay as needed
  });

  return (
    <animated.div style={animationProps}>
      <Box ref={ref}>
        <Box>
          <Box
            backgroundImage={{ base: "url('./philipcenter.png')", lg: "none" }}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            width="100%"
            height={{ base: '431px', md: '631px', lg: 'auto' }}
          ></Box>
        </Box>
        <Box bg="#0E0E0E">
          <Box
            backgroundImage={{ base: 'none', lg: "url('./hero-banner.png')" }}
            backgroundSize="cover"
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            width="100%"
            h={{ base: 'auto', md: 'auto', lg: '400', xl: '519px', xxl: '572px', xxxl: '631' }}
            py={{ base: '30px', lg: '0px' }}
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
                    fontSize={{ base: '22px', lg: '26px', xl: '28px', xxl: '33px', xxxl: '44px' }}
                    lineHeight={{ base: '32px', lg: '34px', xl: '36px', xxl: '46px', xxxl: '56px' }}
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
                  Co-Founder CTO of Lion MGT LLC, Lion Pro Dev DBA.
                  </Text>
                </Box>

                <Box mb="27px">
                  <Text
                    fontWeight="600"
                    fontSize={{ base: '22px', lg: '26px', xl: '28px', xxl: '33px', xxxl: '44px' }}
                    lineHeight={{ base: '32px', lg: '34px', xl: '36px', xxl: '46px', xxxl: '56px' }}
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

                <Box>
                  <Button onClick={props.onClick} mt="10px" bg="#FFFFFF" px="43px" py="16px" color="#000000" borderRadius={"40px"}>
                    Let’s talk
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </animated.div>
  );
});

export default HeroSection;
