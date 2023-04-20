import { Container } from './styles'
import InfoImg from '../../assets/images/InfoImg.png'

export function Info() {
  return (
    <Container>
      <img src={InfoImg} />
      <div className="text">
        <h1>Sabores inigualáveis</h1>
        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
      </div>
    </Container>
  )
}