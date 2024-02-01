import { Box, Image } from '@chakra-ui/react';
import React, { useRef } from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import BlogSection from './BlogSection';
import FeaturedVideos from './FeaturedVideos';

export const Philipfolio = () => {
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const featuredVideosRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box position="relative">
      <Box>
        <HeroSection />
        <ServicesSection ref={servicesRef} />
        <ProjectsSection ref={projectsRef} />
        <BlogSection ref={blogRef} />
        <FeaturedVideos ref={featuredVideosRef} />
      </Box>
      <Box
        gap="20px"
        border="1px solid #FFFFFF"
        borderRadius="30px"
        right="68px"
        position="fixed"
        transform="translateY(-50%)"
        p="24px"
        top="50%"
        display="flex"
        flexDirection="column"
      >
        <Box onClick={() => scrollToRef(servicesRef)}>
          <Image src="/sidebaricon1.svg" />
        </Box>
        <Box onClick={() => scrollToRef(projectsRef)}>
          <Image src="/sidebaricon1.svg" />
        </Box>
        <Box onClick={() => scrollToRef(blogRef)}>
          <Image src="/sidebaricon1.svg" />
        </Box>
        <Box onClick={() => scrollToRef(featuredVideosRef)}>
          <Image src="/sidebaricon1.svg" />
        </Box>
      </Box>
    </Box>
  );
};
