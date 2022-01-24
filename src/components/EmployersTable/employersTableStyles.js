import { width } from '@mui/system';
import { createUseStyles } from 'react-jss';

const gridStyles = {
    width: '100%',
    display: 'grid',
    gridGap: '1.5rem',
    gridTemplateColumns: '5% 25% 25% 20% 5% 10%',
    fontSize: '20px',
    color: 'white',


}
const useStyle = createUseStyles({
    employersTable: {
        padding: {
            top: '15px',
            right: '30px',
            left: '30px',
            bottom: '15px'
        },

    },
    employersTableHeader: {
        ...gridStyles,
        borderBottom: '1px solid white',
    },
    employersTableRow: {
        ...gridStyles,
        padding: {
            top: '15px',
            bottom: '15px'
        },
        borderBottom: '1px solid white',
        

    }
});

export default useStyle;