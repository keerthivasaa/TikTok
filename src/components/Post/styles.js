import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height-81,
    },
    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    bottomContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        fontWeight: '700',
    },
    description: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        fontWeight: '300',
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    songImage: {
        width: 49,
        height: 49,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#4c4c4c'
    },

    //rightContainer

    rightContainer: {
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: 'space-between',
        marginRight: 7,
    },
    profilePicture: {
        width: 49,
        height: 49,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
    },
    iconContainer: {
        alignItems: 'center',
    },
    statusLabel: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default styles;