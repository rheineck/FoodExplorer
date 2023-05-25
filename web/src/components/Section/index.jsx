import { useRef } from 'react';

import { CaretLeft, CaretRight } from '@phosphor-icons/react'

import { Container, Slider } from './styles'

export function Section ({ title, children }) {
  const slider = useRef(null);

  function handleLeftArrowClick(){
    e.preventDefault();

    slider.current.scrollLeft -= slider.current.offsetWidth;
  }

  function handleRightArrowClick(){
    e.preventDefault();

    slider.current.scrollLeft += slider.current.offsetWidth;
  }
  return(
    <Container>
      <h2>{title}</h2>
      <Slider>
        <button
          className='buttonLeft desktopOnly'
          onClick={handleLeftArrowClick}
        >
          <CaretLeft size={40} />
        </button>
        <div ref={slider}>
          {children}
        </div>
        <button
          className='buttonRight desktopOnly'
          onClick={handleRightArrowClick}
        >
          <CaretRight size={40} />
        </button>
      </Slider>
    </Container>
  )
}