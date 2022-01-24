import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    navigation: {
        
    },
    navigationLink: {
        marginRight: '10px',
        '&.active': {
            color: '#FAF2A1'
        },
    },
});

export default useStyle;
