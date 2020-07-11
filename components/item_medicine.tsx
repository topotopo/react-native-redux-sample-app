import React from 'react'
import PropTypes from 'prop-types'
import {stylesText, stylesView} from '../resources/styles'
import {
    View, Text, Button, Image
} from 'react-native';
import {colors} from '../resources/colors'

export function MedicineItem() {
    return (
        <View style={[stylesView.itemContainer, {flexDirection: 'row'}]}>
            <View style={{justifyContent: 'center'}}>
                <Image
                    source={require('../assets/capsule.png')}
                    style={{width: 40, height: 40, marginRight: 10}}>
                </Image>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent:'center'}}>
                <Text style={stylesText.title}>Title</Text>
                <Text style = {stylesText.small}>Brand</Text>
                <Text style = {stylesText.small}>Volume</Text>
            </View>
            <View style={[{justifyContent:'center'}]}>
                <Text style = {[stylesText.smallBold, stylesView.expirationContainer]}>Expiration</Text>
            </View>
        </View>
    )
}


