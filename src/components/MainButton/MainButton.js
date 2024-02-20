import styles from './styles.module.scss'

const MainButton = ({title, onClick, color, margin}) => {

    return (
        <button
            className={styles.button}
            onClick={onClick}
            style={{backgroundColor: color, margin: margin}}
        >{title}</button>
    );
};

export default MainButton;
