import React from "react";
import { VStack, HStack, Image, Heading, Text, Button } from "@chakra-ui/react";

const Card = ({ project }) => {
  return (
    <VStack
      w="full"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      bg="white" // Background color changed to white
    >
      <Image src={project.getImageSrc()} alt={project.title} borderRadius="lg" h="250px" w="full" objectFit="cover" />
      <VStack p={4} spacing={4}>
        <Heading size="md" color="black"> {project.title} </Heading> {/* Title color changed to black */}
        <Text color="black">{project.description} </Text>
        <HStack justify="flex-start"> {/* Button moved to the left */}
          <Button size="sm" colorScheme="blue" variant="outline">
            Read More
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
