import { Container, Form } from "./styles";

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
  return (
    <Container>
    <Brand />
    <Form>
      <span>Seu nome</span>
      <Input 
        placeholder="Digite seu nome"
      />
      <span>E-mail</span>
      <Input 
        placeholder="exemplo@exemplo.com.br"
      />
      <span>Senha</span>
      <Input 
        placeholder="No mínimo 6 caracteres"
      />
    </Form>
    <Button 
      title="Criar Conta"
    />
    <ButtonText 
      title="Já tenho uma conta"
    />
  </Container>
  )
}