import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {foodArray, clothesArray, gadgetsArray} from "../../reducers/productsSlice";
import {clothesList, foodList, gadgetsList} from "../../selectors";
import ItemCard from "../itemCard/ItemCard";
import {foodPages} from "../../sagas/db/foodDB";
import Pagination from "../pagination/Pagination";
import arrow from './../../assets/arrowDown.svg';
import {clothesPages} from "../../sagas/db/clothesDB";
import {gadgetsPages} from "../../sagas/db/gadgetsDB";

const sortData = (arr, sortName, sortApprove) => {
    if (arr && arr.length > 0) {
        let res = [...arr];
        if (sortApprove) {
            sortName ?
                res = res.sort((a, b) => a.title > b.title ? 1 : -1)
                :
                res = res.sort((a, b) => a.title < b.title ? 1 : -1)
        }
        return res;
    }
}

const MainGrid = ({type}) => {
    const dispatch = useDispatch();
    const [sort, setSort] = useState(false);
    const [title, setTitle] = useState(false);

    useEffect(() => {
        if (type === 'food') {
            dispatch(foodArray());
        } else if (type === 'clothes') {
            dispatch(clothesArray());
        } else {
            dispatch(gadgetsArray());
        }
    }, [])

    const food = useSelector(foodList);
    const clothes = useSelector(clothesList);
    const gadgets = useSelector(gadgetsList);

    const products = () => {
        let res = {
            product: [],
            pages: [],
            reducer: ()=> {}
        };
        if (type === 'food') {
            res.product = food;
            res.pages = foodPages;
            res.reducer = foodArray();
        } else if (type === 'clothes') {
            res.product = clothes;
            res.pages = clothesPages;
            res.reducer = clothesArray();
        } else {
            res.product = gadgets;
            res.pages = gadgetsPages;
            res.reducer = gadgetsArray();
        }
        return res;
    }


    return (
        <>
            <div className={styles.sort} onClick={() => {
                setSort(true);
                setTitle(!title);
            }}>
                <p>Сортировать по наименованию</p>
                <img src={arrow} className={!title ? styles.arrowUp : ''} alt=''/>
            </div>
            <div className={styles.gridContainer}>
                {
                    (products().product.data && products().product.data.length > 0) &&
                    sortData(products().product.data, title, sort).map(f => {
                        return (
                            <div key={Math.random()} className={styles.itemWrapper}>
                                <ItemCard data={f}/>
                            </div>
                        )
                    })
                }
            </div>
            <Pagination pages={products().pages} reducer={products().reducer}/>
        </>
    );
};

export default MainGrid;
