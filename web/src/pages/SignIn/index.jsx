import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Brand } from '../../components/Brand'

export function SingIn() {
  return (
    <Container>
      <Brand />
      <Form>
        <span>E-mail</span>
        <Input 
          placeholder="E-mail"
        />
        <span>Senha</span>
        <Input 
          placeholder="Senha"
        />
        <Button 
          title="Entrar"
        />
        <ButtonText 
          title="Criar uma Conta"
        />
      </Form>
    </Container>
  )
}