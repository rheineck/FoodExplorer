import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { DishesInfo } from '../pages/DishesInfo'
import { Menu } from '../pages/Menu'
import { EditDishes } from '../pages/EditDishes'
import { CreateDishes } from '../pages/CreateDishes'
import { History } from '../pages/History'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dishes/:id' element={<DishesInfo />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/edit/:id' element={<EditDishes />} />
            <Route path='/new' element={<CreateDishes />} />
            <Route path='/order' element={<History />} />
        </Routes>
    )
}