import styles from './styles.module.scss'
import {useDispatch} from "react-redux";
import {chooseProducts} from "../../reducers/BasketSlice";
import MainButton from "../MainButton/MainButton";

const ItemCard = ({data}) => {
    const dispatch = useDispatch();


    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={data.pic} alt=''/>
            </div>
            <div>
                <span className={styles.title}>{data.title}</span>
            </div>
            <div className={styles.priceSection}>
                <span>{data.price} руб.</span>
                <MainButton title={'Купить'} onClick={() => dispatch(chooseProducts(data))}/>
            </div>
        </div>
    );
};

export default ItemCard;
