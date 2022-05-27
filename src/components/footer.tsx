import React from "react";
import { Divider, Flex, HStack, Link, Stack, Text } from "@chakra-ui/layout";

import BaseLayout from "./base-layout";

export default function Footer() {
  return (
    <Flex
      as="footer"
      mt="8"
      height="140px"
      alignItems="center"
      justifyContent="center"
      w="100%"
    >
      <BaseLayout py="12">
        <Divider mb="8" orientation="horizontal" />
        <Stack spacing="2">
          <HStack spacing={[4, 6]} justify="center">
            <Link isExternal href={"https://github.com/muhammadnajie"}>
              Github
            </Link>
            <Link isExternal href={"https://linkedin.com/in/muhammadnajie"}>
              Linkedin
            </Link>
          </HStack>
        </Stack>
      </BaseLayout>
    </Flex>
  );
}
