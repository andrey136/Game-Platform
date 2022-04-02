const arr = ['26062003$', '2002126$'];
const coefs = {
  0: 1.238,
  1: 1.547,
  2: 1.934,
  3: 2.417,
  4: 4.028,
  5: 6.714,
  6: 11.19,
  7: 27.974,
  8: 69.936,
  9: 349.681,
}

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
  return arr;
};

export const counter = (howManyTimesYouWon, bet) => {
  return Math.round(bet * coefs[howManyTimesYouWon]);
};

export const inputChange =  (value, inputText) => {
  let del = !value.includes('$');
  value = value.split('').filter(el => ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(el)).join('') + '$';
  if (value[0] === '0' && value.length !== 2) value = value.slice(1);
  if (inputText === '0$') {
    return value;
  } else if (inputText === value && value.length !== 2 && del) {
      return value.slice(0, -2) + '$';
  } else if (value.length === 2) {
    return '0$';
  } else if (arr.includes(value)) {
    return '0$';
  } else {
      return value.split('$').join('') + '$';
  }
};