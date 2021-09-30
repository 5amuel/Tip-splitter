import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel'; 
import TextField from '@mui/material/TextField';

const Boton = styled(Button)`
    background-color:#00474b;
    color: White;
    font-size: 23px;
    font-weight: Bold;
    font-family: space mono;
    padding: 5px;
    border-radius: 6px;
    width: 150px;

    :focus{
        background-color: #26c2ad;
        color: #00474b;
    };
    :hover{
        background-color: #26c2ad;
    };
    &.active{
        background-color: #26c2ad;
        color: #00474b;
    }
  `
const LabelStyled = styled(InputLabel)({
    color: '#757575',
    fontWeight:'bold',
    fontFamily: 'Space Mono',
})

const InputPercetField = styled(TextField)
({
    '& .MuiOutlinedInput-root': {
        // '& fieldset': {
        //     borderColor: 'black', 
        // },
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
        padding:'7px 15px',
        fontWeight:'bold',
        fontFamily: 'Space Mono',
        width:'120px',
        
    },
})
const InputBackground = styled(Grid)({
    background:'#e0f2f1',
    
})

const Botones = ({onClick}) => {
    
return ( 
    <Grid container item xs={12}  sx={{display:'flex', justifyContent:'center', my:1}} > 
        <Grid item xs={12}  sx={{display:'flex', justifyContent:'left', mx:1}} >  
            <LabelStyled >Select Tip</LabelStyled>
        </ Grid> 
        <Grid item xs={6}  sx={{display:'flex', justifyContent:'center', my:1}} >  
            <Boton name='btn' onClick={onClick} className="" value='5' >5%</Boton>
        </Grid>
        <Grid item xs={6}  sx={{display:'flex', justifyContent:'center', my:1}} >  
            <Boton name='btn' onClick={onClick} className="" value='10' >10%</Boton>
        </Grid>
        <Grid item xs={6}  sx={{display:'flex', justifyContent:'center', my:1}} >  
            <Boton name='btn' onClick={onClick} className="" value='15'>15%</Boton>
        </Grid>
        <Grid item xs={6}  sx={{display:'flex', justifyContent:'center', my:1}} >  
            <Boton name='btn' onClick={onClick} className="" value='25'>25%</Boton>
        </Grid>
        <Grid item xs={6}  sx={{display:'flex', justifyContent:'center', my:1}} >  
            <Boton name='btn' onClick={onClick} className="" value='50'>50%</Boton>
        </Grid>
        <Grid item xs={6}  sx={{display:'flex', justifyContent:'center', my:1}} >  
            <InputBackground >
                <InputPercetField id='txt' name='txt' onChange={onClick} placeholder={"Custom"} ></InputPercetField>
            </InputBackground >
        </ Grid>
    </ Grid>
    );
}
 
export default Botones;