// Your component file
import React, { forwardRef } from 'react';
import { Box, Image, Flex, Text, Grid } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import { Services } from '../../core/constants/constant';


const ServicesSection = forwardRef<HTMLDivElement>((props, ref) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 400, // Adjust delay as needed
  });

  return (
    <animated.div style={animationProps}>
      <Box bg="#242424" py={{ base: '40px', md: '50px', lg: '60px', xl: '147px' }} ref={ref}>
        <Box mx="auto" maxW={"1566px"} w="100%" px="40px">
          <Box pb={{ base: '20px', lg: '30px', xl: '60px' }}>
            <Text
              fontWeight="600"
              fontSize={{ base: '22px', lg: '26px', xl: '28px', xxl: '33px', xxxl: '44px' }}
              lineHeight={{ base: '32px', lg: '34px', xl: '36px', xxl: '46px', xxxl: '56px' }}
              color="#FFFFFF"
              mb="7px"
              fontFamily="inter"
              textAlign={"center"}
            >
           Things That I Do
            </Text>
          </Box>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
              xl: "repeat(2, 1fr)",
              xxl: "repeat(2, 1fr)",
            }}
            w="100%"
            gap="24px"
          >
            {Services.map((li, index) => (
              <Box
                key={index}
                border='1px solid rgba(255, 255, 255, 0.4)'
                bg="transparent"
                borderRadius={"8px"}
                px={{ base: "20px", md: "30px", lg: "40px" }}
                py={{ base: "25px", md: "25px", lg: "35", xl: '45px', xxl: '55px', xxxl: '75px' }}
              >
                <Flex alignItems={"flex-start"} gap={{ base: '20px', md: '30px', lg: '40px', xl: '50px', xxl: '65px' }}>
                  <Box>
                    <Image src={li.Image} />
                  </Box>
                  <Box>
                    <Box >
                      <Text
                        mb={{ base: '12px', md: '16px', xl: '23px' }}
                      
                        fontWeight="500"
                        fontFamily="inter"
                        fontSize={{
                          base: "16px",
                          md: "21px",
                          xxl: "24px",
                          xxxl: "28px",
                        }}
                        lineHeight={{
                          base: "26px",
                          md: "31px",
                          xxl: "34px",
                          xxxl: "36px",
                        }}
                        color="#FFFFFF"
                      >
                        {li.Title}
                      </Text>
                      <Text
                        fontFamily="inter"
                        maxW={"387px"}
                        fontWeight="400"
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
                        {li.Description}
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </animated.div>
  );
});

export default ServicesSection;
