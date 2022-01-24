import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({

    modal: {
        position: 'fixed',
        top: '0',
        right: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'none',
        zIndex: '999',
        '&.active': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },

    },
    modalForm: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '15px',
        width: '100%',
        maxWidth: '500px',
        '& form': {
            background: 'none',
            display: 'flex',
            flexDirection: 'column',
            '& input': {
                margin: '10px 0',
                padding: '5px 10px',
                backgroundColor: 'white',
            },
            '& select': {
                margin: '10px 0',
                padding: '5px 10px',
                backgroundColor: 'white',
            },
            '& button': {
                margin: '10px 0',
                padding: '5px 10px',
                backgroundColor: 'purple',
                color: 'white',
            }
            

        }
        

    }
});

export default useStyle;
