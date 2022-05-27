import { ChakraProvider, theme } from "@chakra-ui/react";
import { Navbar } from "./components/navbar";
import Home from "./pages/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects/:id" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
