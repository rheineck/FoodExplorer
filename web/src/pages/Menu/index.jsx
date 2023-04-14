import { X, MagnifyingGlass } from '@phosphor-icons/react'

import { Container } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'

export function Menu() {
  return (
    <Container>
      <header>
        <X size={18}/>
        Menu
      </header>
      <main>
        <div className="props">
          <Input 
              icon={MagnifyingGlass}
              placeholder='Busque por prato ou ingredientes'
              type='text'
          />
          <ButtonText 
            title="Sair"
          />
        </div>
      </main>
      <Footer />
    </Container>
  )
}