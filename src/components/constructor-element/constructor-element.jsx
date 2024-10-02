import React, {useState, useEffect} from 'react';
import './constructor-element.css';
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
   <div className="box element" onClick={() => addIngredient({name}, {image}, {price}) }>

     <div className="row">
       <Counter count={1} size="default" extraClass="m-1" />
       <img src={image} />
     </div>

     <div className="element-price ">
       <p>{price}</p>
  
       <div className="element-row " >
         <CurrencyIcon type="Primary" />
       </div>

     </div >

     <div className="element-name" >
       <p>{name}</p>
     </div>

   </div> 
  )
}
