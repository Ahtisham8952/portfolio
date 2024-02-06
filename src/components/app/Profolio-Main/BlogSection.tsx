import React, { forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, Button, Flex, Grid, Text, Image } from "@chakra-ui/react";
import { blogs } from '../../core/constants/constant';


const BlogSection = forwardRef<HTMLDivElement>((props, ref) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 400, // Adjust delay as needed
  });

  return (
    <animated.div style={animationProps}>
      <Box bg="#242424" py={{ base: '40px',md:'50px' ,lg: '60px',xl:'147px' }} ref={ref}>
        <Box mx="auto" maxW={{ base: "480px", md: "768px", lg: "991px",xl:'1280px',xxl:'1440px',xxxl:'1560px' }} w="100%" px="40px">
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
              Blog
            </Text>
          </Box>
          <Grid
            py={{ base: '20px',md:'30px' ,lg: '40px',xl:'60px' }}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
              xxl: "repeat(3, 1fr)",
            }}
            w="100%"
            gap={{base:'20px',md:'30px',lg:'40px',xl:'50px',xxl:'60px'}}
          >
            {blogs.map((li, index) => (
              <Box
                key={index}
                border="1px solid rgba(255, 255, 255, 0.4)"
                bg="transparent"
                borderRadius={"8px"}
                p={{ base: "20px", md: "20px", lg: "20px" }}
              >
                <Box>
                  <Image w="100%" src={li.Image} />
                </Box>
                <Box>
                  <Box>
                    <Text
                      letterSpacing={"0.3px"}
                      my={{ base: "12px", md: "16px", xl: "23px" }}
                      fontWeight="600"
                      fontFamily="inter"
                      fontSize={{
                        base: "16px",
                      }}
                      lineHeight={{
                        base: "24px",
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
                        md: "14px",
                      }}
                      lineHeight={{
                        base: "24px",
                      }}
                      color="#FFFFFF"
                    >
                      {li.Description}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
          <Flex justifyContent={"center"}>
            <Button
              bg="#FFFFFF"
              borderRadius={"40px"}
              fontWeight={"600"}
              fontSize={"16px"}
              lineHeight={"170.23%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"6px"}
              py={"16px"}
              px={"37px"}
              color={"#112135"}
            >
              view more
            </Button>
          </Flex>
        </Box>
      </Box>
    </animated.div>
  );
})

export default BlogSection;
