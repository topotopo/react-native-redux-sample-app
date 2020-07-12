import React from 'react'
import PropTypes from 'prop-types'
import { stylesText, stylesView } from '../resources/styles'
import {
    View, Text, Button, Image, TouchableOpacity
} from 'react-native';
import { Medicine } from '../state/type';

export function MedicineItem(medicine: Medicine, onClick: () => void) {
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={[stylesView.itemContainer, { flexDirection: 'row' }]}>
                <View style={{ justifyContent: 'center' }}>
                    <Image
                        source={require('../assets/capsule.png')}
                        style={{ width: 40, height: 40, marginRight: 10 }}>
                    </Image>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                    <Text style={stylesText.title}>{medicine.name}</Text>
                    <Text style={stylesText.small}>{medicine.brand}</Text>
                    <Text style={stylesText.small}>{medicine.volume}</Text>
                </View>
                <View style={[{ justifyContent: 'center' }]}>
                    <Text style={[stylesText.smallBold, stylesView.expirationContainer]}>{medicine.expirationDate}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

MedicineItem.prototype = {
    onClick: PropTypes.func.isRequired,
    medicine: PropTypes.object.isRequired
}



