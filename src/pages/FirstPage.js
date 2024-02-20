import {Link} from "react-router-dom";
import styles from './styles.module.scss';
import React from "react";
import fruit from './../assets/fruits.jpg';
import gadget from './../assets/gadget.webp';
import clothes from './../assets/clothes.jpg';
import {setStartPosition} from "../reducers/productsSlice";
import {useDispatch} from "react-redux";

const FirstPage = () => {
    const dispatch = useDispatch();

    return (
        <div className={styles.linkContainer}>
            <Link to={'/food'} className={styles.linkImgContainer} onClick={() => dispatch(setStartPosition(0))}>
                <p className={styles.link}>Продукты</p>
                <img src={fruit} alt='' className={styles.img}/>
                <div className={styles.overlay}></div>
            </Link>
            <Link to={'/clothes'} className={styles.linkImgContainer} onClick={() => dispatch(setStartPosition(0))}>
                <p className={styles.link}>Одежда</p>
                <img src={clothes} alt='' className={styles.img}/>
                <div className={styles.overlay}></div>
            </Link>
            <Link to={'/electronics'} className={styles.linkImgContainer} onClick={() => dispatch(setStartPosition(0))}>
                <p className={styles.link}>Электроника</p>
                <img src={gadget} alt='' className={styles.img}/>
                <div className={styles.overlay}></div>
            </Link>


        </div>
    );
};

export default FirstPage;