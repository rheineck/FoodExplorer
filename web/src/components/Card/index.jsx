import { Link } from 'react-router-dom'

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
      <div className="title">
        <Link to='/dishes/:id'>
          <ButtonText
            title='Salada Ravanello'
          />
        </Link>
        <CaretRight size={14}/>
      </div>
      <div className="desktopOnly">
        Rabanetes, folhas verdes e molho agridoce salpicados com gergelim
      </div>
      <h1>R$ 49,97</h1>
      <div className="desktopButtons">
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
      </div>
    </Container>
  )
}