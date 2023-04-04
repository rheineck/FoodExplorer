import { Container } from './styles'
import { List, Receipt, SignOut, MagnifyingGlass } from '@phosphor-icons/react'

import { Brand } from '../Brand'
import { Input } from '../Input'
import { Button } from '../Button'


export function Header() {
  return(
    <Container>
      <Button 
        icon={List}
        className='mobileOnly'
      />
      <Brand />
      <Input 
        className='desktopOnly'
        icon={MagnifyingGlass}
        placeholder='Busque por prato ou ingredientes'
        type='text'
      />
      
      <Button
        className='desktopOnly'
        title='Pedido (0)'
        icon={Receipt}
      />

      <div className="popup mobileOnly">
        0
        <Button 
          icon={Receipt}
        />
      </div>
      {/* <button>
        <div className="popup mobileOnly">
          0
        </div>
        <img src={Receipt} />
        <span className='desktopOnly'>Pedido (0)</span>
      </button> */}

      <Button 
        className='desktopOnly'
        icon={SignOut}
      />
      
    </Container>
  )
}