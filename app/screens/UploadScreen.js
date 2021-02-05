import React from 'react';
import { StyleSheet, View, Modal} from 'react-native';
import * as Progress from 'react-native-progress';
import LottiieView from 'lottie-react-native'

import colors from '../config/colors';

export default function uploadScreen({ onDone, progress=0, visible=false}) {
   return(
       <Modal visible={visible}>
           <View style={styles.container}>
               { progress < 1 ? (
               <Progress.Bar 
                    progress={progress} 
                    color={colors.primary} 
                    width={200}
                />
                ) : (
                    <LottiieView 
                        autoPlay
                        loop={false}
                        source={require('../assets/animations/done.json')}
                        onAnimationFinish={onDone}
                        style={styles.animation}
                    />
                        
                )}
                
            </View>
       </Modal>
   )
}

const styles = StyleSheet.create({
    animation:{
        width: 150
    },
    container:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})