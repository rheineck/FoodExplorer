import { Container } from './styles'

import LogoDark from '../../assets/LogoDark.svg'

export function Footer() {
  return(
    <Container>
      <div className="brand">
        <img src={LogoDark}/>
        <h1>food explorer</h1>
      </div>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}