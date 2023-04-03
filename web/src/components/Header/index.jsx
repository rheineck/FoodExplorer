import { Container } from './styles'
import MenuIcon from '../../assets/icons/Menu.svg'
import Receipt from '../../assets/icons/Receipt.svg'

import { Brand } from '../Brand'

export function Header() {
  return(
    <Container>
      <button className='mobileOnly'>
        <img src={MenuIcon} />
      </button>
      <Brand />
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