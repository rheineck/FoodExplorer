import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

import { Home } from './pages/Home'
import { DishesInfo } from './pages/DishesInfo'
import { EditDishes } from './pages/EditDishes'
import { CreateDishes } from './pages/CreateDishes'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
