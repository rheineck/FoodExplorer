import { Link } from 'react-router-dom'
import { CaretLeft } from '@phosphor-icons/react'

import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'

export function Order() {
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

      </Content>
      <Footer />
    </Container>
  )
}