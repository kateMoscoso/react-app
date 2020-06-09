import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

import '../assets/styles/App.scss'
const App = () => (
    <div className="App">
    <Header />
    <Search />
    <Categories title="Categorias" >
        <Carousel>
            <CarouselItem>

            </CarouselItem>
        </Carousel>
    </Categories>
    <Footer/>
    </div>
)
export default App