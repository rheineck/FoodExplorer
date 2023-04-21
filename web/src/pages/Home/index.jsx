import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Info } from '../../components/Info'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'

export function Home () {
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <Info />
          <Section
            title="Refeições"
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Section>
          <Section
            title="Sobremesas"
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Section>
          <Section
            title="Bebidas"
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}