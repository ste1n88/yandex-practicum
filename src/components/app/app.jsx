import { useState } from 'react'
import styles from './app.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { ingredients }  from '../../utils/data';
import BurgerConstructor from '../burger-constructor/burger-constructor';

// ---------------------- компоненты для тестов -----------------------//
//import Test from '../test_component/test_component';
//import DndAnimal from '../test_dnd/test_dnd';
//import DragAndDropContainer from '../test_react_dnd/test_dnd';


function App() {
  const [count, setCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0);

  return (

    <>

    <header>
      <AppHeader />
    </header>

    <main className={styles.main_content}>

      <h1 className={ ` ${styles.app_header} ${styles.title_main_large}` }>
        Собери бургер
      </h1>

      <nav className={styles.app_header}>
      </nav>
    
      <div className={styles.panel_burger}>
    
        <div  className={styles.container} >
          <BurgerIngredients ingredients={ingredients} />
        </div>
    
        <div   >
          <BurgerConstructor ingredients={ingredients} />
        </div>
    
      </div>
    



    </main>

    </>

  )
}

export default App
