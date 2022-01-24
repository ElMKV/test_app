import { NavLink } from 'react-router-dom';
import useStyle from './navigationStyles';

const Navigation = () => {
    const classes = useStyle();
    return (
        <nav>
            <NavLink exact to="/" className={classes.navigationLink}>
                Сотрудники
            </NavLink>
            <NavLink exact to="/tasks" className={classes.navigationLink}>
                Задачи
            </NavLink>
        </nav>
    );
};

export default Navigation;
