import { CaretRight, Minus, Plus, HeartStraight } from '@phosphor-icons/react'
import Ravanello from '../../assets/images/Ravanello.png'

import { Container } from './styles'

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

export function Card({ data, ...rest }) {
  return(
    <Container {...rest}>
      <ButtonText 
        className='favorite'
        icon={HeartStraight}
      />
      <img src={Ravanello} alt="Salada Ravanello" />
      <ButtonText
        className='title'
        title='Salada Ravanello'
        icon={CaretRight}
      />
      <h1>R$ 49,97</h1>
      <div className="includeDishes">
        <ButtonText
          icon={Minus}
        />
        <span>01</span>
        <ButtonText 
          icon={Plus}
        />
      </div>
      <Button 
      className='includeButton'
        title='Incluir'
      />
    </Container>
  )
}