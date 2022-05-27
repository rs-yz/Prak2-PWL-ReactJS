import { Flex, Stack, Text, useColorModeValue, Wrap } from "@chakra-ui/react";
import { Comment } from "../model/project";
import Avatar from "./avatar";

type Props = {
  comment: Comment;
};

export function UserCard({ comment }: Props) {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Stack padding={6}>
      <Flex alignItems={"center"}>
        <Avatar />
        <Wrap>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems={"center"}
          >
            <Text fontWeight="bold" fontSize="md">
              {comment.name}
            </Text>
          </Flex>
        </Wrap>
      </Flex>
      <Text fontSize={"sm"} color={textColor}>
        {comment.comment}
      </Text>
    </Stack>
  );
}
