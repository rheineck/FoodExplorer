import { Link } from 'react-router-dom'

import { X, MagnifyingGlass } from '@phosphor-icons/react'

import { Container } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'

export function Menu() {
  return (
    <Container>
      <header>
        <Link to='/'>
          <button>
            <X size={18}/>
          </button>
        </Link>
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