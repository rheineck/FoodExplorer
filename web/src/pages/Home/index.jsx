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
      const res = await api.get(`/dishes?name=${search}&ingredient=${search}`)
      setDishes(res.data)
      // console.log(Array.isArray(res))
    }

    fetchDishes()
  },[search])

  return(
    <Container>
      <Header setSearch={setSearch}/>
      {
        dishes &&
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
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Section>
            <Section
              title="Bebidas"
            >
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Section>
          </Content>
        </main>
      }
      <Footer />
    </Container>
  )
}