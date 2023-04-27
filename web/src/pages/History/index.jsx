import { Header } from "../../components/Header";
import { Container } from "./styles";

export function History() {
  return (
    <Container>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Código</th>
            <th>Detalhamento</th>
            <th>Data e Hora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pendente</td>
            <td>0000004</td>
            <td>1 x Salada Radish, 1 x Torrada de Parma</td>
            <td>20/05 às 18h00</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}