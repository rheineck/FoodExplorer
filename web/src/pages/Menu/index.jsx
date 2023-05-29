import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { X, MagnifyingGlass } from '@phosphor-icons/react'

import { Container } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'

export function Menu() {
  const { user, signOut } = useAuth()
  const isAdmin = user.isAdmin
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleSignOut() {
    alert('Você quer realmente sair?')
    signOut()
    navigate('/')
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
          {isAdmin ? 
            <ButtonText 
              id="button"
              className="adminOnly"
              title="Novo Prato"
              onClick={() => navigate('/new')}
            />
            : 
            <ButtonText 
              id="button"
              title="Favoritos"
            />
          }
          <ButtonText 
            id="button"
            title="Histórico"
          />
          <Link to='/'>
            <ButtonText 
              id="button"
              title="Home"
            />
          </Link>
          <ButtonText
            id="button" 
            title="Sair"
            onClick={handleSignOut}
          />
        </div>
      </main>
      <Footer />
    </Container>
  )
}