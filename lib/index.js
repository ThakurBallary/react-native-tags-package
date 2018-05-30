import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

// read only tag
const Tag = props =>
    <View
        style={[
            styles.common,
            {
                backgroundColor: props.backgroundColor,
                borderRadius: props.borderRadius
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
    borderRadius: PropTypes.number
};

Tag.defaultProps = {
    name: 'Tag',
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 0
};

// removable tag
const TagX = props =>
    <TouchableOpacity
        onPress={props.onPress}
        style={[
            styles.common,
            {
                flexDirection: 'row',
                backgroundColor: props.backgroundColor,
                borderWidth: 1,
                borderColor: props.color,
                borderRadius: props.borderRadius
            },
        ]}>
        <Text style={{ color: props.color }}>
            {props.name}
        </Text>
        <Icon
            name={props.icon}
            style={{
                color: props.color,
                fontSize: 16,
                marginLeft: 4,
                marginTop: 2,
            }}
        />
    </TouchableOpacity>

TagX.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.number,
    onPress: PropTypes.func,
};

TagX.defaultProps = {
    name: 'Tag',
    icon: 'close-circle',
    color: '#000',
    backgroundColor: '#fff0',
    borderRadius: 0,
    onPress: () => alert('TagX Pressed'),
};

const styles = StyleSheet.create({
    common: {
        flexWrap: 'wrap',
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
});

export { Tag, TagX };
