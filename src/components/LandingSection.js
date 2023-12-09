import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import me from "../images/me.png"

const greeting = "Hello, I am Abdullahi!";
const bio1 = "FRONTEND DEVELOPER";
const bio2 = "specialised in React | Nextjs";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack
      spacing={10}
      alignItems="center"
    >
      <Avatar
        size="xl"
        src={me}
      />
      <Heading
        as="h1"
        size="lg"
        fontWeight="bold"
        color="white"
      >
        {greeting}
      </Heading>
      <VStack spacing={2} alignItems="center">
        <Heading
          as="h2"
          size="md"
          color="white"
          opacity={0.8}
        >
          {bio1}
        </Heading>
        <Heading
          as="h3"
          size="sm"
          color="white"
          opacity={0.6}
        >
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
