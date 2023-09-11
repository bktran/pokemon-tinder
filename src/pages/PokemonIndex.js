import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import mockPokemon from "../mockPokemon";
import { NavLink } from 'react-router-dom';
import './PokemonIndex.css'
import grass from '../assets/green-grass.jpeg'


const PokemonIndex = ({ pokemons }) => {
  const items = pokemons

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <Card
          body
          color="light"
          style={{
            width: '18rem'
          }}
          key={index}
        >
          <img
            alt={`profile of a pokemon name ${item.name}`}
            src={item.image}
          />
          <CardBody>
            <CardTitle tag="h5">
              {item.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Level: {item.level}
            </CardSubtitle>

            <Button>
              <NavLink to={`/pokemonshow/${item.id}`}>
              See More Details
              </NavLink>
            </Button>
          </CardBody>
        </Card>
      </CarouselItem>
      
    );
  })

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...items}
      interval={null}
    >
      {/* <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      /> */}
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  )

}



export default PokemonIndex