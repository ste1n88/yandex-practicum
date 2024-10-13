import React from 'react';
//import './app-header.css';
import styles from './app-header.module.css';

import { BurgerIcon,ListIcon,ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

//class AppHeader extends React.Component {
export default function AppHeader() {

    return (

      <div className={styles.container_header}>
        <div className={ `${styles.box} ${styles.element_header}` } >
          <div className={styles.padding} >
            <BurgerIcon type="primary" />
          </div>
          <p className={styles.title_main_default} > Конструктор</p>
        </div>

        <div className={ `${styles.box} ${styles.element_header}` } >
          <div className={styles.padding} >
            <ListIcon type="secondary" />
          </div>
          <p className={styles.title_header_inactive} >Лента заказов</p>
        </div>

          <Logo />

        <div className={ `${styles.box} ${styles.element_header}` } >
          <div className={styles.padding} >
            <ProfileIcon type="secondary" />
          </div>
          <p className={styles.title_header_inactive} >Личный кабинет</p>
        </div>
      </div>

    )
};
