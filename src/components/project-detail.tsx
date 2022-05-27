import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoMdGitMerge } from "react-icons/io";
import { useParams } from "react-router-dom";
import { getProjectByID, getProjectComments, sendComments } from "../api/api";
import { Comment, Project } from "../model/project";
import { UserCard } from "./user-card";

export default function ProjectDetail() {
  const textColor = useColorModeValue("gray.600", "gray.300");

  const { id } = useParams<{ id: string }>();

  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loadingProject, setLoadingProject] = useState(false);
  const [projectError, setProjectError] = useState<Error | null>(null);

  const [comments, setComments] = useState<Comment[]>([]);

  // useEffect(() => {
  //   getProjectComments(Number(id))
  //     .then((c) => setComments(c))
  //     .catch((err) => console.log(err));
  // }, [id]);

  useEffect(() => {
    setLoadingProject(true);
    getProjectByID(Number(id))
      .then((projects) => setProject(projects))
      .catch((err) => setProjectError(err))
      .finally(() => setLoadingProject(false));
  }, [id]);

  if (loadingProject) {
    return (
      <VStack>
        <Text>Loading...</Text>
      </VStack>
    );
  }

  if (projectError || project === undefined) {
    return (
      <VStack>
        <Text>Errorr...</Text>
      </VStack>
    );
  }

  return (
    <VStack spacing={8}>
      <HStack w="100%" justify="space-between">
        <Heading size={"3xl"} as="h1">
          {project?.title}
        </Heading>
      </HStack>
      <Stack color={textColor}>
        <Text lineHeight="short">{project?.description}</Text>
        <Text fontSize="sm">{project?.createdAt}</Text>
      </Stack>

      <Form
        onSubmit={(name, comment) => {
          if (project !== undefined && project.comments !== undefined) {
            setProject({...project, comments: [{name, comment},...project.comments.map(e => ({...e}))]})
          }

          sendComments(id as string, name, comment);
        }}
      />
      <VStack w="100%">
        <HStack w="100%">
          <HStack w="100%">
            <Icon fontSize={"md"} as={IoMdGitMerge} />
            <Heading size={"lg"}>Comments</Heading>
          </HStack>
        </HStack>

        <Stack spacing={6} w="100%">
          {project?.comments.map((e, i) => (
            <UserCard comment={e} key={i} />
          ))}
        </Stack>
      </VStack>
    </VStack>
  );
}

function Form(props: { onSubmit: (name: string, comment: string) => void }) {
  const [inputName, setInputName] = useState("");
  const [activeName, setActiveName] = useState(false);

  const [inputComment, setInputComment] = useState("");
  const [activeComment, setActiveComment] = useState(false);

  const handleInputNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => setInputName(e.target.value);

  const handleInputCommentChange: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => setInputComment(e.target.value);

  const isNameError = activeName && inputName.trim().length === 0;
  const isCommentError = activeComment && inputComment.trim().length == 0;

  return (
    <VStack spacing={6} w="100%" padding="6" shadow={"lg"} borderRadius="lg">
      <HStack w="100%">
        <Heading as="h2" size={"md"}>
          Leave your comment!
        </Heading>
      </HStack>
      <FormControl w="100%" isInvalid={isNameError}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          onKeyUp={() => setActiveName(true)}
          id="name"
          type="text"
          value={inputName}
          onChange={handleInputNameChange}
        />
        {!isNameError ? (
          <FormHelperText>
            Enter the name you'd like to display on comment history.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Name is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl w="100%" isInvalid={isCommentError}>
        <FormLabel htmlFor="comment">Comment</FormLabel>
        <Textarea
          onKeyUp={() => setActiveComment(true)}
          id="comment"
          value={inputComment}
          onChange={handleInputCommentChange}
        />
        {!inputComment ? (
          <FormHelperText>
            Enter the comment you'd like to display on comment history.
          </FormHelperText>
        ) : (
          <FormErrorMessage>comment is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl w="100%" isInvalid={isCommentError}>
        <Button
          mt={4}
          onClick={() => props.onSubmit(inputName, inputComment)}
          colorScheme="teal"
          type="submit"
        >
          Send
        </Button>
      </FormControl>
    </VStack>
  );
}
