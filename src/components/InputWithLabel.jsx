import InputLabel from '@mui/material/InputLabel'; 
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@material-ui/core";
import Grid from '@mui/material/Grid';


const LabelStyled = styled(InputLabel)({
    color: '#757575',
    fontWeight:'bold',
    fontFamily: 'Space Mono',
})

const InputBackground = styled(Grid)({
    background:'#e0f2f1',
    borderRadius:2
})

const InputText = styled(TextField)
({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#f3f8fb', 
            
        },
        '&:hover fieldset': {
            borderColor: '#f3f8fb',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#26c2ad', 
        },
    },
    '& .MuiTypography-colorTextSecondary':{
        color:'#a1bbbe',
        fontSize:'1.4rem',
        fontFamily:'Space Mono',
    },

    'input':{
        textAlign: 'right',
        color:'#00474b',
        fontSize:'25px',
        padding:'5px 15px',
        fontWeight:'bold',
        fontFamily: 'Space Mono',
        width:'100%'
    },
    width:'100%'
})

const InputWithLabel = ({name, adornment, onChange, id}) => {
    

    
    return ( 
        <>
            <LabelStyled>{name}</LabelStyled>
            <InputBackground >
                <InputText 
                    id={id}
                    placeholder={"0"} 
                    onChange={onChange}
                    // sx={{width:'100%'}}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">{adornment}</InputAdornment>
                    }}   
                ></InputText>
            </InputBackground >
        </>
     );
}
 
export default InputWithLabel;

