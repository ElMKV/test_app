import useStyle from './headerStyles';

const Header = () => {
    const classes = useStyle(); 
    return (
        <header className={classes.header}>
            <h1>Список задач и исполнителей</h1>
        </header>
    );
};

export default Header;
   