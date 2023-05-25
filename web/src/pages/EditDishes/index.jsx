import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'

import { CaretLeft, UploadSimple } from '@phosphor-icons/react'

import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Ingredient } from '../../components/Ingredient'

export function EditDishes() {
  const navigate = useNavigate()
  const params = useParams()

  const [category, setCategory] = useState("")
  const [pictureFile, setPictureFile] = useState(null)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [width, setWidth] = useState(13);
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/dishes/${params.id}`);
      const { category, picture, name, price, description, ingredients } = response.data
      setCategory(category);
      setPictureFile(picture);
      setName(name);
      setPrice(price);
      setDescription(description);
      setIngredients(ingredients.map(ingredient => ingredient.name));
    }

    fetchFood();
  }, []);

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

  function handleEditDish() {
    if((category === 'selecionar') || !name || !ingredients || !price || !description) {
      alert("Preencha todos os campos!");
      return;
    }

    api.put(`/dishes/${params.id}`, { category, name, price, description, ingredients });
    
    const formData = new FormData();
    formData.append("picture", pictureFile);

    api.patch(`/dishes/picture/${params.id}`, formData)
    .then(() => {
      alert("Prato alterado com sucesso!");
      navigate(-1);
    });
  }

  async function handleDelete() {
    const confirm = window.confirm('Você realmente quer excluir?');

    if(confirm) {
      await api.delete(`/dishes/${params.id}`);
      alert('Prato excluído com sucesso!');
      navigate(-1);
    }
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
            Editar prato
          </header>

          <section>
          <div id="picture-input">
              <h2>Imagem</h2>
              <label htmlFor="food-picture">
                <UploadSimple size={24}/>
                <input 
                  type="file" 
                  id="food-picture" 
                  onChange={handlePictureFile}
                />
                <span>Selecione a imagem</span>
              </label>
            </div>

            <div id="input">
              <h2>
                Nome
              </h2>
              <Input 
                className="dishName"
                placeholder="Ex.: Salada César"
                value={name}
                onChange={event => setName(event.target.value)}
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
                placeholder="R$ 00.00"
                value={price}
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
              onClick={handleDelete}
            >
              <span>Excluir Prato</span>
            </Button>
            <Button 
              isRed
              onClick={handleEditDish}
            >
              <span>Editar Prato</span>
            </Button>
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}