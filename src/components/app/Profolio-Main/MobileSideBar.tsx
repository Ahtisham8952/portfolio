import React from 'react';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Text,
  useDisclosure // Add useDisclosure import
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function MobileSideBar({ scrollToRef, handleSetActiveSection, heroRef, servicesRef, blogRef, featuredVideosRef, awardsRef, testimonialRef, contactRef }) {

  const { isOpen, onOpen, onClose } = useDisclosure(); // Initialize useDisclosure hook

  const handleScrollToSection = (ref) => {
    scrollToRef(ref);
    handleSetActiveSection(ref);
    onClose(); // Close the drawer after clicking on a section link
  };

  return (
    <>
      <Button colorScheme='transparent' w={{base:'35px',md:'35px',lg:'55px'}} h={{base:'35px',md:'35px',lg:'55px'}} border='1px solid #575757' borderRadius={"50%"} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="#191919">
          <DrawerCloseButton />
          <Box w='45%' mx={"auto"}>
            <Box pt="50px">
              <Text
                fontWeight="600"
                fontSize="18px"
                lineHeight="28px"
                color="#999999"
                mb="7px"
                fontFamily="inter"
              >
                Menu
              </Text>
            </Box>
            <Box pt="20px">
              <Text
                fontWeight="500"
                fontSize="14px"
                lineHeight="26px"
                color="white"
                mb="7px"
                cursor="pointer"
                _hover={{ color: "#FFFFFF" }}
                onClick={() => handleScrollToSection(heroRef)}
              >
                Home
              </Text>
              <Text
                fontWeight="500"
                fontSize="14px"
                lineHeight="26px"
                color="white"
                mb="7px"
                cursor="pointer"
                _hover={{ color: "#FFFFFF" }}
                onClick={() => handleScrollToSection(servicesRef)}
              >
                Services
              </Text>
              <Text
                fontWeight="500"
                fontSize="14px"
                lineHeight="26px"
                color="white"
                mb="7px"
                cursor="pointer"
                _hover={{ color: "#FFFFFF" }}
                onClick={() => handleScrollToSection(blogRef)}
              >
                Blog
              </Text>
              <Text
                fontWeight="500"
                fontSize="14px"
                lineHeight="26px"
                color="white"
                mb="7px"
                cursor="pointer"
                _hover={{ color: "#FFFFFF" }}
                onClick={() => handleScrollToSection(featuredVideosRef)}
              >
              Featured Videos
              </Text>
              <Text
                fontWeight="500"
                fontSize="14px"
                lineHeight="26px"
                color="white"
                mb="7px"
                cursor="pointer"
                _hover={{ color: "#FFFFFF" }}
                onClick={() => handleScrollToSection(awardsRef)}
              >
           Awards
              </Text>
              <Text
                fontWeight="500"
                fontSize="14px"
                lineHeight="26px"
                color="white"
                mb="7px"
                cursor="pointer"
                _hover={{ color: "#FFFFFF" }}
                onClick={() => handleScrollToSection(testimonialRef)}
              >
           Testimonial
              </Text>
              <Text
                fontWeight="500"
                fontSize="14px"
                lineHeight="26px"
                color="white"
                mb="7px"
                cursor="pointer"
                _hover={{ color: "#FFFFFF" }}
                onClick={() => handleScrollToSection(contactRef)}
              >
          Contact us
              </Text>
            </Box>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileSideBar;
