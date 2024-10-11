import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { ingredients }  from './utils/data';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
//import Test from './components/test_component/test_component';


function App() {
  const [count, setCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0);

  return (

<div className="App">
  <AppHeader />

  <nav className=" app-header ">
    <p className="text box-header text_type_main-large"> 
      Собери бургер 
    </p>
    <p>
    </p>
  </nav>

  <div className=" panel-burger ">

    <div className="app-container  " >
      <BurgerIngredients ingredients={ingredients} />
    </div>

    <div  className="container " >
      <BurgerConstructor ingredients={ingredients} />
    </div>

  </div>

  <div>
    <Test />
  </div>

</div>


  )
}

export default App
