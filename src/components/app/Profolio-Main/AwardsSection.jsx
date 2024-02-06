import { Box, Button, Flex, Grid, Text, Image } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { useSpring, animated } from 'react-spring';

const AwardsSection = forwardRef((props, ref) => {
  const Services = [
    {
      date: " 2016-2016",
      Uni: "Stanford University United States",
      Degree: "Technology Entrepreneurship",
    },
    {
        date: " 2012-2014",
        Uni: "LUMS Pakistan",
        Degree: "Masters in Computer Science",
      },
      {
        date: " 2004-2008",
        Uni: "FAST-NUCES Pakistan",
        Degree: "Bachelors in Computer Science",
      },
  ];
  const Awards=[
    {
       
        AwardName: "CEO Excellence Award by CEO Club and Governor of Punjab",
        
      },
      {
       
        AwardName: "Best CEO of the Year at Growth Summit 2023",
        
      },
      {
       
        AwardName: "Best Tech Company of the Year at Growth Summit 2023",
        
      },
      {
       
        AwardName: "Commendation Award by the Punjab Government",
        
      },

  ]
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
        <Flex w="100%" gap="24px" flexDirection={{base:'column',lg:'row'}}>
          <Box w={{base:'100%',lg:'50%'}}>
          
              <Box
                border="1px solid rgba(255, 255, 255, 0.4)"
                bg="transparent"
                borderRadius={"8px"}
                p={{ base: "20px", md: "30px", lg: "40px" }}
              >
                <Text
                  mb="65px"
                  fontFamily="inter"
                
                  fontWeight="500"
                  fontSize={{
                    base: "28px",
                  }}
                  lineHeight={{
                    base: "36px",
                  }}
                  color="#FFFFFF"
                >
                  EDUCATION
                </Text>
                {Services.map((li) => (
                <Flex
                _last={{mb:"0px"}}
                mb="65px"
                  w="100%"
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={{
                    base: "23px",
                  
                  }}
                >
                  <Box w="22%">
                    <Text

                      fontFamily="inter"
                      fontWeight="400"
                      fontSize={{
                        base: "16px",
                      }}
                      lineHeight={{
                        base: "24px",
                      }}
                      color="#FFFFFF"
                    >
                    {li.date}
                    </Text>
                  </Box>

                  
                    <Box
                      w="100%"
                      pb="16px"
                      borderBottom={"1px solid rgba(255, 255, 255, 0.4)"}
                    >
                      <Text
                        mb="9px"
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
                         {li.Uni}
                      </Text>
                      <Text
                        fontFamily="inter"
                        maxW={"387px"}
                        fontWeight="400"
                        fontSize={{
                          base: "14px",
                        }}
                        lineHeight={{
                          base: "24px",
                        }}
                        color="#FFFFFF"
                      >
                         {li.Degree}
                      </Text>
                    </Box>
                 
                </Flex>
                 ))}
              </Box>
           
          </Box>
          <Box w={{base:'100%',lg:'50%'}}>
          
          <Box
            border="1px solid rgba(255, 255, 255, 0.4)"
            bg="transparent"
            borderRadius={"8px"}
            p={{ base: "20px", md: "30px", lg: "40px" }}
          >
            <Text
              mb="55px"
              fontFamily="inter"
            
              fontWeight="500"
              fontSize={{
                base: "28px",
              }}
              lineHeight={{
                base: "36px",
              }}
              color="#FFFFFF"
            >
              AWARDS
            </Text>
            {Awards.map((li) => (
            <Flex
            _last={{mb:"0px"}}
            mb={{base:'44px',xl:'46px',xxl:'65px'}}
              w="100%"
              alignItems={"center"}
              justifyContent={"center"}
              gap={{
                base: "23px",
              
              }}
            >
              <Box w="10%">
                <Image src="/awardshowicon.svg"></Image>
              </Box>

              
                <Box
                  w="100%"
                  pb="16px"
                  borderBottom={"1px solid rgba(255, 255, 255, 0.4)"}
                >
                  <Text
                  
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
})

export default AwardsSection;
