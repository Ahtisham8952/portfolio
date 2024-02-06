import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface CountAnimationProps {
  targetCount: number;
  duration: number;
  Name: string;
}

function CountAnimation({ targetCount, duration, Name }: CountAnimationProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;

      if (elapsedTime < duration) {
        const progress = (elapsedTime / duration) * targetCount;
        setCount(Math.min(progress, targetCount));
        requestAnimationFrame(animateCount);
      } else {
        setCount(targetCount);
      }
    };

    requestAnimationFrame(animateCount);

    return () => {
      startTime = null;
    };
  }, [targetCount, duration]);

  return (
    <Box>
      <Text
        fontWeight="700"
        fontSize={{ base: '22px', lg: '32px' }}
        lineHeight="150%"
        color="#FFFFFF"
        textAlign="center"
      >
        {Math.round(count).toLocaleString()}+
      </Text>
      <Text fontWeight="500" fontSize="16px" lineHeight="150%" color="#FFFFFF">
        {Name}
      </Text>
    </Box>
  );
}

export default CountAnimation;
