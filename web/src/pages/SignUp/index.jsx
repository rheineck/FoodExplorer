import { Container, Form } from "./styles";
import LogoImg from '../../assets/Logo.svg'

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
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
      />
      <span>E-mail</span>
      <Input 
        placeholder="exemplo@exemplo.com.br"
        type="text"
      />
      <span>Senha</span>
      <Input 
        placeholder="No mínimo 6 caracteres"
        type="password"
      />
      <Button 
        title="Criar Conta"
      />
      <ButtonText 
        title="Já tenho uma conta"
      />
    </Form>
  </Container>
  )
}