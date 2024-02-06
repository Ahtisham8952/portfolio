import { Box, Button, Flex, Image, Input, Text, Textarea } from "@chakra-ui/react";
import React, { forwardRef, Ref } from "react";

const GetInTouch = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <Box bg="#0E0E0E" py={{ base: "100px", lg: "120px" }}>
      <Box mx="auto" maxW={"1566px"} w="100%" px="40px" ref={ref}>
        <Flex gap="100px" flexDirection={{base:'column',md:'row'}}>
          <Box w={{ base: "100%", md: "50%" }}>
            <Box maxW={"680px"} w="100%">
              <Text
                fontWeight="500"
                fontSize="28px"
                lineHeight="36px"
                color="#FFFFFF"
                mb="7px"
                fontFamily="inter"
              >
                Message
              </Text>
              <Box>
                <Textarea w="100%" h="150px" bg="#EEEEEE" resize={"none"} py="10px"></Textarea>
                <Input my="20px" placeholder="Email Address" p="30px" borderRadius={"10px"} bg="#EEEEEE"/>
                <Input placeholder="Name" p="30px" borderRadius={"10px"} bg="#EEEEEE"/>
                <Flex justifyContent={"flex-end"}>
                  <Button mt="10px" bg="#FFFFFF" px="22px" py="13px" color="#000000" borderRadius={"2px"}>
                    Send
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <Box maxW={"680px"} w="100%">
              <Box mb="100px">
                <Text
                  fontWeight="500"
                  fontSize="28px"
                  lineHeight="36px"
                  color="#FFFFFF"
                  mb="7px"
                  fontFamily="inter"
                >
                  Get in touch
                </Text>
                <Text
                  fontWeight="400"
                  fontSize="14px"
                  lineHeight="24px"
                  color="#FFFFFF"
                  mb="7px"
                  fontFamily="inter"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
                <Text
                  fontWeight="600"
                  fontSize="14px"
                  lineHeight="24px"
                  color="#FFFFFF"
                  mb="7px"
                  fontFamily="inter"
                >
                  Hi@Philip Cutting.com
                </Text>
              </Box>
              <Flex gap="8px">
                <Image src="/facebooklogo.svg"></Image>
                <Image src="/xlogo.svg"></Image>
                <Image src="/inlogo.svg"></Image>
                <Image src="/twitlogo.svg"></Image>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
});

export default GetInTouch;
