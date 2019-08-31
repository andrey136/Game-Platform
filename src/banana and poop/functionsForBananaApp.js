import React, {Component} from 'react';

export const game4 = (x) => {
  let c = +Math.floor(Math.random() * 5);
  let arr = [];
  for (let i = 0; i < 5; i++) {
    i === c ? arr.push(0) : arr.push(1);
  }
  return arr;
};

export const  game3 = (x) => {
  let c1 = +Math.floor(Math.random() * 5);
  let c2 = +Math.floor(Math.random() * 5);
  for (let i = c1; i === c2; i += 0) {
    c2 = +Math.floor(Math.random() * 5);
  }
  let arr = [];
  for (let i = 0; i < 5; i++) {
    i === c1 || i === c2 ? arr.push(0) : arr.push(1);
  }
  return arr;
};

export const game2 = (x) => {
  let c1 = +Math.floor(Math.random() * 5);
  let c2 = +Math.floor(Math.random() * 5);
  for (let i = c1; i === c2; i += 0) {
    c2 = +Math.floor(Math.random() * 5);
  }
  let arr = [];
  for (let i = 0; i < 5; i++) {
    i === c1 || i === c2 ? arr.push(1) : arr.push(0);
  }
  return arr;
};

export const game1 = (x) => {
  let c = +Math.floor(Math.random() * 5);
  let arr = [];
  for (let i = 0; i < 5; i++) {
    i === c ? arr.push(1) : arr.push(0);
  }
  console.log('!!!!!aaaaa!!!!!');
  return arr;
};

export const counter = (howManyTimesYouWon, bet) => {
  switch(howManyTimesYouWon){
    case(0):
      return Math.round(bet * 1.238);
    case(1):
      return Math.round(bet * 1.547);
    case(2):
      return Math.round(bet * 1.934);
    case(3):
      return Math.round(bet * 2.417);
    case(4):
      return Math.round(bet * 4.028);
    case(5):
      return Math.round(bet * 6.714);
    case(6):
      return Math.round(bet * 11.19);
    case(7):
      return Math.round(bet * 27.974);
    case(8):
      return Math.round(bet * 69.936);
    case(9):
      return Math.round(bet * 349.681);
  }
};

export const inputChange =  (value, inputText) => {
  let del = !value.includes('$');
  value = value.split('').filter(el => ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(el)).join('') + '$';
  if (value[0] === '0' && value.length !== 2) value = value.slice(1);
  console.log(value);
  if (inputText === '0$') {
    return value;
  } else if (inputText === value && value.length !== 2 && del) {
      return value.slice(0, -2) + '$';
  } else if (value.length === 2) {
    return '0$';
  } else {
      return value.split('$').join('') + '$';
  }
};

export const getFromLocalStorage = () => {
  if (localStorage.getItem('account') === null) {
    localStorage.setItem('account', '1000');
  }
  return +localStorage.getItem('account');
}