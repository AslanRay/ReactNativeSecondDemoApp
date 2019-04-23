import React from 'react';
import {Text} from 'react-native';
import styles from '../../../styles/globalStyles';

const headingText = props => (
    <Text {...props} style={[styles.textHeading,props.style]}>{props.children}</Text>
);

export default headingText;