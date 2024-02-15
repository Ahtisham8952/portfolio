import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CountAnimation from "./CountAnimation";

const ProjectsSection: React.FC = () => {
  return (
    <Box bg="rgba(14, 14, 14, 1)" pb={{ base: "55px" }} pt="20px">
      <Box
        mx="auto"
        maxW={"1566px"}
        w="100%"
        px="40px"
      >
        <Box mb="40px">
        <Text
              fontWeight="600"
              fontSize={{ base: '22px', lg: '26px', xl: '28px',}}
              lineHeight={{ base: '32px', lg: '34px', xl: '36px' }}
              color="#FFFFFF"
              mb="7px"
              fontFamily="inter"
              textAlign={"center"}
            >
           Insights in 2023
            </Text>
        </Box>
      
        <Flex
          alignItems={"center"}
          gap="50px"
          justifyContent={{ base: 'center', md: 'space-between' }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <CountAnimation
            targetCount={15}
            duration={5000}
            Name="Investments"
          />
          <CountAnimation
            targetCount={35}
            duration={5000}
            Name="Projects completed"
          />
          <CountAnimation
            targetCount={10}
            duration={5000}
            Name="Startup consulting"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
