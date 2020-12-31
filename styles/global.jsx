import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const GS = StyleSheet.create({
    signup: {
        backgroundColor: 'navy'
    },
    inputWithIcon: {
        width: '96%',
        height: 56,
        color: 'white',
        fontSize: 20,
        paddingHorizontal: 20,
        fontWeight: '400'
    },
    imageBgItemsCentered: {
        width: 'auto',
        height: '100%',
        display: 'flex',
    },
    inputGroupInput: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#efefef',
        backgroundColor: 'rgba(0,0,0,0.44)',
        width: width - 80,
        height: 60,
        color: 'white',
        fontSize: 20,
        paddingHorizontal: 20,
        fontWeight: '400',
        marginVertical: 15
    },
    blockButton: {
        width: width - 80,
        height: 66,
        borderRadius: 6,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockButtonText: {
        color: 'white',
        fontSize: 19
    }
})