import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";
const App = () => {
    const [ videos, setVideos ] = useState([])
    const API = 'http://localhost:3000/initalState'
    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data))
    },[])
    //se encarga de escuchar alguna propiedad que pueda cambiar y vuelve a ejecutarse
    //segunda propiedad para que no se quede el loop infinito
  return (
    <div className="App">
      <Header />
      <Search />
      {videos.mylist.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {videos.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {videos.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      }
      <Footer />
    </div>
  );
};
export default App;
