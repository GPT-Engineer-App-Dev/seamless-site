import { Box, Flex, Heading, Text, Button, Image, useColorModeValue } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

const Index = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Flex direction="column" align="center" justify="center" h="100vh" bg={bg}>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image borderRadius="md" src="/images/landing-hero.jpg" alt="Hero Image" mb={4} />
        <Heading fontSize="2xl" textAlign="center" color={color}>Welcome to GPT Engineer</Heading>
        <Text mt={4} fontSize="md" textAlign="center" color={color}>
          Revolutionize your web development with AI-driven solutions.
        </Text>
        <Button rightIcon={<FaArrowRight />} colorScheme="blue" variant="solid" mt={4}>
          Get Started
        </Button>
      </Box>
    </Flex>
  );
};

export default Index;