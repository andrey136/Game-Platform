export const logout = (name) => {
    localStorage.setItem('user', JSON.stringify({status: 'stranger'}));
    localStorage.setItem('account', '1000');
};

export const range = (num) => {
    const numbers = [];
    for(let i = 0; i < num; i++){
        numbers.push(i);
    }
    return numbers;
};