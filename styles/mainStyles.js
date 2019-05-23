import { StyleSheet, Platform } from 'react-native';

export const colors = {
    blue: '#0062ac',
    red: '#903232',
    yellow: '#f4c01e'
}

const styles = StyleSheet.create({
    myText: {
        fontSize: 30,
        color: 'white'
        //backgroundColor: colors.yellow,
    },
    linearGradient: {
        padding: 15,
        height: 300
    }
});
  
export default styles;