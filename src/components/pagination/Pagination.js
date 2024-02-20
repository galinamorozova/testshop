import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setStartPosition} from "../../reducers/productsSlice";
import {pagesStartPosition} from "../../selectors";

const Pagination = ({pages, reducer}) => {
    const dispatch = useDispatch();
    const startPosition = useSelector(pagesStartPosition);

    return (
        <div className={styles.pagination}>
            {
                pages.map(p => {
                    return (
                        <div key={p.number}
                            style={{color: (startPosition === p.startFrom) ? '#4e4e5b' : '#7CACC7FF' }}
                             onClick={() => {
                                 dispatch(setStartPosition(p.startFrom));
                                 dispatch(reducer);
                             }}>
                            {p.number}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Pagination;
