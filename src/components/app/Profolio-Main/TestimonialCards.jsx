import { Box, Image,Flex,Text,Grid } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';

const TestimonialCards = () => {
  const Services = [
    {
      Image: './testimonialsub1.png',
      Title: 'Usman was an amazing technical partner as we grew Concert.His rapid prototyping and testing helped us deliver first-in- category features in a competitive landscape. As we began to see success, and grew rapidly, Usman helped us recruit excellent talent very quickly, and helped us prioritize an increasingly complex roadmap. Usman’s startup leadership helped us scale and sell the business in just a few years- he’d be an incredible asset to anyone’s team!',
      Designation:'2x Founder, CFO, Sales Coach,Incentive Comp',
      Name: 'Sanj Sanampudi',
    },
    {
      Image: './testimonialsub2.png',
      Title: 'I’ve known Usman for years in the tech and startup world. His visionary leadership transformed his company, growing it from 200 to over 1500 professionals in just two years. Usman’s passion for education is truly inspiring, turning dreams into reality. He’s a bold, solution-driven leader who empowers change and fosters responsibility.',
      Designation:'Senior Software Engineer,Microsoft',
      Name: 'Abdullah Ansari',
    },
   
  ];
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
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
              xl: "repeat(2, 1fr)",
              xxl: "repeat(2, 1fr)",
            }}
            w="100%"
            gap="24px"
          >
            {Services.map((li) => (
              <Box
            
                bg="#0E0E0E"
                borderRadius={"8px"}
                p={{ base: "20px", md: "20px", lg: "30px" }}
               
              >
                
                <Flex h="100%" w="100%" alignItems={"flex-start"} gap={{base:'20px',md:'20px',lg:'20px',xl:'20px',xxl:'20px'}}>
                  <Box w="100%">
                    <Image
                    w={{base:'30px',md:'35px',lg:'40px',xl:'60px',xxl:'94px'}}
                    h={{base:'30px',md:'35px',lg:'40px',xl:'60px',xxl:'94px'}}
                     src={li.Image}/>
                     

                    
                  </Box>
                  <Flex flexDirection={"column"} h="100%" justifyContent={"space-between"}>
                    <Box>
                    <Text
                      mb={{base:'12px',md:'16px',xl:'23px'}}
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
                      mb={{base:'12px',md:'16px',xl:'23px'}}
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
