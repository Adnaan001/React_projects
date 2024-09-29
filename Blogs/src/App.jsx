import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect,useContext } from 'react'
import { App_Context } from '../context/AppContext'
import { Route, Routes, useLocation } from 'react-router'
import { Blog_page } from '../Pages/Blog_page'
import { Category_page } from '../Pages/Category_page'
import { Tag_page } from '../Pages/Tag_page'
import { useSearchParams } from 'react-router-dom'
import { Home } from '../Pages/Home'

function App() {

  const {fetchblogs}=useContext(App_Context);
  let [searchparam,setSearchparam]=useSearchParams();
  let location=useLocation();

  useEffect(
    ()=>{
      const page=searchparam.get('page');
      // console.log('inside useeffect');
      if(location.pathname.includes('tag'))
      {
        // console.log('useeffect is caled for tag')
        let tag=location.pathname.split('/').at(-1).replaceAll('-',' ');
        fetchblogs(Number(page),tag);
      }
      else if(location.pathname.includes('category'))
      {
        let cat=location.pathname.split('/').at(-1).replaceAll('-',' ');
        fetchblogs(Number(page),undefined,cat);
      }
      else
      {
        fetchblogs(Number(page))
      }
  },[location.pathname, location.search]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blogid/:id' element={<Blog_page/>}/>
        <Route path='/tag/:tag' element={<Tag_page/>}/>
        <Route path='/category/:cat' element={<Category_page/>}/>
      </Routes>
    </div>
  )
}

export default App
