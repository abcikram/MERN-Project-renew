import React from "react"
import { Route,Routes } from "react-router-dom";
import {Container} from "react-bootstrap"
import  Header  from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";



const App = () => {  //arow function
  return (
    <>
    <Header/>
    <Container>
      <Routes>
       <Route path="/" element={<HomeScreen/>} exact/>
       <Route path='/product/:id' element={<ProductScreen/>}/>
      </Routes>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
