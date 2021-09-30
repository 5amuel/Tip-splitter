import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputWithLabel from './InputWithLabel';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Botones from './Botones';
import { useState } from 'react';
import ResultsBox from './ResultsBox';
import { maxHeight } from '@mui/system';

const FormContenedor = () => {
    const [numberOfPersons, setNumberOfPersons] = useState(0)
    const [bill, setBill] = useState(0)
    const [valuePercent, setValuePercent] = useState(0)
    const handleBill = (e) => {
        const bill =  e.target.value
        setBill(Number(bill))
    }

    const handleNumberOfPersons = (e) => {
        const personQuantity = e.target.value
        setNumberOfPersons(parseFloat(personQuantity).toFixed(1))
    }
    const handleButtonFocus = (event) => {
        const target = event.target
        const value = target.value
        const txtField = document.getElementById('txt')
        const botones = document.getElementsByName('btn')
        const originalClassList = target.className
        const active = ' active'
        const allClasses = originalClassList.concat(active)
        
        if (event.target.name === 'btn'){
            botones.forEach(boton => {
                if(allClasses){
                    boton.classList.remove('active')
                }
            })
            target.className = allClasses
            const valueToNum = parseFloat(value).toFixed(1)
            setValuePercent(valueToNum / 100)
            txtField.value = ''
        }
        if (event.target.name === 'txt'){
            botones.forEach(boton => {
                if(allClasses){
                    boton.classList.remove('active')
                }
            })
            const valueToNum = parseFloat(value).toFixed(1)
            setValuePercent(valueToNum / 100)
        }
    };

    const reset = (e) => {
        const txtCustomField = document.getElementById('txt')
        const billInput = document.getElementById('billInput')
        const peopleInput = document.getElementById('peopleInput')
        const botones = document.getElementsByName('btn')
        setValuePercent(0)
        setBill(0)
        setNumberOfPersons(0)
        txtCustomField.value = ''
        peopleInput.value = ''
        billInput.value = ''
        botones.forEach(boton => {
            boton.classList.remove('active')
        })
    
    }

    const resultado = (Math.round(bill * valuePercent) / numberOfPersons).toFixed(2);
    const resultadoTotal = (Math.round(bill * valuePercent)).toFixed(2);
        
    return ( 
        
        <Box mt={6} sx={{margin:'auto', bgcolor: '#f3f8fb', borderRadius: 5, height:'100%', maxWidth:900, minWidth:360}}>
            <Grid container xs={12} md={12} >

                <Grid item container xs={12} md={6}>
                
                    <Grid item xs={12} sx={{px:4, my:3}}> 
                        <InputWithLabel id={'billInput'} name='Bill' onChange={handleBill} adornment={'$'} />
                    </Grid> 

                    <Grid container item xs={12} sx={{px:4, my:0}} spacing={2} >
                        <Botones onClick={handleButtonFocus}/>
                    </Grid>

                    <Grid  item xs={12} sx={{px:4, mt:3, pb: 3}} > 
                        <InputWithLabel 
                            id={'peopleInput'}
                            onChange={handleNumberOfPersons}
                            adornment={<PersonAddIcon sx={{color:'#a1bbbe'}}/>}    
                            name='Number of people'/>
                    </Grid>
                </Grid>



                <Grid  item xs={12} sm={12} md={6} lg={6} px={4} pb={3} mt={4} >
                    <ResultsBox onClick={reset} tipPerson={resultado !== 'NaN' && resultado !== 'Infinity' && resultado} totalTip={resultadoTotal} />
                </Grid>

            </Grid>
        </Box>
    );
}
 
export default FormContenedor;