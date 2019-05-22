import { StyleSheet, Platform } from 'react-native';

export const colors = {
    blue: '#0062ac',
    red: '#903232'
}

const myOSStyle = Platform.select({
    ios: {
        color: colors.blue
    },
    android: {
        color: colors.red
    }
})

const styles = StyleSheet.create({
    myText: {
        fontSize: 30,
        fontFamily: 'angelina',
        //color: colors.blue,
        //...StyleSheet.absoluteFill,
        ...myOSStyle
    }
});
  
export default styles;