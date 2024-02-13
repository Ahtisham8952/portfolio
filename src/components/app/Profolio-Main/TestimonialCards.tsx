import { Box, Image, Flex, Text, Grid } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { reviews } from '../../core/constants/constant';


const TestimonialCards = () => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 400, // Adjust delay as needed
  });

  return (
    <animated.div style={animationProps}>
      <Box mx="auto"
        maxW={"1566px"}
        w="100%"
        px="40px" >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
            xxl: "repeat(2, 1fr)",
          }}
          w="100%"
          gap="24px"
        >
          {reviews.map((li) => (
            <Box
              bg="#0E0E0E"
              borderRadius={"8px"}
              p={{ base: "20px", md: "20px", lg: "30px" }}
            >
              <Flex flexDirection={{ base: 'column', lg: 'row' }} h="100%" w="100%" alignItems={{ base: 'center', lg: 'flex-start' }} gap={{ base: '20px', md: '20px', lg: '20px', xl: '20px', xxl: '20px' }}>
                <Box w="100%" display={"flex"} justifyContent={{ base: 'center', lg: 'flex-start' }}>
                  <Image
                  borderRadius={"50%"}
                    w={{ base: '40px', md: '40px', lg: '65px', xl: '65px', xxl: '94px' }}
                    h={{ base: '40px', md: '40px', lg: '65px', xl: '65px', xxl: '94px' }}
                    src={li.Image} />
                </Box>
                <Flex flexDirection={"column"} h="100%" justifyContent={"space-between"}>
                  <Box>
                    <Text
                      mb={{ base: '12px', md: '16px', xl: '23px' }}
                      textAlign={"center"}
                      fontFamily="inter"
                      fontWeight="400"
                      fontSize={{
                        base: "12px",
                        md: "14px",
                      }}
                      lineHeight={{
                        base: "19px",
                        md: "21px",
                        xxl: "23px",
                        xxxl: "25px",
                      }}
                      color="#FFFFFF"
                    >
                      {li.Title}
                    </Text>
                  </Box>
                  <Flex justifyContent={"flex-end"} flexDirection={"column"} pt="30px">
                    <Text
                      fontFamily="inter"
                      textAlign={"center"}
                      fontWeight="600"
                      fontSize={{
                        base: "12px",
                        md: "14px",
                        xxl: "16px",
                        xxxl: "16px",
                      }}
                      lineHeight={{
                        base: "19px",
                        md: "21px",
                        xxl: "23px",
                        xxxl: "25px",
                      }}
                      color="#FFFFFF"
                    >
                      {li.Name}
                    </Text>
                    <Text
                      mb={{ base: '12px', md: '16px', xl: '23px' }}
                      textAlign={"center"}
                      fontFamily="inter"
                      fontWeight="400"
                      fontSize={{
                        base: "12px",
                        md: "14px",
                      }}
                      lineHeight={{
                        base: "19px",
                        md: "21px",
                        xxl: "23px",
                        xxxl: "25px",
                      }}
                      color="#FFFFFF"
                    >
                      {li.Designation}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </animated.div>
  );
}

export default TestimonialCards;
