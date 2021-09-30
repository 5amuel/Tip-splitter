import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const MainTitle = styled(Typography)({
  color: 'darkcyan',
  fontWeight:'bold',
  '&.MuiTypography-h4':{
    fontFamily: 'monospace',
    fontWeight:'bold',
    fontSize: '22px',
    marginTop:'40px',
    color:"#00474b"
  } 
})
const Titulo = () => {
    
    return ( 
        
            <MainTitle 
                variant="h4"
                align="center"
                
                >S P L I <br/> T T E R
            </MainTitle>
        
     );
}
 
export default Titulo;