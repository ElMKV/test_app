import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    tableHeader: {
        width: '100%',
        padding: {
            top: '15px',
            right: '30px',
            left: '30px',
            bottom: '15px'
        },
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid white',
    } 
});

export default useStyle;
