import { Box, Image, Tooltip } from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';
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

  useEffect(() => {
    const sectionRefs = [
      { sectionRef: heroRef, id: 'hero' },
      { sectionRef: servicesRef, id: 'services' },
      { sectionRef: projectsRef, id: 'projects' },
      { sectionRef: blogRef, id: 'blog' },
      { sectionRef: featuredVideosRef, id: 'featuredVideos' },
      { sectionRef: awardsRef, id: 'awards' },
      { sectionRef: testimonialRef, id: 'testimonial' },
      { sectionRef: contactRef, id: 'contact' }
    ];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust as needed
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionRefs.forEach(({ sectionRef, id }) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
        sectionRef.current.id = id;
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSetActiveSection = (sectionRef) => {
    setActiveSection(sectionRef);
  };

  return (
    <>
      <Box position="relative">
        <Box display={{base:'block',md:'block',lg:'none'}} position={"fixed"} zIndex={"1"} right="35px" top='35px'>
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
          <HeroSection ref={heroRef} />
          <ServicesSection ref={servicesRef} />
          <ProjectsSection ref={projectsRef} />
          <BlogSection ref={blogRef} />
          <FeaturedVideos ref={featuredVideosRef} />
          <AwardsSection ref={awardsRef} />
          <TestimonialSection ref={testimonialRef} />
          <GetinTouch ref={contactRef} />
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
            <Box onClick={() => { scrollToRef(heroRef); handleSetActiveSection('hero'); }}>
              <Image src={activeSection === 'hero' ? "/subgreen1.svg" : "/sidebaricon1.svg"} />
            </Box>
          </Tooltip>
        
        <Tooltip label="Services" aria-label="Services" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(servicesRef); handleSetActiveSection('services'); }}>
          <Image src={activeSection === 'services' ? "/subgreen2.svg" : "/mainservice.svg"} />
        </Box>
        </Tooltip>
        <Tooltip label="Blogs" aria-label="Blogs" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(blogRef); handleSetActiveSection('blog'); }}>
          <Image src={activeSection === 'blog' ? "/subgreen3.svg" : "/blogploticon1.svg"} />
        </Box>
        </Tooltip>
        <Tooltip label="Videos" aria-label="Videos" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(featuredVideosRef); handleSetActiveSection('featuredVideos'); }}>
          <Image src={activeSection === 'featuredVideos' ? "/subgreen4.svg" : "/videocicon.svg"} />
        </Box>
        </Tooltip>
        <Tooltip label="Awards" aria-label="Awards" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(awardsRef); handleSetActiveSection('awards'); }}>
          <Image src={activeSection === 'awards' ? "/subgreenaward.svg" : "/awardmedal.svg"} />
        </Box>
        </Tooltip>
        <Tooltip label="Testimonials" aria-label="Testimonials" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(testimonialRef); handleSetActiveSection('testimonial'); }}>
          <Image src={activeSection === 'testimonial' ? "/subgreen5.svg" : "/techcalls.svg"} />
        </Box>
        </Tooltip>
        <Tooltip label="Contact us" aria-label="Contact us" placement="left" hasArrow>
        <Box onClick={() => { scrollToRef(contactRef); handleSetActiveSection('contact'); }}>
          <Image src={activeSection === 'contact' ? "/conatctgreen.svg" : "/constactwhite.svg"} />
        </Box>
        </Tooltip>
      </Box>
      </Box>
    </>
  );
};
