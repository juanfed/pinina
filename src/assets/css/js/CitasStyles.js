import makeStyles from '@mui/styles/makeStyles';

const CitasStyles = makeStyles((theme) => ({

    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      iconos:{
        cursor: 'pointer'
      }, 
      inputMaterial:{
        width: '100%'
      }

}));

export default CitasStyles;