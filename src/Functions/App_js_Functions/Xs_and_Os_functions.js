export const again = () => {
    let state = {
        str: '',
        count: 0,
        chosenItems_X: [],
        chosenItems_O: [],
        winIndexs: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
        trueOrFalse: [],
        _end: false,
    };
    return state;
};

export const back = (props_menu, props_account, props_money) => {
    props_menu('Xs_and_Os');
    props_account(props_money);
};

export const add_index_of_X_or_O_to_the_state = (id, chosenItems_X, chosenItems_O, count) => {
    if (count % 2) {
        chosenItems_O.push(id);
    } else {
        chosenItems_X.push(id);
    }
    return {
        count: ++count,
        chosenItems_O: chosenItems_O,
        chosenItems_X: chosenItems_X
    };
};