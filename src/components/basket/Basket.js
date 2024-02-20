import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {basketShown, products} from "../../selectors";
import closeIcon from './../../assets/x.svg'
import { clearChosenProducts, setBasketShown} from "../../reducers/BasketSlice";
import MainButton from "../MainButton/MainButton";

const Basket = () => {
    const basketShow = useSelector(basketShown);
    const chosenProducts = useSelector(products);
    const dispatch = useDispatch();

    return (
        <div className={basketShow ? styles.basketContainerShown : styles.basketContainerClose}>
            <img
                className={styles.closeIcon}
                src={closeIcon}
                alt='закрыть'
                onClick={() => dispatch(setBasketShown())}/>
            <h3> Товары: </h3>
            {chosenProducts.map(p => {
                return (
                    <div className={styles.basketItem} key={Math.random()}>
                        <img className={styles.pic} src={p.pic} alt=''/>
                        <p>{p.title}</p>
                        <p>{p.price} руб.</p>
                    </div>
                )
            })}
            <h3>Итого: {chosenProducts.length > 0 ? chosenProducts.reduce((sum, current) => sum + current.price, 0) : 0} руб.</h3>
                <MainButton title={'Купить'} onClick={()=>{}} margin={'0 15px 0 0'}/>
                <MainButton title={'очистить корзину'} color={'#b4b4b6'} onClick={()=>dispatch(clearChosenProducts())}/>
        </div>
    );
};

export default Basket;
