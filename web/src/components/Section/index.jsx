import { CaretLeft, CaretRight } from '@phosphor-icons/react'

import { Container, Slider } from './styles'
import { useRef } from 'react'

export function Section ({ title, children }) {
  const slider = useRef(null)

  function handleLeftArrowClick() {
    event.preventDefault()

    slider.current.scrollLeft -= slider.current.offsetWidth
  }

  function handleRightArrowClick() {
    event.preventDefault()

    slider.current.scrollLeft += slider.current.offsetWidth
  }
  
  return(
    <Container>
      <h2>{title}</h2>
      <Slider ref={slider}>
        <button
          className='buttonLeft desktopOnly'
          onClick={handleLeftArrowClick}
        >
          <CaretLeft size={40} />
        </button>
        <div >
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