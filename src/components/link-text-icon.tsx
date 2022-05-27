import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface LinkTextIconProps {
  icon: IconType;
  text: string;
  href: string;
  isExternal?: boolean;
}

export default function LinkTextIcon({
  icon,
  text,
  href,
  isExternal,
}: LinkTextIconProps) {
  return (
    <Link href={href} isExternal={isExternal}>
      <HStack align="center" fontSize="sm">
        <Icon as={icon} />
        <Text>{text}</Text>
      </HStack>
    </Link>
  );
}
