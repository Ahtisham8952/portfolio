import { Box, Button, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FlokEvent {
  image: string;
  Title: string;
  Date: string;
  Location: string;
  Price: string;
  Description: string;
  videoId?: string;
}
interface SliderProps {
  slickPrev(): unknown;
  slickNext(): unknown;
  // define props here
}
const FlokEventsData: FlokEvent[] = [
  {
    image: '/philipvideoimg.png',
    Title: 'Event title',
    Date: 'Time',
    Location: ' Lambda',
    Price: ' $$$',
    Description: 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid..',
    videoId: 'OwApersjpn4'
  },
  {
    image: '/philipvideoimg.png',
    Title: 'Event title',
    Date: 'Time',
    Location: ' Lambda',
    Price: ' $$$',
    Description: 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid..',
    videoId: 'OwApersjpn4'
  },
  {
    image: '/philipvideoimg.png',
    Title: 'Event title',
    Date: 'Time',
    Location: ' Lambda',
    Price: ' $$$',
    Description: 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid..',
    videoId: 'OwApersjpn4'
  },
  {
    image: '/philipvideoimg.png',
    Title: 'Event title',
    Date: 'Time',
    Location: ' Lambda',
    Price: ' $$$',
    Description: 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid..',
    videoId: 'OwApersjpn4'
  },
  {
    image: '/philipvideoimg.png',
    Title: 'Event title',
    Date: 'Time',
    Location: ' Lambda',
    Price: ' $$$',
    Description: 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid..',
    videoId: 'OwApersjpn4'
  },
  
];

const SimpleSlider: React.FC = () => {
  const sliderRef = useRef<SliderProps>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box position="relative">
      <Box
        position="absolute"
        display="flex"
        justifyContent="space-between"
        zIndex="99"
        top="50%"
      >
        <Button
          justifyContent="left"
          px="0px"
          bg="transparent"
          colorScheme="transparent"
          onClick={previous}
        >
          <Image alt="img" h={{base:'20px',md:'30px'}} src="/leftvectorimg.svg"></Image>
        </Button>
      </Box>
      <Box
        position="absolute"
        display="flex"
        justifyContent="space-between"
        right="0px"
        top="50%"
        zIndex="99"
      >
        <Button
          justifyContent="right"
          px="0px"
          onClick={next}
          bg="transparent"
          colorScheme="transparent"
        >
          <Image alt="img" h={{base:'20px',md:'30px'}} src="/rightvectorimg.svg"></Image>
        </Button>
      </Box>
      <Box
        w="100%"
        mx="auto"
        px={{ base: "20px", md: "40px", lg: "80px" }}
      >
        <Slider ref={sliderRef} {...settings}>
          {FlokEventsData.map((event, index) => (
            <Box key={index} p="10px" mx="10px" textDecoration="none" w="337px" h="253px">
              <Box bg="transparent" mb="20px">
                <Box mb="20px" px="20px">
                  <Image src={event.image}></Image>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default SimpleSlider;
