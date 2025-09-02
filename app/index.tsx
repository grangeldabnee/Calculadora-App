import CalculatorBotom from '@/components/CalculatorBotom'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {
  return (  
    
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{paddingHorizontal:30, paddingBottom:20,}}>
        <ThemeText variant='h1' >50 x 50</ThemeText>
        <ThemeText variant='h2'>500</ThemeText>
      </View>
      {/* Fila de botones */}
      <View style={globalStyles.row}>
        <CalculatorBotom 
        label='C' 
        blackText
        color={Colors.lightGray} 
        onPress={()=>console.log('C')  } 
        /> 
        <CalculatorBotom 
        label='+/-' 
        blackText
        color={Colors.lightGray} 
        onPress={()=>console.log('+/-')  } 
        /> 
        <CalculatorBotom 
        label='DEL' 
        blackText 
        color={Colors.lightGray}
        onPress={()=>console.log('DEL')  } 
        /> 
        <CalculatorBotom 
        label='÷' 
        color={Colors.orange} 
        onPress={()=>console.log('÷')  }
        /> 
      </View>
      {/* Segunda fila  */}
      <View style={globalStyles.row}>
        <CalculatorBotom label='7' onPress={()=>console.log('7')} /> 
        <CalculatorBotom label='8' onPress={()=>console.log('8')}/> 
        <CalculatorBotom label='9' onPress={()=>console.log('9')} /> 
        <CalculatorBotom label='x' color = {Colors.orange} onPress={()=>console.log('x')}/> 
      </View>
      {/* tercera fila */}
      <View style={globalStyles.row}>
        <CalculatorBotom label='4' onPress={()=>console.log('4')} /> 
        <CalculatorBotom label='5' onPress={()=>console.log('5')}/> 
        <CalculatorBotom label='6' onPress={()=>console.log('6')} /> 
        <CalculatorBotom label='-' color = {Colors.orange} onPress={()=>console.log('-')}/> 
      </View>
      {/* cuarta fila */}
      <View style={globalStyles.row}>
        <CalculatorBotom label='1' onPress={()=>console.log('1')} /> 
        <CalculatorBotom label='2' onPress={()=>console.log('2')}/> 
        <CalculatorBotom label='3' onPress={()=>console.log('3')} /> 
        <CalculatorBotom label='+' color = {Colors.orange} onPress={()=>console.log('+')}/> 
      </View>      
      {/* quinta */}
      <View style={globalStyles.row}>
        <CalculatorBotom label='0' doubleSize onPress={()=>console.log('1')} /> 
        <CalculatorBotom label='.' onPress={()=>console.log('2')}/> 
        <CalculatorBotom label='=' color = {Colors.orange} onPress={()=>console.log('=')}/> 
      </View>      
    </View>
  )
}
export default CalculatorApp