import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    container:{
        marginTop: '20px'

    },

    Title:{
        color: '#3A3083',
        fontSize: 26,
       textAlign: 'center',
       marginBottom: 20,
    },

    subtitle: {
        color: '#3A3083',
        fontSize: 16,

    },

    select:{
       borderColor: '3A3083',
        height: 30,
    },

    textfiel:{
        color: '#3A3083',
        fontSize: 14,
        width: '100%',
        height: 30,
    },

    checkbox:{
        color: '#7AB637 !important',
        
    },
    secTitle:{
        color: '#3A3083',
        fontSize: 22,
        fontWeight: 'bold'

    },

    button:{
        color: 'white',
        backgroundColor: '#3A3083',
        fontSize: 14,
        borderRadius: 15,
        padding: '10px 20px 10px 20px'
    },

    buttonUser:{
        marginLeft: 10,
        color: 'white',
        backgroundColor: '#3A3083',
        fontSize: 14,
        borderRadius: 15,
        padding: '5px 0px 5px 0px'

    },

    icon:{
        fill: '#3A3083',
    },

    buttonBottom:{
        marginTop: '5em',
        display: 'flex',
        justifyContent: 'flex-end',
        
    },

    buttonBottomUser:{
        marginTop: '3em',
        display: 'flex',
        justifyContent: 'flex-end',
        
    },

    dataGrid:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }



}))


export default useStyles;