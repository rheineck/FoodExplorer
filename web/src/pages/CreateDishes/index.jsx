import { Link } from 'react-router-dom'

import { CaretLeft } from '@phosphor-icons/react'

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

export function CreateDishes() {
  return (
    <Container>
      <Header />
      <main>
        <Link to='/'>
          <ButtonText
            className='backbutton'
            title="Voltar"
            icon={CaretLeft}
          />
        </Link>
        <Form>
          <header>
            Adicionar prato
          </header>

          <section>
            <div id="input">
              <h2>
                Imagem do prato
              </h2>
              <InputFile />
            </div>

            <div id="input">
              <h2>
                Nome
              </h2>
              <Input 
                className="dishName"
                placeholder="Ex: Salada César"
              />
            </div>

            <div id="input">
              <h2>
                Categoria
              </h2>
              <Select
                className="dishCategory"
              />
            </div>
          </section>

          <section>
            <div id="input">
              <h2>
                Ingredientes
              </h2>
              <div className="ingredients">
                <Ingredient 
                  value='Pão Naan'
                />
                <Ingredient 
                  isNew
                  placeholder='Adicionar'
                />
              </div>
            </div>
          
            <div id="input">
              <h2>
                Preço
              </h2>
              <Input
                className="dishPrice" 
                placeholder="Ex: R$ 40.00"
              />
            </div>
          </section>
        
          <h2>
            Descrição
          </h2>
          <Textarea 
            placeholder="Fale brevemente sobre o prato, sua composição e ingredientes"
          />

          <div className="buttons">
            <Button 
              title="Salvar"
            />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}