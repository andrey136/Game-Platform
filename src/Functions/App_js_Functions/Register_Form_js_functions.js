import React, {Component} from 'react';

export const _handleKeyDownLogIn = (e) => {
    if (e.key === 'Enter') {
        e.target.blur();
        this.authorize();
    }
};