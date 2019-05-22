import { StyleSheet } from 'react-native';

export const colors = {
    blue: '#0062ac',
    red: '#903232'
}

const styles = StyleSheet.create({
    myText: {
        fontSize: 20,
        color: colors.blue,
        //...StyleSheet.absoluteFill,
    }
});
  
export default styles;