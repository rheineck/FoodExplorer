import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Container, Search } from './styles'
import { List, Receipt, SignOut, MagnifyingGlass, Plus } from '@phosphor-icons/react'

import { Brand } from '../Brand'
import { AdminBrand } from '../AdminBrand'
import { Input } from '../Input'
import { Button } from '../Button'


export function Header({ search }) {
  const { signOut, user } = useAuth()
  const isAdmin = user.isAdmin;

  const navigate = useNavigate()

  function handleNewDish() {
    navigate('/new')
  }

  function handleSignOut() {
    alert("Você realmente quer sair?")
    signOut()
    navigate('/')
  }

  return(
    <Container>
      <Link to='/menu'>
        <Button 
          icon={List}
          className='mobileOnly'
        />
      </Link>
      {isAdmin ? <AdminBrand /> : <Brand />}
      <div className="desktopOnly">
        <Search>
        <Input 
          icon={MagnifyingGlass}
          placeholder='Pesquisar'
          type='text'
          onChange={e => search(e.target.value)}
        />
        </Search>
      </div>
      {isAdmin ? 
        <Button
          className='receiptButton desktopOnly'
          isRed
          onClick={handleNewDish}
        >
          <Plus />
          <span>Novo Prato</span>
        </Button>
        :
        <Button
        className='receiptButton desktopOnly'

          isRed
        >
          <span>Meu Pedido (0)</span>
        </Button>
      }
      {isAdmin ? <></> :
        <div className="popup mobileOnly">
          0
        </div>}
      {isAdmin ? <></> : 
        <Link to='/order'>
          <Button 
            className='mobileOnly'
            icon={Receipt}
          />
        </Link>}
      <button
        className='signOut desktopOnly'
        onClick={handleSignOut}
      >
        <SignOut size={32} />
      </button>
    </Container>
  )
}