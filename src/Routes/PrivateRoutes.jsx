import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Department from '../Pages/Department'
import AddDepartment from '../Pages/AddDepartment'
import Assets from '../Pages/Assets'
import Service from '../Pages/Service'
import Warrenty from '../Pages/Warrenty'
import AddAssets from '../Pages/AddAssets'
import AssetDetail from '../Pages/AssetDetail'
import AddService from '../Pages/AddService'

function PrivateRoutes() {

  let token=localStorage.getItem("token")
  return (
    <div>

<Routes>
  

<Route path='/' element={token&&<Dashboard/>}/>
<Route path='/dashboard' element={token&&<Dashboard/>}/>
<Route path='/department' element={token&&<Department/>}/>
<Route path='/adddepartment' element={token&&<AddDepartment/>}/>
<Route path='/assets' element={<Assets/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='/warrenty' element={<Warrenty/>}/>
<Route path='/addassets' element={<AddAssets/>}/>
<Route path='/assetsdetail/:_id' element={<AssetDetail/>}/>
<Route path='/addservice/:_id' element={<AddService/>}/>

</Routes>

    </div>
  )
}

export default PrivateRoutes