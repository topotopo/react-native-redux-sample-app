import { StyleSheet } from "react-native";
import {colors} from './colors'

export const stylesText = StyleSheet.create({
    title : {
        color: colors.colorGrayDark,
        fontWeight: 'bold',
        fontSize: 20
    },
    smallBold: {
        color: colors.colorGrayDark,
        fontWeight: 'bold',
        fontSize: 14
    },
    small: {
        color: colors.colorGrayDark,
        fontWeight: '100',
        fontSize: 14
    }
}) 

export const stylesView = StyleSheet.create({
    itemContainer: {
        marginTop: 1,
        marginBottom: 1,
        padding: 16,
        backgroundColor: colors.colorVanilla
    },
    expirationContainer: {
        padding: 6,
        backgroundColor: colors.colorLime,
        borderRadius: 10
    }
}
)