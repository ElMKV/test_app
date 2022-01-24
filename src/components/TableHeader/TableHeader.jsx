import Navigation from "../Navigation/Navigation";
import useStyle from './tableHeaderStyles';
const TableHeader = ({ textButton, handleClick }) => {
    const classes = useStyle();

    return (
        <div className={classes.tableHeader}>
            <Navigation />
            <button style={{ backgroundColor: "white",width: "120px", height: "35px"}} type="button" onClick={handleClick}>
                {textButton}          
            </button>
        </div>
    );
};

export default TableHeader;
