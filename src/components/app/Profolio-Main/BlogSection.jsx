import { Box, Button, Flex, Grid, Text, Image } from "@chakra-ui/react";
import React from "react";

const BlogSection = () => {
  const Services = [
    {
      Image: "./blogpostimg.png",
      Title:
        "Can Pakistan still offer a promising future if you choose to stay here?",
      Description:
        "In the last five years, one thing has become quite clear: for Pakistan to maintain high sustainable growth, it needs dollars, especially through exports. That’s where the IT sector has stood out: without much governmental support,",
    },
    {
        Image: "./blogpostimg.png",
        Title:
          "Can Pakistan still offer a promising future if you choose to stay here?",
        Description:
          "In the last five years, one thing has become quite clear: for Pakistan to maintain high sustainable growth, it needs dollars, especially through exports. That’s where the IT sector has stood out: without much governmental support,",
      },
      {
        Image: "./blogpostimg.png",
        Title:
          "Can Pakistan still offer a promising future if you choose to stay here?",
        Description:
          "In the last five years, one thing has become quite clear: for Pakistan to maintain high sustainable growth, it needs dollars, especially through exports. That’s where the IT sector has stood out: without much governmental support,",
      },
  ];
  return (
    <Box bg="#242424" py={{ base: "100px", lg: "147px" }}>
      <Box mx="auto" maxW={"1566px"} w="100%" px="40px">
        <Box >
          <Text
            fontWeight="600"
            fontSize="44px"
            lineHeight="56px"
            color="#FFFFFF"
            mb="7px"
            fontFamily="inter"
            textAlign={"center"}
          >
            Blog
          </Text>
        </Box>
        <Grid
py="60px"
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
          {Services.map((li) => (
            <Box
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
  );
};

export default BlogSection;
