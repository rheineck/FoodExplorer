import { Link } from 'react-router-dom'

import { Container } from './styles'
import { List, Receipt, SignOut, MagnifyingGlass } from '@phosphor-icons/react'

import { Brand } from '../Brand'
import { AdminBrand } from '../AdminBrand'
import { Input } from '../Input'
import { Button } from '../Button'


export function Header() {
  return(
    <Container>
      <Link to='/menu'>
        <Button 
          icon={List}
          className='mobileOnly'
        />
      </Link>
      <Brand 
        className="disabled"
      />
      {/* <AdminBrand 
        className="adminOnly"
      /> */}
      <div className="desktopOnly">
        <Input 
          icon={MagnifyingGlass}
          placeholder='Pesquisar'
          type='text'
        />
      </div>
      <Link 
        to='/favorites'
        className='desktopOnly'
      >
        Meu Favorito
      </Link>
      <Link 
        to='/order_history'
        className='desktopOnly'
      >
        Histórico de Pedidos
      </Link>
      <Link to='/order'>
        <Button
          className='receiptButton desktopOnly'
          title='Pedido'
          icon={Receipt}
        />
      </Link>
      {/* <Link to='/new'>
        <Button
          className='receiptButton desktopOnly'
          title='Novo Prato'
        />
      </Link> */}
      <div className="popup mobileOnly">
        0
      </div>
      <Button 
        className='mobileOnly'
        icon={Receipt}
      />
      <button
        className='desktopOnly'
      >
        <SignOut size={32} />
      </button>
    </Container>
  )
}