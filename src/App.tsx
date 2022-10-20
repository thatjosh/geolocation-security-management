import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/open-sans";
import ScrollToTop from "./routes/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <ScrollToTop>
          <AppRoutes />
        </ScrollToTop>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
