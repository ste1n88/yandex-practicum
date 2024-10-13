import React, {useState, useEffect} from 'react';
import styles from './constructor-element.module.css';
import {ConstructorElement, Counter, CurrencyIcon }  from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructor from '../burger-constructor/burger-constructor';


export default function ConstrElem ({name, image, price }) {

  const [ingredients, setIngredients] = React.useState({name: '', image: '', price: ''});

  const addIngredient = (...new_ingred) => {
      setIngredients({...ingredients, name: {name}, image: {image}, price: {price} });
      console.log("ingredients: ", {ingredients});
  }

  useEffect ( () => {
    // Код выполнится только при первичном монтировании
    console.log(`Первичное монтирование компонента: ${name}`)
  }, [])

  return (
   <article className={styles.article_position}>
   <div className={ `${styles.box}  ${styles.element}` } onClick={() => addIngredient({name}, {image}, {price}) }>

     <div className={styles.row}>
       <Counter count={1} size="default" extraClass="m-1" />
       <img src={image} />
     </div>

     <div className={styles.element_price}>
       <p>{price}</p>
  
       <div className={styles.element_row} >
         <CurrencyIcon type="Primary" />
       </div>

     </div >

     <div className={styles.element_name} >
       <p>{name}</p>
     </div>

   </div> 
   </article>
  )
}
