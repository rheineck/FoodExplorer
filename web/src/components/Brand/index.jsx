import { Container } from "./styles"
import logoImg from "../../assets/Logo.svg"

export function Brand() {
  return (
    <Container>
      <img src={logoImg} alt="Logo FoodExplorer" />
      food explorer
    </Container>
  )
}