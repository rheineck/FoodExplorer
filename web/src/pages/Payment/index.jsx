
import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function Payment() {
  const orderId = 2;
  return(
    <Container>
      <Header />
      <Content>
        <h1>Pagamento</h1>
        <div className="payment">
          Para pagamento, se dirijá ao caixa principal e informe o código: {orderId}
        </div>
      </Content>
      <Footer />
    </Container>
  )
}