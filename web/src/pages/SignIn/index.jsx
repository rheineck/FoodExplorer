import { Container, Form } from './styles'
import LogoImg from '../../assets/Logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Brand } from '../../components/Brand'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <div className="brand">
        <img src={LogoImg} alt="Logo FoodExplorer" />
        food explorer
      </div>
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
        <Link to="/register" >
          Criar uma Conta
        </Link>
      </Form>
    </Container>
  )
}