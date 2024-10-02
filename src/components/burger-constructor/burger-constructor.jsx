import React, {useState, useEffect} from 'react';
import { ConstructorElement, Counter, CurrencyIcon, DragIcon, LockIcon, DeleteIcon, Button   } from '@ya.praktikum/react-developer-burger-ui-components';

const PRICE = 321;

//const INGREDIENTS = []

export default function BurgerConstructor ({ingredient, ingredients}) {

//    const [ingredient, setIngredient] = React.useState();
    const [state, setState] = React.useState({
        ingredient: [],
        loading: true
    })
    const [price, setPrice] = useState(0);

    useEffect( () => {
      console.log('Первичное Монтирование компонента со списком ингредиентов: ', ingredient)
    }, [] )

    useEffect( () => {
      setPrice((price) => price + 10)
      console.log(price)
    }, price )

    return (

  <div>

      <p className="text text_type_main-large">

      </p>

    <div className="constructor ">
      <p className="text text_type_main-large">
              
      </p>


      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
      />

      <div className="custom-scroll-bar" >

      { ingredients.length > 0 ? (
        ingredients.filter(item => item.type !== 'bun').map(item => ( <div key={item._id}  >
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
        />
      </div>
        ))
         ) : (
                <div> Выберите начинку </div>
                ) }

      </div>

      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
      />
    </div>

    <div className="element-price box-price constructor-order">
      <p className="text text_type_digits-medium">
        {price}
      </p>
      <CurrencyIcon type="primary" />
      <Button htmlType="button" type="primary" size="medium">
        Оформить заказ
      </Button>
    </div>

  </div>

    )
}
