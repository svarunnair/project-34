import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../Pages/Auth/Signin'
import Signup from '../Pages/Auth/Signup'

function PublicRoutes() {
  return (
    <div>
<Routes>


<Route path='/' element={<Signup/>}/>
<Route path='/signin' element={<Signin/>}/>
<Route path='/signup' element={<Signup/>}/>

</Routes>


    </div>
  )
}

export default PublicRoutes