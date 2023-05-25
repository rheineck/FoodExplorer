import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from '../../services/api'

import { Container, Form } from "./styles";
import LogoImg from '../../assets/Logo.svg'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar!")
        }
      })
  }

  return (
    <Container>
    <div className="brand">
      <img src={LogoImg} alt="Logo FoodExplorer" />
      food explorer
    </div>
    <Form >
      <h1 className="title">Crie sua conta</h1>
      <span>Seu nome</span>
      <Input 
        placeholder="Digite seu nome"
        type="text"
        onChange={e => setName(e.target.value)}
      />
      <span>E-mail</span>
      <Input 
        placeholder="exemplo@exemplo.com.br"
        type="text"
        onChange={e => setEmail(e.target.value)}
      />
      <span>Senha</span>
      <Input 
        placeholder="No mínimo 6 caracteres"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <Button 
        isRed
        onClick={handleSignUp}
      >
        <span>Criar Conta</span>
      </Button>
      <Link to="/">
        Já tenho uma conta
      </Link>
    </Form>
  </Container>
  )
}