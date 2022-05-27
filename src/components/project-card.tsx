import {
  Heading,
  HStack,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

export function ProjectCardSkeleton() {
  return (
    <Stack>
      <Skeleton w="80%" h="6" />
      <Skeleton w="90%" h="16" />
      <Skeleton w="100px" h="4" />
    </Stack>
  );
}

export default function ProjectCard({
  id,
  title,
  description,
  createdAt,
}: Props) {
  const textColor = useColorModeValue("gray.600", "gray.300");

  const navigate = useNavigate();

  return (
    <Stack>
      <HStack
        justify="space-between"
        cursor={"pointer"}
        onClick={() => navigate(`/projects/${id}`)}
      >
        <Heading fontSize={{ sm: "lg", md: "xl" }} as="h2" cursor="pointer">
          {title}
        </Heading>
      </HStack>
      <Stack color={textColor}>
        <Text
          as={pWithLineClamp(2)}
          lineHeight="short"
          fontSize={{ sm: "sm", md: "md" }}
        >
          {description}
        </Text>
        <Text fontSize="xs">{createdAt}</Text>
      </Stack>
    </Stack>
  );
}

// Memotong kalimat jika sudah mencapai maxLine.
// Contoh:
// <Text as={pWithLineClamp(2)} >
//    Hanya akan menampilkan teks sebanyak 2 baris
//    jika melebihi makan akan menampilkan tanda...
//</Text >
export const pWithLineClamp = (maxLine: number) => styled.p`
  display: -webkit-box;
  -webkit-line-clamp: ${maxLine};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
