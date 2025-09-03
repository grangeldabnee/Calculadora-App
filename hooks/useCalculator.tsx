import { useEffect, useRef, useState } from "react";

enum Operator{
    add = '+',
    substract = '-',
    multiply = 'x',
    divide = '÷',
}


export const useCalculator = () =>{


    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>(undefined);

    useEffect(() => {
      //calcular el resultado. 
        setFormula(number);

    }, [number])
    
    //función para limpiar
    const clean = ()=>{
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = undefined;
    }
    //función para cambiar o remover el signo negativo bro. 
    const toggleSing = () => {
        if (number.includes('-')){
            return setNumber(number.replace('-',''))
        }
        setNumber('-' + number);
    }


    const buildNumber= (numberString:string) => {
        //verificar si existe el punto decimal. 
        if(number.includes('.') && numberString ==='.') 
            return;
        if(number.startsWith('0') || number.startsWith('-0')){
            if(numberString==='.'){
                return setNumber(number+numberString);
            }

            //evaluar si es otro 0 y no espunto 
            if(numberString=== '0' && number.includes('.')){
                return setNumber(number+numberString);
            }
            //diferente de 0 y no hay punto decimal, y es el primer numero
            if(numberString !== '0' && !numberString.includes('.')){
                return setNumber(numberString);
            }
            //evitar los mil 00000.000000
            if(numberString === '0' && !numberString.includes('.')) {
                return; 
            }
        }

        setNumber(number + numberString);

    };

    return{
        //props
        formula,
        number,
        prevNumber,

        //methods
        buildNumber,
        clean,
        toggleSing,
    }


}