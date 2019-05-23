import { StyleSheet, Platform } from 'react-native';

export const colors = {
    blue: '#0062ac',
    red: '#903232',
    yellow: '#f4c01e'
}

const styles = StyleSheet.create({
    myText: {
        fontSize: 30,
        backgroundColor: colors.yellow,
        transform: [
            //{scale: 1},
            //{scaleX: 2},
            //{scaleY: 2},
            //{translateX: 100},
            //{translateY: 100},
            //{rotateX: '45deg'},
            //{rotateY: '45deg'},
            //{rotateZ: '90deg'},
        ]
    }
});
  
export default styles;