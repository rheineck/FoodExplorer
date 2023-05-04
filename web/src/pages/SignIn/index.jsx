import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Form } from './styles'
import LogoImg from '../../assets/Logo.svg'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

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
          onChange={e => setEmail(e.target.value)}
        />
        <span>Senha</span>
        <Input 
          placeholder="Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button 
          title="Entrar"
          onClick={handleSignIn}
        />
        <Link to="/register" >
          Criar uma Conta
        </Link>
      </Form>
    </Container>
  )
}