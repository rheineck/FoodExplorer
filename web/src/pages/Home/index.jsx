import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Info } from '../../components/Info'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'

export function Home () {
  
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/dishes/${id}`)
  }

  useEffect(() => {
    async function fetchDishes() {
      const res = await api.get(`/dishes?name=${search}`)
      setDishes(res.data)
    }

    fetchDishes()
  },[search])
  
  return(
    <Container>
      <Header setSearch={setSearch}/>
      <main>
        <Content>
          <Info />
          <Section
            title="Refeições"
          >
          {
            dishes.filter(dishes => dishes.category == "refeicoes").map(dish=> (
              <Card 
                key={String(dish.id)} 
                data={dish}
                onClick={() => handleDetails(dish.id)}
              />
            ))
          }
          </Section>
          <Section
            title="Sobremesas"
          >
            {
              dishes.filter(dishes => dishes.category == "sobremesa").map(dish => (
                <Card 
                  key={String(dish.id)}
                  data={dish}
                  onClick={() => handleDetails(dish.id)}
                />
              ))
            }
          </Section>
          <Section
            title="Bebidas"
          >
            {
              dishes.filter(dishes => dishes.category == "bebida").map(dish => (
                <Card 
                  key={String(dish.id)}
                  data={dish}
                  onClick={() => handleDetails(dish.id)}
                />
              ))
            }
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}