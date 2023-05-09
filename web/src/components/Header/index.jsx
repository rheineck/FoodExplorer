import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Container } from './styles'
import { List, Receipt, SignOut, MagnifyingGlass } from '@phosphor-icons/react'

import { Brand } from '../Brand'
import { AdminBrand } from '../AdminBrand'
import { Input } from '../Input'
import { Button } from '../Button'


export function Header({ setSearch }) {
  const { signOut, user } = useAuth()
  const isAdmin = user.isAdmin;

  const navigate = useNavigate()

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
        <Input 
          icon={MagnifyingGlass}
          placeholder='Pesquisar'
          type='text'
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {!isAdmin ? 
        <Link 
          to='/favorites'
          className='desktopOnly'
        > 
          Meu Favorito
        </Link> : <></>}
      {!isAdmin ? 
        <Link 
          to='/order_history'
          className='desktopOnly'
        >
          Histórico de Pedidos
        </Link> :
        <Link 
          to='/new'
          className='desktopOnly'
        >
          Novo Prato
        </Link>
      }
      {!isAdmin ? 
        <Link to='/order'>
          <Button
            className='receiptButton desktopOnly'
            title='Pedido'
            icon={Receipt}
          />
        </Link> :
        <Link to='/order_history'>
        <Button
          className='receiptButton desktopOnly'
          title='Pedido'
          icon={Receipt}
        />
        </Link>
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
        className='desktopOnly'
        onClick={signOut}
      >
        <SignOut size={32} />
      </button>
    </Container>
  )
}