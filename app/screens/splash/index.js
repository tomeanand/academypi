import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button,Headline } from 'react-native-paper';
import styles from './styles';
import PiStyles from '../../utils/PiStyles';
import Images from '../../utils/Images';



function Splashlaunch()    {
    
   
    const signUpHandler =() =>{
    }
    return(
      <View style={PiStyles.layouts.container}>
      <View style={styles.form}>
        <Image style={styles.logo} source={Images.common.logo_big} />
        <Headline style={styles.h1}> Learning Simplified</Headline>
        <Text style={styles.pad}>Learning simplified through heuristic approach.</Text>
        <Button icon="login" style={styles.btn} mode="outlined" onPress={signUpHandler}> Sign up </Button>
      </View>
       
    </View>
    )
}

export default Splashlaunch