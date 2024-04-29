import React, { forwardRef } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { animated, useSpring } from "react-spring";
import { Awards, education } from "../../core/constants/constant";

const AwardsSection = forwardRef<HTMLDivElement>((props, ref) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 400, // Adjust delay as needed
  });

  return (
    <animated.div style={animationProps}>
      <Box bg="#242424" py={{ base: '40px', md: '50px', lg: '60px', xl: '100px' }} ref={ref}>
        <Box mx="auto" maxW={{ base: "480px", md: "768px", lg: "991px", xl: '1280px', xxl: '1440px', xxxl: '1560px' }} w="100%" px="40px">
          <Flex w="100%" gap="24px" flexDirection={{ base: 'column', lg: 'row' }}>
            <Box w={{ base: '100%', lg: '50%' }} >
              <Box
                h={{ base: 'auto', lg: '420px' }}
                border="1px solid rgba(255, 255, 255, 0.4)"
                bg="transparent"
                borderRadius={"8px"}
                p={{ base: "20px", md: "30px", lg: "40px" }}
              >
                <Text
                  mb="65px"
                  fontFamily="inter"
                  fontWeight="500"
                  fontSize={{ base: "28px" }}
                  lineHeight={{ base: "36px" }}
                  color="#FFFFFF"
                >
                  EDUCATION
                </Text>
                {education.map((li, index) => (
                  <Flex
                    key={index}
                    _last={{ mb: "0px" }}
                    mb="65px"
                    w="100%"
                    alignItems="center"
                    justifyContent="center"
                    gap={{ base: "23px" }}
                  >
                    <Box w="22%">
                      <Text
                        fontFamily="inter"
                        fontWeight="400"
                        fontSize={{ base: "16px" }}
                        lineHeight={{ base: "24px" }}
                        color="#FFFFFF"
                      >
                        {li.date}
                      </Text>
                    </Box>

                    <Box
                      w="100%"
                      pb="16px"
                      borderBottom="1px solid rgba(255, 255, 255, 0.4)"
                    >
                      <Text
                        mb="9px"
                        fontWeight="600"
                        fontFamily="inter"
                        fontSize={{ base: "16px" }}
                        lineHeight={{ base: "24px" }}
                        color="#FFFFFF"
                      >
                        {li.Uni}
                      </Text>
                      <Text
                        fontFamily="inter"
                        maxW="387px"
                        fontWeight="400"
                        fontSize={{ base: "14px" }}
                        lineHeight={{ base: "24px" }}
                        color="#FFFFFF"
                      >
                        {li.Degree}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Box>
            </Box>
            <Box w={{ base: '100%', lg: '50%' }} >
              <Box
                h={{ base: 'auto', lg: '420px' }}
                border="1px solid rgba(255, 255, 255, 0.4)"
                bg="transparent"
                borderRadius={"8px"}
                p={{ base: "20px", md: "30px", lg: "40px" }}
              >
                <Text
                  mb="55px"
                  fontFamily="inter"
                  fontWeight="500"
                  fontSize={{ base: "28px" }}
                  lineHeight={{ base: "36px" }}
                  color="#FFFFFF"
                >
                  AWARDS
                </Text>
                {Awards.map((li, index) => (
                  <Flex
                    key={index}
                    _last={{ mb: "0px" }}
                    mb={{ base: '44px', xl: '46px', xxl: '65px' }}
                    w="100%"
                    alignItems="center"
                    justifyContent="center"
                    gap={{ base: "23px" }}
                  >
                    <Box w="10%">
                      <Image src="/awardshowicon.svg" alt="Award Icon" />
                    </Box>
                    <Box
                      w="100%"
                      pb="16px"
                      borderBottom="1px solid rgba(255, 255, 255, 0.4)"
                    >
                      <Text
                        fontWeight="600"
                        fontFamily="inter"
                        fontSize={{ base: "16px" }}
                        lineHeight={{ base: "24px" }}
                        color="#FFFFFF"
                      >
                        {li.AwardName}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </animated.div>
  );
});

export default AwardsSection;
