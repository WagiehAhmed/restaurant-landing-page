import { Box, Toolbar } from "@mui/material";
import Appbar from "./components/appbar";
import Home from "./components/home";
import Deshes from "./components/dishes";
import About from "./components/about";
import Menu from "./components/menu";
import Reviews from "./components/reviews";
import Order from "./components/order";
import { useRef } from "react";
import Footer from "./components/footer";

function App() {
  const refs = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef()]
  const scrollTo = (index) => {
    window.scrollTo({ top: refs[index].current.offsetTop, behavior: "smooth" })
  }
  
  return (
    <Box>
      <Appbar scrollTo={scrollTo}/>
      <Toolbar/>
      <Home ref={refs[0]}/>
      <Deshes ref={refs[1]}/>
      <About ref={refs[2]}/>
      <Menu ref={refs[3]}/>
      <Reviews ref={refs[4]}/>
      <Order ref={refs[5]}/>
      <Footer/>
    </Box>
  );
}

export default App;
