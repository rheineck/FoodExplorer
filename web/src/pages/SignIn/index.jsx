import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Brand } from '../../components/Brand'

export function SignIn() {
  return (
    <Container>
      <Brand />
      <Form>
        <h1 className='title'>Faça Login</h1>
        <span>E-mail</span>
        <Input 
          placeholder="E-mail"
          type="text"
        />
        <span>Senha</span>
        <Input 
          placeholder="Senha"
          type="password"
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