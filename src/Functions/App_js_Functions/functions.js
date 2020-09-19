import React, {Component} from 'react';

export const logout = (name) => {
    localStorage.setItem('user', JSON.stringify({status: 'stranger'}));
    localStorage.setItem('account', '1000');
};