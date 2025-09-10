import CalculatorBotom from '@/components/CalculatorBotom'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {

  //desestructuración
  const {
    formula,
    buildNumber,
    clean,
    toggleSing,
    deleteLast,
    prevNumber,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateSubResult,
    calculateResult
  
  } = useCalculator();

  return (  
    
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{paddingHorizontal:30, paddingBottom:20,}}>
        <ThemeText variant='h1' >{formula}</ThemeText>
        {formula === prevNumber ?(
          <ThemeText variant='h2'> </ThemeText>
        ):
          <ThemeText variant='h2'>{prevNumber}</ThemeText>
        }
      </View>
      {/* Fila de botones */}
      <View style={globalStyles.row}>
        <CalculatorBotom 
        label='C' 
        blackText
        color={Colors.lightGray} 
        onPress={clean}
        /> 
        <CalculatorBotom 
        label='+/-' 
        blackText
        color={Colors.lightGray} 
        onPress={toggleSing} 
        /> 
        <CalculatorBotom 
        label='DEL' 
        blackText 
        color={Colors.lightGray}
        onPress={deleteLast}
        /> 
        <CalculatorBotom 
        label='÷' 
        color={Colors.orange} 
        onPress={divideOperation}
        /> 
      </View>
      {/* Segunda fila  */}
      <View style={globalStyles.row}>
        <CalculatorBotom label='7' onPress={()=>buildNumber('7')} /> 
        <CalculatorBotom label='8' onPress={()=>buildNumber('8')}/> 
        <CalculatorBotom label='9' onPress={()=>buildNumber('9')} /> 
        <CalculatorBotom label='x' color = {Colors.orange} onPress={multiplyOperation}/> 
      </View>
      {/* tercera fila */}
      <View style={globalStyles.row}>
        <CalculatorBotom label='4' onPress={()=>buildNumber('4')} /> 
        <CalculatorBotom label='5' onPress={()=>buildNumber('5')}/> 
        <CalculatorBotom label='6' onPress={()=>buildNumber('6')} /> 
        <CalculatorBotom label='-' color = {Colors.orange} onPress={substractOperation}/> 
      </View>
      {/* cuarta fila */}
      <View style={globalStyles.row}>
        <CalculatorBotom label='1' onPress={()=>buildNumber('1')} /> 
        <CalculatorBotom label='2' onPress={()=>buildNumber('2')}/> 
        <CalculatorBotom label='3' onPress={()=>buildNumber('3')} /> 
        <CalculatorBotom label='+' color = {Colors.orange} onPress={addOperation}/> 
      </View>      
      {/* quinta */}
      <View style={globalStyles.row}>
        <CalculatorBotom label='0' doubleSize onPress={()=>buildNumber('0')} /> 
        <CalculatorBotom label='.' onPress={()=>buildNumber('.')}/> 
        <CalculatorBotom label='=' color = {Colors.orange} onPress={calculateResult}/> 
      </View>      
    </View>
  )
}
export default CalculatorApp