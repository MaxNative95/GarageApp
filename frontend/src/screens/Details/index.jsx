import React from 'react'
import { View } from 'react-native';
import { RouteProp } from "@react-navigation/native";
import {
    Card
} from '../../components/CardListItem/styles';
import Cover from '../../components/Cover';
import CardComponent from '../../components/Card/index';
import { Space } from './styles'

const Details = ({ route }) => {
    const { item } = route.params;
    const { id, image, make, model, year, info } = item;
    return (
        <View style={{ marginTop: Space }}>
            <Card>
                <Cover source={image?.url} />
            </Card>
            <CardComponent make={make} model={model} year={year} info={info} />
        </View>
    )
}

export default Details;