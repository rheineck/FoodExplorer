import { Container } from './styles'
import MenuIcon from '../../assets/icons/Menu.svg'
import Receipt from '../../assets/icons/Receipt.svg'

import { Brand } from '../Brand'

export function Header() {
  return(
    <Container>
      <button>
        <img src={MenuIcon} />
      </button>
      <Brand />
      <button>
        <div className="popup">
          0
        </div>
        <img src={Receipt} />
      </button>
      
    </Container>
  )
}