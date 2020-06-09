import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import useInitialState from '../hooks/useInitialState'
import "../assets/styles/App.scss";
const API = 'http://localhost:3000/initalState'

const App = () => {
    const initialState = useInitialState(API)
    //se encarga de escuchar alguna propiedad que pueda cambiar y vuelve a ejecutarse
    //segunda propiedad para que no se quede el loop infinito
  return initialState.length === 0 ? <h1>Loading....</h1> : (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
          {initialState.mylist.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Videos">
        <Carousel>
          {initialState.originals.map(item =>
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
