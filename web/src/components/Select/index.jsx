import { Container } from './styles'

export function Select({ ...rest }) {
  return (
    <Container {...rest}>
      <option>Refeições</option>
      <option>Sobremesas</option>
      <option>Bebidas</option>
    </Container>
  )
}