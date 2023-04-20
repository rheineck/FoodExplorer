import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Info } from '../../components/Info'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'

export function Home () {
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <Info />
          <h1 id='dishesCategory'>Refeições</h1>
          <div id="cards">
            <Card />
            <Card />
            <Card />
          </div>
          <h1 id='dishesCategory'>Sobremesas</h1>
          <div id="cards">
            <Card />
            <Card />
            <Card />
          </div>
          <h1 id='dishesCategory'>Bebidas</h1>
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