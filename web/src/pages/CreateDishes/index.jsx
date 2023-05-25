import { useState } from 'react'
import { api } from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'

import { CaretLeft, UploadSimple } from '@phosphor-icons/react'

import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Ingredient } from '../../components/Ingredient'

export function CreateDishes() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [pictureFile, setPictureFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [width, setWidth] = useState(13);
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  /* ingredients */
  function handleChange(event) {
    setWidth(event.target.value.length + 0.4);
    setNewIngredient(event.target.value)
  }

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
    setWidth(10);
  }

  function handleRemove(removedIngredient) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient != removedIngredient))
  }

  /* picture */
  function handlePictureFile() {
    const file = e.target.files[0];
    setPictureFile(file);
  }

  /* add food */
  function handleAddDish() {
    if((category === 'select') || !name || !ingredients || !price || !description) {
      alert("Preencha todos os campos!");
      return;
    }

    const formData = new FormData();
    formData.append("category", category);
    formData.append("picture", pictureFile);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    
    ingredients.map(ingredient => (
        formData.append("ingredients", ingredient)
    ))

    api.post("/dishes", formData)
    .then(() => {
      alert("Prato criado com sucesso!");
      navigate(-1);
    })
  }

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
            <div id="picture-input">
              <h2>Imagem</h2>
              <label htmlFor="food-picture">
                <UploadSimple />
                <input 
                  type="file" 
                  id="picture" 
                  onChange={handlePictureFile}
                />
                <span>Selecione a Imagem</span>
              </label>
            </div>

            <div id="input">
              <h2>
                Nome
              </h2>
              <Input 
                className="dishName"
                type="text"
                placeholder="Ex: Salada César"
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div id="input">
              <h2>
                Categoria
              </h2>
              <select 
                  id="category" 
                  name="category"
                  className='dishCategory'
                  onChange={ event => setCategory(event.target.value)}
              >
                <option value="select">Selecionar</option>
                <option value="main_course">Refeições</option>
                <option value="dessert">Sobremesas</option>
                <option value="drink">Bebidas</option>
              </select>
            </div>
          </section>

          <section>
            <div id="input">
              <h2>
                Ingredientes
              </h2>
              <div className="ingredients">
                {
                  ingredients.map((ingredient, index) => (
                    <Ingredient 
                      key={String(index)}
                      value={ingredient}
                      width={ingredient.length + 0.4}
                      onClick={() => handleRemove(ingredient)}
                    />
                  ))
                }
                <Ingredient 
                  isNew
                  placeholder='Adicionar'
                  value={newIngredient}
                  onChange={handleChange}
                  onClick={handleAddIngredient}
                  width={width}
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
                onChange={event => setPrice(event.target.value)}
              />
            </div>
          </section>
        
          <h2>
            Descrição
          </h2>
          <textarea
            name="" 
            id="" 
            cols="30" 
            rows="10" 
            placeholder="Fale brevemente sobre o prato, sua composição e ingredientes" 
            onChange={event => setDescription(event.target.value)}
          />

          <div className="buttons">
            <Button 
              isRed
              onClick={handleAddDish}
            >
              <span>Adicionar</span>
            </Button>
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}