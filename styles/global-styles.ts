import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    Background:{
        flex:1,
        backgroundColor: Colors.background,
    },

    calculatorContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:20,
    },
    mainResult:{
        color: Colors.textPrimary,
        fontSize:70,
        textAlign:'right',
        fontWeight:'400',
    },
    subResult:{
        color:Colors.textSecondary,
        fontSize:40,
        textAlign:'right',
        fontWeight:'300'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        paddingHorizontal:10,
        marginBottom:18,

    },
    botton:{
        height:80,
        width:80,
        backgroundColor:Colors.darkGray,
        justifyContent:'center',
        marginHorizontal:10,
        borderRadius:100,
    },
    bottonText:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:Colors.textPrimary,
        fontWeight:300,
        fontFamily:'SpaceMono',
    }
})