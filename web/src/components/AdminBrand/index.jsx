import { Container } from "./styles"
import logoImg from "../../assets/Logo.svg"

export function AdminBrand() {
  return (
    <Container>
      <img src={logoImg} alt="Logo FoodExplorer" />
      <div>
        food explorer
        <span>admin</span>
      </div>
    </Container>
  )
}