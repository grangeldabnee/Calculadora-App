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
      if(lastOperation.current){
        const fristFormula = formula.split(' ').at(0)
        setFormula(`${fristFormula} ${lastOperation.current} ${number}`);
      }else{
        setFormula(number)
      }
    
    }, [number])
    
    useEffect(() => {
      //calcular el resultado. 
      const subResult = calculateSubResult()
      setPrevNumber(`${subResult}`);
    }, [formula])
    
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
    };


    const deleteLast = ()=>{
        
        let currentSing = '';
        let temporalNumber = number; 

        if(number.includes('-')){
            currentSing = '-';
            temporalNumber = number.substring(1)
        }
        if(temporalNumber.length > 1){
            return setNumber(currentSing + temporalNumber.slice(0,-1))
        }
        setNumber('0')
    }

    const setLastNumber=()=>{
        //todo calcular resultado
        calculateResult();
        if(number.endsWith('.')){
            setPrevNumber(number.slice(0,-1))
        }
        setPrevNumber(number)
        setNumber('0')

    }
    const divideOperation =()=>{
        setLastNumber();
        lastOperation.current = Operator.divide;
    }
    const multiplyOperation =()=>{
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const substractOperation =()=>{
        setLastNumber();
        lastOperation.current = Operator.substract;
    }
    const addOperation =()=>{
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const calculateSubResult = () =>{
        const [fristValue, operation, secondValue] = formula.split(' ');
        const num1 = Number(fristValue)
        const num2 = Number(secondValue)
        if( isNaN(num2)) {
            return num1
        }
        
        switch(operation){
            case Operator.add:
                return num1+num2;
            case Operator.substract:
                return num1-num2;
            case Operator.multiply:
                return num1*num2;
            case Operator.divide:
                return num1/num2;
            default:
                throw new Error(`Operation ${operation} not implemented`)
        }

    }

    const calculateResult=()=>{
        const result = calculateSubResult();
        setFormula(`${result}`);
        lastOperation.current = undefined;
        setPrevNumber('0');

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
        deleteLast,
        divideOperation,
        multiplyOperation,
        substractOperation,
        addOperation,
        calculateSubResult,
        calculateResult
    
    }


}