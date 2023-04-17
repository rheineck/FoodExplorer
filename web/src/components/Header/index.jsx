import { Container } from './styles'
import { List, Receipt, SignOut, MagnifyingGlass } from '@phosphor-icons/react'

import { Brand } from '../Brand'
import { AdminBrand } from '../AdminBrand'
import { Input } from '../Input'
import { Button } from '../Button'


export function Header() {
  return(
    <Container>
      <Button 
        icon={List}
        className='mobileOnly'
      />
      {/* <Brand 
        className="disabled"
      /> */}
      <AdminBrand 
        className="adminOnly"
      />
      <div className="desktopOnly">
        <Input 
          icon={MagnifyingGlass}
          placeholder='Busque por prato ou ingredientes'
          type='text'
        />
      </div>
      <Button
        className='desktopOnly'
        title='Pedido'
        icon={Receipt}
      />
      <div className="popup mobileOnly">
        0
      </div>
      <Button 
        className='mobileOnly'
        icon={Receipt}
      />
      <Button 
        className='desktopOnly'
        icon={SignOut}
      />
    </Container>
  )
}