// import {InputLabel, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


const InputText = styled(TextField)
({

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',      
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#26c2ad', 
        },
    },
    'input':{
        textAlign: 'right',
        color:'#00474b',
        fontSize:'25px',
        padding:'5px 15px',
        fontWeight:'bold',
        fontFamily: 'Space Mono',
    }
    
})

export default InputText;