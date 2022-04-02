import {counter, game1, game2, game3, game4} from "./Banana_and_Poop_functions";

export const tryAgain = () => {
    let state = {
        notYet: true,
        fruits: [],
        didYouWin: false,
        afterWards: true,
    };
    return state;
};

export const stopPlaying = () => {
    let state = {
        btnContinue: false,
        description: true,
    };
    return state;
};

export const takeMoney = (money, counter) => {
    let state = {
        counter: 0,
        notYet: true,
        fruits: [],
        didYouWin: false,
        level: 1,
        howManyTimesYouWon: 0,
        afterWards: true,
        money: money + counter,
        areYouPlaying: false,
        btnContinue: false
    };
    return state;
};

export const addMoney = (account) => {
    return {money: account + 100};
};

export const newGame = (bet, state_bet) => {
    let state = {};
    if(bet === undefined) bet = state_bet;
    if(bet === 'continue'){
        state = {
            description: false,
            bet: state_bet
        };
    } else {
        state = {
            counter: 0,
            notYet: true,
            fruits: [],
            didYouWin: false,
            level: 1,
            howManyTimesYouWon: 0,
            afterWards: true,
            areYouPlaying: false,
            bet: bet,
            description: false,
        };
    }
    return state;
};

export const game = (x, initial_state) => {
    let state = {};
    let howManyTimesYouWon = initial_state.howManyTimesYouWon;
    let level = initial_state.level;
    let didYouWin = false;
    let c = initial_state.counter;
    let isItCrap = false;
    let money = initial_state.money;
    let btnContinue = false;
    if (!initial_state.areYouPlaying) {
        money -= initial_state.bet;
    }
    let arr1;
    if (level === 1) arr1 = game4(x);
    if (level === 2) arr1 = game3(x);
    if (level === 3) arr1 = game2(x);
    if (level === 4) arr1 = game1(x);
    if (!arr1[x]) {
        c = 0;
        level = 1;
        howManyTimesYouWon = 0;
        btnContinue = false;
    } else {
        didYouWin = true;
        c = counter(initial_state.howManyTimesYouWon, initial_state.bet);
        howManyTimesYouWon += 1;
        btnContinue = true;
    }
    if (howManyTimesYouWon === 4) level += 1;
    if (howManyTimesYouWon === 7) level += 1;
    if (howManyTimesYouWon === 9) level += 1;
    state = {
        notYet: false,
        fruits: arr1,
        isItCrap: isItCrap,
        counter: c,
        didYouWin: didYouWin,
        level: level,
        howManyTimesYouWon: howManyTimesYouWon,
        afterWards: false,
        money: money,
        areYouPlaying: true,
        btnContinue: btnContinue
    };
    return state;
};
