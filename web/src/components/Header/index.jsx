import { Container } from './styles'
import MenuIcon from '../../assets/icons/Menu.svg'
import Receipt from '../../assets/icons/Receipt.svg'
import Search from '../../assets/icons/Search.svg'

import { Brand } from '../Brand'
import { Input } from '../Input'

export function Header() {
  return(
    <Container>
      <button className='mobileOnly'>
        <img src={MenuIcon} />
      </button>
      <Brand />
      <Input 
        placeholder='Busque por prato ou ingredientes'
        type='text'
      />
      <button>
        <div className="popup mobileOnly">
          0
        </div>
        <img src={Receipt} />
        <span>Pedido (0)</span>
      </button>
      
    </Container>
  )
}