import { VStack } from "@chakra-ui/react";
import BaseLayout from "../components/base-layout";
import Footer from "../components/footer";
import ProjectDetail from "../components/project-detail";

export default function Projects() {
  return (
    <VStack spacing={[20, 16]}>
      <BaseLayout>
        <VStack spacing={[16, 8]}>
          <ProjectDetail />
        </VStack>
      </BaseLayout>
      <Footer />
    </VStack>
  );
}
