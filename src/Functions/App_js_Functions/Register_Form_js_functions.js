export const _handleKeyDownLogIn = (e) => {
    if (e.key === 'Enter') {
        e.target.blur();
        this.authorize();
    }
};