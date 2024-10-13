import React, {useState, useEffect} from 'react';
import {Tab}  from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import './burger-ingredients.css';
//import {Ingredient} from '../../utils/types';
import ConstrElem from '../constructor-element/constructor-element';
//import BurgerConstructor from '../burger-constructor/burger-constructor';

export default function BurgerIngredients ({ingredients}) {
    const [current, setCurrent] = React.useState('bun');

  return (
    <div>
    
    
      <nav>
        <ul>
          <div className={styles.tab}>
            <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
              Булки
            </Tab>
      
            <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
              Соусы
            </Tab>
      
            <Tab value="main" active={current === 'main'} onClick={setCurrent}>
              Начинки
            </Tab>
      
          </div>
        </ul>
      </nav>
      <div className={ `${styles.flex_ingredients} ${styles.container}` }>
  
        { ingredients.length > 0 ? (
          ingredients.filter(item => item.type == 'bun').map(item => ( 
          <div key={item._id}  >
  
             <ConstrElem
               name={item.name}
               image={item.image}
               price={item.price}
             />
  
          </div>
          ))
          ) : (
               <div> Выберите начинку </div>
         ) }
  
        { ingredients.length > 0 ? (
          ingredients.filter(item => item.type === 'sauce').map(item => ( 
          <div key={item._id}  >
  
             <ConstrElem
               name={item.name}
               image={item.image}
               price={item.price}
             />
  
          </div>
        ))
         ) : (
                <div> Выберите начинку </div>
         ) }
    
        { ingredients.length > 0 ? (
          ingredients.filter(item => item.type === 'main').map(item => ( 
          <div key={item._id}>
  
             <ConstrElem
               name={item.name}
               image={item.image}
               price={item.price}
             />
  
          </div>
          ))
          ) : (
                <div> Выберите начинку </div>
         ) }  
        </div>

    </div>
  )
}

