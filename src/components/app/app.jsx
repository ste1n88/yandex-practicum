import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import styles from './app.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { ingredients }  from '../../utils/data';
import BurgerConstructor from '../burger-constructor/burger-constructor';

// ---------------------- компоненты для тестов -----------------------//
//import Test from '../test_component/test_component';
import DndAnimal from '../test_dnd/test_dnd';


function App() {
  const [count, setCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0);

  return (

    <div className={styles.App}>
      <AppHeader />

      <nav className={styles.app_header}>
        <p className={ `${styles.text} ${styles.app_header} ${styles.text_type_main_large}` }> 
          Собери бургер 
        </p>
        <p>
        </p>
      </nav>
    
      <div className={styles.panel_burger}>
    
        <div className={styles.app_container} >
          <BurgerIngredients ingredients={ingredients} />
        </div>
    
        <div  className={styles.container} >
          <BurgerConstructor ingredients={ingredients} />
        </div>
    
      </div>
    

    <div className={styles.container} >
      <p> Test Drag-n-Drop  </p>
      <DndAnimal />
    </div>


    </div>

  )
}

export default App
