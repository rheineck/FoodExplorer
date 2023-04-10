import InfoImg from '../../assets/images/InfoImg.png'

import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'

export function Home () {
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <div className="info">
            <img src={InfoImg} className='infoImg'/>
            <div className="text">
              <h1>Sabores inigualáveis</h1>
              <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
            </div>
          </div>
          <h1 id='dishesType'>Refeições</h1>
          <div id="cards">
            <Card />
            <Card />
            <Card />
          </div>
          <h1 id='dishesType'>Sobremesas</h1>
          <div id="cards">
            <Card />
            <Card />
            <Card />
          </div>
          <h1 id='dishesType'>Bebidas</h1>
          <div id="cards">
            <Card />
            <Card />
            <Card />
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}