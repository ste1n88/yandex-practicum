import React from 'react';
import './app-header.css';
import { BurgerIcon,ListIcon,ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

class AppHeader extends React.Component {

  render () {
    return (

<div className="container-header">
        <div className="box element-header" >
          <div style={{ paddingRight: '10px'}} >
            <BurgerIcon type="primary" />
          </div>
          <p className="text text_type_main-default"> Конструктор</p>
        </div>

        <div className="box element-header" >
          <div style={{ paddingRight: '10px'}} >
            <ListIcon type="secondary" />
          </div>
          <p className="text text_type_main-default text_color_inactive" >Лента заказов</p>
        </div>

          <Logo />

        <div className="box element-header" >
          <div style={{ paddingRight: '10px'}} >
            <ProfileIcon type="secondary" />
          </div>
          <p className="text text_type_main-default text_color_inactive" >Личный кабинет</p>
        </div>
</div>



    )
  }
}

export default AppHeader;
