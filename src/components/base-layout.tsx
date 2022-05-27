import { Flex, FlexProps } from "@chakra-ui/layout";

export default function BaseLayout({ children, ...rest }: FlexProps) {
  return (
    <Flex
      direction="column"
      maxW="54rem"
      w="100%"
      mx="auto"
      px={[6, 4]}
      {...rest}
    >
      {children}
    </Flex>
  );
}
