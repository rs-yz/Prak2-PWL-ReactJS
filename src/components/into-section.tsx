import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import {
  FaGithub,
  FaHackerrank,
  FaLinkedinIn,
  FaMediumM,
} from "react-icons/fa";
import LinkTextIcon from "./link-text-icon";

export default function IntroSection() {
  return (
    <Flex direction={["column", "row"]} align="center">
      <Image
        mb="2"
        src="https://img-9gag-fun.9cache.com/photo/aGpGpLZ_460s.jpg"
        rounded="lg"
        height="324px"
        objectFit="cover"
        boxShadow="0 16px 40px rgba(214, 188, 250, 0.1)"
      />

      <Stack spacing="4" padding="6">
        <Text>
          Hi 👋, my name is Muhammad Najie, usually called Najie.
        </Text>

        <Text>
          In love with Backend and Data Engineering. Procrastinating master.
        </Text>

        <Stack spacing="1">
          <LinkTextIcon
            isExternal
            icon={FaGithub}
            text={"github.com/muhammadnajie"}
            href={"https://github.com/muhammadnajie"}
          />
          <LinkTextIcon
            isExternal
            icon={FaLinkedinIn}
            text={"linkedin.com/in/muhammadnajie"}
            href={"https://linkedin.com/in/muhammadnajie"}
          />
          <LinkTextIcon
            isExternal
            icon={FaMediumM}
            text={"medium.com/@muhammadnajie"}
            href={"https://medium.com/@muhammadnajie"}
          />
          <LinkTextIcon
            isExternal
            icon={FaHackerrank}
            text={"hackerrank.com/najie"}
            href={"https://www.hackerrank.com/najie"}
          />
        </Stack>
      </Stack>
    </Flex>
  );
}
