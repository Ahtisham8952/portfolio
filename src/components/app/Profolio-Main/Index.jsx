import { Box, Image } from '@chakra-ui/react';
import React, { useRef } from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import BlogSection from './BlogSection';
import FeaturedVideos from './FeaturedVideos';

import AwardsSection from './AwardsSection';

export const Philipfolio = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const featuredVideosRef = useRef(null);
  const awardsRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box position="relative">
      <Box>
        <HeroSection ref={heroRef} />
        <ServicesSection ref={servicesRef} />
        <ProjectsSection ref={projectsRef} />
        <BlogSection ref={blogRef} />
        <FeaturedVideos ref={featuredVideosRef} />
       <AwardsSection ref={awardsRef}/>
      
      </Box>
      <Box
        gap="20px"
        border="1px solid #FFFFFF"
        borderRadius="30px"
        right="68px"
        position="fixed"
        transform="translateY(-50%)"
        p="20px"
        top="50%"
        display="flex"
        flexDirection="column"
      >
        <Box onClick={() => scrollToRef(heroRef)}>
          <Image src="/sidebaricon1.svg" />
        </Box>
        <Box onClick={() => scrollToRef(servicesRef)}>
          <Image src="/mainservice.svg" />
        </Box>
        <Box onClick={() => scrollToRef(blogRef)}>
          <Image src="./blogploticon1.svg" />
        </Box>
        <Box onClick={() => scrollToRef(featuredVideosRef)}>
          <Image src="/videocicon.svg" />
        </Box>
        <Box onClick={() => scrollToRef(awardsRef)}>
          <Image src="/awardmedal.svg" />
        </Box>
      </Box>
    </Box>
  );
};
