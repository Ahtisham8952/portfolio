import { Box, Image, Tooltip } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import BlogSection from './BlogSection';
import FeaturedVideos from './FeaturedVideos';
import AwardsSection from './AwardsSection';
import TestimonialSection from './TestimonialSection';
import GetinTouch from './GetinTouch';

import MobileSideBar from './MobileSideBar';

export const Philipfolio = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const featuredVideosRef = useRef(null);
  const awardsRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
 

  const [activeSection, setActiveSection] = useState(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSetActiveSection = (sectionRef) => {
    setActiveSection(sectionRef);
  };

  return (
    <>
   
   
    <Box position="relative">
      <Box display={{base:'block',md:'block',lg:'none'}} position={"fixed"} zIndex={"1"} right="50px" top='50px'>

      
      <MobileSideBar
            scrollToRef={scrollToRef}
            handleSetActiveSection={handleSetActiveSection}
            heroRef={heroRef}
            servicesRef={servicesRef}
            blogRef={blogRef}
            featuredVideosRef={featuredVideosRef}
            awardsRef={awardsRef}
            testimonialRef={testimonialRef}
            contactRef={contactRef}
          />

      </Box>
      <Box>
        <HeroSection 
        ref={heroRef}
        onClick={() => scrollToRef(contactRef)}
         />
        <ServicesSection ref={servicesRef} />
        <ProjectsSection ref={projectsRef} />
        <BlogSection ref={blogRef} />
        <FeaturedVideos ref={featuredVideosRef} />
        <AwardsSection ref={awardsRef} />
        <TestimonialSection ref={testimonialRef} />
        <GetinTouch  ref={contactRef}/>
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
        display={{base:'none',lg:'flex'}}
        flexDirection="column"
      >
         <Tooltip label="Home" aria-label="Home" placement="left" hasArrow>

         
        <Box onClick={() => { scrollToRef(heroRef); handleSetActiveSection(heroRef); }} >
          <Image src={activeSection === heroRef ? "/subgreen1.svg" : "/sidebaricon1.svg"} />
        </Box>
        </Tooltip>
        <Tooltip label="Services" aria-label="Services" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(servicesRef); handleSetActiveSection(servicesRef); }}>
          <Image src={activeSection === servicesRef ? "/subgreen2.svg" : "/mainservice.svg"} />
        </Box>
        </Tooltip>
        <Tooltip label="Blogs" aria-label="Blogs" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(blogRef); handleSetActiveSection(blogRef); }}>
          <Image src={activeSection === blogRef ? "/subgreen3.svg" : "/blogploticon1.svg"} />
        </Box>
        </Tooltip>
        <Tooltip label="Videos" aria-label="Videos" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(featuredVideosRef); handleSetActiveSection(featuredVideosRef); }}>
          <Image src={activeSection === featuredVideosRef ? "/subgreen4.svg" : "/videocicon.svg"} />
        </Box>
        </Tooltip>
        <Tooltip label="Awards" aria-label="Awards" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(awardsRef); handleSetActiveSection(awardsRef); }}>
          <Image src={activeSection === awardsRef ? "/subgreenaward.svg" : "/awardmedal.svg"} />
        </Box>
        </Tooltip>
        <Tooltip label="Testimonials" aria-label="Testimonials" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(testimonialRef); handleSetActiveSection(testimonialRef); }}>
          <Image src={activeSection === testimonialRef ? "/subgreen5.svg" : "/techcalls.svg"} />
        </Box>
        </Tooltip>
        <Tooltip label="Contact us" aria-label="Contact us" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(contactRef); handleSetActiveSection(contactRef); }}>
          <Image src={activeSection === contactRef ? "/conatctgreen.svg" : "/constactwhite.svg"} />
        </Box>
        </Tooltip>
      </Box>
    </Box>
    </>
  );
};
