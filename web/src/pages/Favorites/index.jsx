import { Link } from 'react-router-dom'
import { CaretLeft } from '@phosphor-icons/react';

import { Container, Content } from "./styles";
import Ravanello from '../../assets/images/Ravanello.png'

import { Header } from "../../components/Header";
import { ButtonText } from '../../components/ButtonText'
import { Footer } from "../../components/Footer";

export function Favorites () {
  return (
    <Container>
      <Header />
      <Content>
        <Link to='/'>
          <ButtonText
            className='backbutton disabled'
            title="Voltar"
            icon={CaretLeft}
          />
        </Link>
        <main>
          <h2>Meus Favoritos</h2>
          <div className="favorites">
            <div id="favoriteDish">
              <img src={Ravanello} alt="Salada Ravanello" />
              <Link to='/dishes/:id'>
                Salada Ravanello
              </Link>
              <button>Remover</button>
            </div>
            <div id="favoriteDish">
              <img src={Ravanello} alt="Salada Ravanello" />
              <Link to='/dishes/:id'>
                Salada Ravanello
              </Link>
              <button>Remover</button>
            </div>
            <div id="favoriteDish">
              <img src={Ravanello} alt="Salada Ravanello" />
              <Link to='/dishes/:id'>
                Salada Ravanello
              </Link>
              <button>Remover</button>
            </div>
            <div id="favoriteDish">
              <img src={Ravanello} alt="Salada Ravanello" />
              <Link to='/dishes/:id'>
                Salada Ravanello
              </Link>
              <button>Remover</button>
            </div>
            <div id="favoriteDish">
              <img src={Ravanello} alt="Salada Ravanello" />
              <Link to='/dishes/:id'>
                Salada Ravanello
              </Link>
              <button>Remover</button>
            </div>
            <div id="favoriteDish">
              <img src={Ravanello} alt="Salada Ravanello" />
              <Link to='/dishes/:id'>
                Salada Ravanello
              </Link>
              <button>Remover</button>
            </div>
            <div id="favoriteDish">
              <img src={Ravanello} alt="Salada Ravanello" />
              <Link to='/dishes/:id'>
                Salada Ravanello
              </Link>
              <button>Remover</button>
            </div>
            <div id="favoriteDish">
              <img src={Ravanello} alt="Salada Ravanello" />
              <Link to='/dishes/:id'>
                Salada Ravanello
              </Link>
              <button>Remover</button>
            </div>
          </div>
        </main>
      </Content>
      <Footer/>
    </Container>
  )
}