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
  const homeRef = useRef();
  const deshesRef = useRef();
  const aboutRef = useRef();
  const menuRef = useRef();
  const reviewsRef = useRef();
  const orderRef = useRef();
  const refs = [homeRef,deshesRef,aboutRef,menuRef,reviewsRef,orderRef]
  const scrollTo = (index) => {
    refs[index].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    alert(index);
  }
  
  return (
    // window.scrollTo({ top: orderRef.current.offsetTop, behavior: "smooth" })
    <Box>
      {/* <Appbar reffs={[homeRef,deshesRef,aboutRef,menuRef,reviewsRef,orderRef]}/> */}
      <Appbar scrollTo={scrollTo}/>
      <Toolbar/>
      <Home ref={homeRef}/>
      <Deshes ref={deshesRef}/>
      <About ref={aboutRef}/>
      <Menu ref={menuRef}/>
      <Reviews ref={reviewsRef}/>
      <Order ref={orderRef}/>
      <Footer/>
    </Box>
  );
}

export default App;
