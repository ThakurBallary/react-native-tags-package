import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

// read only tag
const Tag = props =>
    <View
        style={[
            styles.rounded,
            {
                backgroundColor: props.backgroundColor,
            },
        ]}>
        <Text style={{ color: props.color }}>
            {props.name}
        </Text>
    </View>

Tag.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
};

Tag.defaultProps = {
    name: 'Tag',
    color: '#fff',
    backgroundColor: '#000',
};

// removable tag
const TagX = props =>
    <TouchableOpacity
        onPress={props.onPress}
        style={[
            styles.rounded,
            {
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: props.color,
            },
        ]}>
        <Text style={{ color: props.color }}>
            {props.name}
        </Text>
        <Icon
            name="close"
            style={{
                color: props.color,
                fontSize: 16,
                marginLeft: 10,
                marginTop: 2,
            }}
        />
    </TouchableOpacity>

TagX.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
};

TagX.defaultProps = {
    name: 'Tag',
    color: '#000',
    onPress: () => alert('TagX Pressed'),
};

const styles = StyleSheet.create({
    rounded: {
        flexWrap: 'wrap',
        borderRadius: 50,
        paddingHorizontal: 16,
        paddingTop: 6,
        paddingBottom: 8,
    },
});

export { Tag, TagX };
