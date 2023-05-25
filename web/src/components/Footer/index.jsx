import { Container } from './styles'

import LogoDark from '../../assets/LogoDark.svg'

export function Footer() {
  return(
    <Container>
      <div className="brand">
        <img src={LogoDark}/>
        food explorer
      </div>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}