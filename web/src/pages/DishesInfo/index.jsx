import { Link } from 'react-router-dom'

import { CaretLeft, Minus, Plus, Receipt } from '@phosphor-icons/react'
import Ravanello from '../../assets/images/Ravanello.png'

import { Container } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Tags } from '../../components/Tags'
import { Footer } from '../../components/Footer'

export function DishesInfo () {
  return (
    <Container>
      <Header />
      <Link to='/'>
        <ButtonText
          className='backbutton'
          title="Voltar"
          icon={CaretLeft}
        />
      </Link>
      <main>
        <img 
          src={Ravanello} 
          className='dishImg'
        />
        <div className="title">
          <h1>Salada Ravanello</h1>
          <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</span>
          <div className="ingredients">
            <Tags 
              title='alface'
            />
            <Tags 
              title='cebola'
            />
            <Tags 
              title='pão naan'
            />
            <Tags 
              title='pepino'
            />
            <Tags 
              title='rabanete'
            />
            <Tags 
              title='tomate'
            />
          </div>
          <div className="buttons disabled">
            <div className="includeDishes">
              <ButtonText
                icon={Minus}
              />
              01
              <ButtonText 
                icon={Plus}
              />
            </div>
            <Button 
              className='includeButton'
              title={`Pedir R$ 25.00`}
              icon={Receipt}
            />
          </div>
          <Link to='/edit/:id'>
            <Button 
              className="adminOnly editDishes"
              title="Editar Prato"
            />
          </Link>
        </div>
      </main>
      <Footer />
    </Container>
  )
}