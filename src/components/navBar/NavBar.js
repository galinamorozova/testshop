import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module.scss';
import basketIcon from './../../assets/basket.svg'
import {useDispatch, useSelector} from "react-redux";
import {setBasketShown} from "../../reducers/BasketSlice";
import {products} from "./../../selectors/index";
import {setStartPosition} from "../../reducers/productsSlice";

const NavBar = () => {
    const dispatch = useDispatch();
    const chosenProducts = useSelector(products);

    return (
        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                <Link
                    to={'/food'}
                    className={styles.link}
                    onClick={() => dispatch(setStartPosition(0))}>
                    Еда
                </Link>
                <Link
                    to={'/clothes'}
                    className={styles.link}
                    onClick={() => dispatch(setStartPosition(0))}>
                    Одежда
                </Link>
                <Link
                    to={'/electronics'}
                    className={styles.link}
                    onClick={() => dispatch(setStartPosition(0))}>
                    Электроника
                </Link>
                <div className={styles.basketIcon} onClick={() => dispatch(setBasketShown())}>
                    <img src={basketIcon} alt='корзина'/>
                    {
                        chosenProducts.length > 0 &&
                        <div className={styles.alert}>{chosenProducts.length}</div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
