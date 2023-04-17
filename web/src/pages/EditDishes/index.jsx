import { CaretLeft } from '@phosphor-icons/react'

import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

export function EditDishes() {
  return (
    <Container>
      <Header />
      <main>
        <ButtonText
          className='backbutton'
          title="Voltar"
          icon={CaretLeft}
        />
        <Form>
          <header>
            Editar prato
          </header>

          <label htmlFor="dishImg">
            Imagem do prato
            <input 
              id="dishImg"
              type="file" 
            />
          </label>

          <label htmlFor="dishName">
            Nome
            <Input 
              placeholder="Salada César"
            />
          </label>

          <label htmlFor="dishCategory">
            Categoria
            <select>
              <option>Refeições</option>
              <option>Sobremesas</option>
              <option>Bebidas</option>
            </select>
          </label>

          <label htmlFor="ingredients">

          </label>

          <label htmlFor="price">
            Preço
            <Input 
              placeholder="R$ 40.00"
            />
          </label>

          <label htmlFor="description">
            Descrição
            <Textarea 
              placeholder="A Salada César é uma opção refrescante para o seu verão"
            />
          </label>
          <div className="buttons">
            <Button 
              title="Excluir Prato"
            />
            <Button 
              title="Salvar Alterações"
            />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}