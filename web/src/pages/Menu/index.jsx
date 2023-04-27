import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import { X, MagnifyingGlass } from '@phosphor-icons/react'

import { Container } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'

export function Menu() {

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <button onClick={handleBack}>
          <X size={18}/>
        </button>
        Menu
      </header>
      <main>
        <div className="props">
          <Input 
              icon={MagnifyingGlass}
              placeholder='Busque por prato ou ingredientes'
              type='text'
          />
          <Link to='/edit/:id'>
            <ButtonText 
              id="button"
              className="adminOnly disabled"
              title="Novo Prato"
            />
          </Link>
          <Link to='/favorites'>
            <ButtonText 
              id="button"
              title="Favoritos"
            />
          </Link>
          <Link to='/order'>
            <ButtonText 
              id="button"
              title="Histórico"
            />
          </Link>
          <Link to='/'>
            <ButtonText 
              id="button"
              title="Home"
            />
          </Link>
          <ButtonText
            id="button" 
            title="Sair"
          />
        </div>
      </main>
      <Footer />
    </Container>
  )
}