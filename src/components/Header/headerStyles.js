import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    header: {
        width: '100%',
        padding: {
            top: '15px',
            right: '30px',
            left: '30px',
            bottom: '15px'
        },
        color: 'white',
        borderBottom: '1px solid white',
    
    }
});

export default useStyle;
