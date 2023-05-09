import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'
import { CaretLeft, Minus, Plus, Receipt } from '@phosphor-icons/react'
import Ravanello from '../../assets/images/Ravanello.png'

import { useAuth } from '../../hooks/auth'
import { Container } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Tags } from '../../components/Tags'
import { Footer } from '../../components/Footer'

export function DishesInfo () {
  const [dishes, setDishes] = useState([])
  const params = useParams()

  const { user } = useAuth()
  const isAdmin = user.isAdmin

  useEffect(() => {
    async function fetchDetails () {
      const res = await api.get(`/dishes/${params.id}`)
      setDishes(res.data)
    }

    fetchDetails()
  },[])

  return (
    <Container>
      <Header />
      <Link to='/'>
        <ButtonText
          className='backbutton'
          title="Voltar"
          icon={CaretLeft}
        />
      </Link>
      { dishes &&
        <main>
          <img 
            src={Ravanello} 
            className='dishImg'
          />
          <div className="title">
            <h1>{dishes.name}</h1>
            <span>{dishes.description}</span>
            <div className="ingredients">
              {
                dishes.ingredients && dishes.ingredients.map(ingredient => (
                <Tags
                  key={ingredient.id}
                  title={ingredient.name}
                />))
              }
            </div>
            {!isAdmin ? 
            <div className="buttons">
              <div className="includeDishes">
                <ButtonText
                  icon={Minus}
                />
                01
                <ButtonText 
                  icon={Plus}
                />
              </div>
              <Button 
                className='includeButton'
                title={`Pedir R$ ${dishes.price}`}
                icon={Receipt}
              />
            </div> :
            <Link to='/edit/:id'>
              <Button 
                className="adminOnly editDishes"
                title="Editar Prato"
              />
            </Link>}
          </div>
        </main>
      }
      <Footer />
    </Container>
  )
}