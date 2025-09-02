import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { Colors } from '../constants/Colors';

interface Props{
    label?: string;
    color?: string;
    blackText?:boolean;
    onPress:()=>void;
    doubleSize?:boolean;
}


const CalculatorBotom = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    doubleSize=false,
    onPress}:Props) => {
  return (
    <Pressable style={({pressed})=>({
        ...globalStyles.botton,
        backgroundColor:color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
    })} onPress={onPress}>
        <Text 
        style={{
            ...globalStyles.bottonText,
            color: blackText ? 'black' : 'white',
        }}
        >
            {label}
        </Text>
    </Pressable>
  )
}

export default CalculatorBotom