import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import CountAnimation from "./CountAnimation";

const ProjectsSection: React.FC = () => {
  return (
    <Box bg="rgba(14, 14, 14, 1)" py={{ base: "55px" }}>
      <Box
        mx="auto"
        maxW={"1566px"}
        w="100%"
        px="40px"
      >
        <Flex
          alignItems={"center"}
          gap="50px"
          justifyContent={{ base: 'center', md: 'space-between' }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <CountAnimation
            targetCount={12}
            duration={5000}
            Name="Investments"
          />
          <CountAnimation
            targetCount={300}
            duration={5000}
            Name="Projects completed"
          />
          <CountAnimation
            targetCount={30}
            duration={5000}
            Name="Startup consulting"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
