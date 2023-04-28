import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { DishesInfo } from '../pages/DishesInfo'
import { Menu } from '../pages/Menu'
import { EditDishes } from '../pages/EditDishes'
import { CreateDishes } from '../pages/CreateDishes'
import { History } from '../pages/History'
import { Favorites } from '../pages/Favorites'
import { Order } from '../pages/Order'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dishes/:id' element={<DishesInfo />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/edit/:id' element={<EditDishes />} />
            <Route path='/new' element={<CreateDishes />} />
            <Route path='/order_history' element={<History />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/order' element={<Order />}/>
        </Routes>
    )
}