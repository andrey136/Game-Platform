import React, {Component} from "react";
import axios from 'axios';

export const getUserById = (_id) => {
  console.log('Get user by id');
  return axios.get(`http://localhost:5000/api/getUser/${_id}`).then(res => {
    if (res.data._id !== undefined) {
      return res.data;
    } else {
      localStorage.removeItem('user');
      return 'You are not authorized';
    }
  });
};

export const changeAccountMoney = (_id, user) => {
  console.log('changeAccountMoney',_id);
  return axios.patch(`http://localhost:5000/api/money/${_id}`, user).then(res => {
    if (res.data._id !== undefined) {
      console.log('API_COMMAND', res.data);
      return res.data;
    } else {
      localStorage.removeItem('user');
      return 'You are not authorized';
    }
  });
};