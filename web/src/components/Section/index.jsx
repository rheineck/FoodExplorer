import { CaretLeft, CaretRight } from '@phosphor-icons/react'

import { Container, Slider } from './styles'

export function Section ({ title, children }) {
  return(
    <Container>
      <h2>{title}</h2>

      <Slider>
        <button
          className='buttonLeft'
        >
          <CaretLeft size={40} />
        </button>
        <div>
          {children}
        </div>
        <button
          className='buttonRight'
        >
          <CaretRight size={40} />
        </button>
      </Slider>
    </Container>
  )
}