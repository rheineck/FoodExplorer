import { Link } from 'react-router-dom'
import { CaretLeft } from '@phosphor-icons/react';

import { useAuth } from '../../hooks/auth'
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from '../../components/ButtonText'
import { Footer } from "../../components/Footer"

export function History() {
  const { user } = useAuth()
  const isAdmin = user.isAdmin
  return (
    <Container>
      <Header />
      <main>
        <Link to='/'>
          <ButtonText
            className='backbutton'
            title="Voltar"
            icon={CaretLeft}
          />
        </Link>
        <h2>Pedidos</h2>
        <table className="desktopOnly">
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
              {isAdmin ? <td>
                <select name="status">
                  <option value="pendente">Pendente</option>
                  <option value="preparo">Em Preparo</option>
                  <option value="entregue">Entregue</option>
                </select>
              </td> : <td>Pendente</td>}
              <td>0000004</td>
              <td>1 x Salada Radish, 1 x Torrada de Parma</td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>Em preparo</td>
              <td>0000003</td>
              <td>1 x Salada Radish</td>
              <td>20/05 às 18h02</td>
            </tr>
          </tbody>
        </table>
        <div id="orderTable" className="mobileOnly">
            <div id="orderId">
              00000004
          </div>
            {isAdmin ? <div id="status"></div> : <div id="status">
              Pendente
            </div>}
            <div id="timestamp">
              20/05 às 18h00
            </div>
            <div id="order">
              1 x Salada Ravanello, 1 x Salada Parma
            </div>
            {isAdmin ? <select name="status" id='select'>
                  <option value="pendente">Pendente</option>
                  <option value="preparo">Em Preparo</option>
                  <option value="entregue">Entregue</option>
                </select> : <></>}
        </div>
        <div id="orderTable" className="mobileOnly">
            <div id="orderId">
              00000004
          </div>
            <div id="status">
              Pendente
            </div>
            <div id="timestamp">
              20/05 às 18h00
            </div>
            <div id="order">
              1 x Salada Ravanello, 1 x Salada Parma
            </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}