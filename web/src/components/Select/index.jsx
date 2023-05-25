import { Container } from './styles'

export function Select({ ...rest }) {
  return (
    <Container {...rest}>
      <option value="selecionar">Selecionar</option>
      <option value="refeicoes">Refeições</option>
      <option value="sobremesas">Sobremesas</option>
      <option value="bebidas">Bebidas</option>
    </Container>
  )
}