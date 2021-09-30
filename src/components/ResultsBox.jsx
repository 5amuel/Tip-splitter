import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel'; 

const LabelTop = styled(InputLabel)({
    fontWeight:'bold',
    color:'#f1fcfe',
    fontFamily: 'Space Mono',
})
const LabelBottom = styled(InputLabel)({
    fontWeight:'bold',
    fontSize:'13px',
    fontFamily: 'Space Mono',
    color:'#6c9698'
})
const LabelResult = styled(InputLabel)({
    fontSize:'30px',
    fontWeight:'bold',
    color:'#25c1aa',
    fontFamily: 'Space Mono',
})
const ResetButton = styled(Button)`
    background-color: #26c2ad;
    color: #00474b;
    font-size: 23px;
    font-weight: Bold;
    font-family: space mono;
    padding: 5px;
    border-radius: 6px;
    width: 100%;

    :focus{
        background-color: #26c2ad;;
        color: #00474b;
    };
    :hover{
        background-color: #26c2ad;
    };
    
`


const ResultsBox = ({tipPerson, totalTip, onClick}) => {
    return ( 
        <Box sx={{ width:'100%', bgcolor:'#00474b', borderRadius: 4, justifyContent: 'center', display: 'flex', height:'100%'}}>
            <Grid item container xs={12} sx={{mx:3, my:4}}>
                <Grid item container xs={12} direction='row' justifyContent="space-between" alignItems='center' >

                    <Grid item xs={6} >
                        <LabelTop >Tip Amount </ LabelTop>
                        <LabelBottom >/ person</LabelBottom>
                    </Grid>

                    <Grid item xs={6}  sx={{display:'flex', justifyContent:'flex-end'}}>
                        <LabelResult>${tipPerson}</LabelResult>
                    </Grid>

                </Grid>



                <Grid  item container direction='row' justifyContent="space-between" alignItems='center' xs={12} my={4}>
                    <Grid item xs={6} >
                        <LabelTop >Total</ LabelTop>
                        <LabelBottom >/ person</LabelBottom>
                    </Grid>

                    <Grid item xs={6}  sx={{display:'flex', justifyContent:'flex-end'}}>
                        <LabelResult>${totalTip}</LabelResult>
                    </Grid>
                </Grid>
                


                <Grid item xs={12} sx={{mt:6}}>
                    <ResetButton onClick={onClick}>Reset</ResetButton>
                </Grid>


            </Grid>
        </Box>
     );
}
 
export default ResultsBox;