import { Heading, HStack, Icon, Stack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosGitPullRequest } from "react-icons/io";
import { getProjectList } from "../api/api";
import BaseLayout from "../components/base-layout";
import Footer from "../components/footer";
import IntroSection from "../components/into-section";
import ProjectCard, { ProjectCardSkeleton } from "../components/project-card";
import { Project } from "../model/project";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectError, setProjectError] = useState(null);
  const [loadingProject, setLoadingProject] = useState(false);

  useEffect(() => {
    setLoadingProject(true);
    getProjectList()
      .then((projects) => setProjects(projects))
      .catch((err) => setProjectError(err))
      .finally(() => setLoadingProject(false));
  }, []);

  return (
    <VStack spacing={[20, 16]}>
      <BaseLayout>
        <VStack spacing={[16, 8]}>
          <IntroSection />

          <Stack spacing={4} w="100%">
            <HStack w="100%">
              <Icon fontSize={"4xl"} as={IoIosGitPullRequest} />
              <Heading size={"2xl"}>Projects</Heading>
            </HStack>

            {loadingProject ? (
              <Stack w="100%" spacing={8}>
                {Array.from(new Array(3)).map((_, index) => {
                  return <ProjectCardSkeleton key={"skeleton" + index} />;
                })}
              </Stack>
            ) : (
              <Stack>
                {projects.map((p) => {
                  return (
                    <ProjectCard
                      key={p.id}
                      id={p.id}
                      createdAt={p.createdAt}
                      title={p.title}
                      description={p.description}
                    />
                  );
                })}
              </Stack>
            )}
          </Stack>
        </VStack>
      </BaseLayout>
      <Footer />
    </VStack>
  );
}
