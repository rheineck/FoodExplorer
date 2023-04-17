import { CaretLeft, UploadSimple } from '@phosphor-icons/react'

import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { InputFile } from '../../components/InputFile'
import { Select } from '../../components/Select'
import { Textarea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Ingredient } from '../../components/Ingredient'

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

          <label>
            Imagem do prato
          </label>
          <InputFile />

          <label htmlFor="dishName">
            Nome
          </label>
          <Input 
            placeholder="Salada César"
          />

        
          <label htmlFor="dishCategory">
            Categoria
          </label>
          <Select />


        
          <label htmlFor="ingredients">
            Ingredientes
            <div className="ingredients">
              <Ingredient 
                value='Pão Naan'
              />
              <Ingredient 
                isNew
                placeholder='Adicionar'
              />
            </div>
          </label>


        
          <label htmlFor="price">
            Preço
          </label>
          <Input 
            placeholder="R$ 40.00"
          />

        
        
          <label htmlFor="description">
            Descrição
          </label>
          <Textarea 
            placeholder="A Salada César é uma opção refrescante para o seu verão"
          />


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