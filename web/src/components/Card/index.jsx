import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { CaretRight, Minus, Plus, HeartStraight, PencilSimple } from '@phosphor-icons/react'
import { Container } from './styles'

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

export function Card({ data }) {
  const { user } = useAuth()

  const [quantity, setQuantity] = useState(0)
  const [favorite, setFavorite] = useState(false)

  const navigate = useNavigate()

  const dishPicture = `${api.defaults.baseURL}/files/${data.picture}`
  console.log(dishPicture)

  function handleDetails() {
    navigate(`/dishes/${data.id}`)
  }

  function handleEditDish() {
    navigate(`/edit/${data.id}`)
  }

  function handleFavorites() {
    if(!favorite) {
      setFavorite(true)
    } else {
      setFavorite(false)
    }
  }

  function handleSum() {
    setQuantity(quantity + 1)
  }

  function handleSub() {
    if(quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return(
    <Container>
      {user.isAdmin ?
        <ButtonText 
          className='favorite'
          icon={PencilSimple}
          onClick={handleEditDish}
        />
        : 
        <ButtonText 
          className='favorite'
          icon={HeartStraight}
          onClick={handleFavorites}
        />
      }
      {
      <>
        <img src={dishPicture} alt={data.name} />
        <div className="title">
          <ButtonText
            title={data.name}
            onClick={handleDetails}
          />
          <CaretRight size={14}/>
        </div>
        <div className="desktopOnly">
          {data.description}
        </div>
        <h1>R$ {data.price}</h1>
      </>}
      {!user.isAdmin ? 
      <div className="desktopButtons">
        <div className="includeDishes">
          <ButtonText
            icon={Minus}
            onClick={handleSub}
          />
          <span>{quantity}</span>
          <ButtonText 
            icon={Plus}
            onClick={handleSum}
          />
        </div>
        <Button 
          isRed
          className='includeButton'
        >
          <span>Incluir</span>
        </Button>
      </div> : <></>}
    
    </Container>
  )
}