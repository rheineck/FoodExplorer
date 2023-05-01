import { Link } from 'react-router-dom'
import { CaretLeft } from '@phosphor-icons/react'

import { Container, Content } from './styles'
import Ravanello from '../../assets/images/Ravanello.png'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

export function Order() {
  const orderId = 2;

  return (
    <Container>
      <Header />
      <Content>
        <Link to='/'>
          <ButtonText
            className='backbutton'
            title="Voltar"
            icon={CaretLeft}
          />
        </Link>
        <main>
          <div className="resume">
            <h1>Meu Pedido</h1>
            <div id="orderedDish">
              <img src={Ravanello} alt="Salada Ravanello" />
                <span>Salada Ravanello</span>
              <button>Remover</button>
            </div>
            <div id="orderedDish">
              <img src={Ravanello} alt="Salada Ravanello" />
                <span>Salada Ravanello</span>
              <button>Remover</button>
            </div>
            <div id="orderedDish">
              <img src={Ravanello} alt="Salada Ravanello" />
                <span>Salada Ravanello</span>
              <button>Remover</button>
            </div>
            <div id="orderedDish">
              <img src={Ravanello} alt="Salada Ravanello" />
                <span>Salada Ravanello</span>
              <button>Remover</button>
            </div>
            <p>Total: R$ 103,80</p>
            <Link to='/payment'>
              <Button 
                className='disabled'
                title='Avançar'
              />
            </Link>
          </div>
          <div className="payment">
            <h1>Pagamento</h1>
            <div>
              Para pagamento, se dirijá ao caixa principal e informe o código: {orderId}
            </div>
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}