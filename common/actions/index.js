export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export function login(user) {
    return {
        type: LOG_IN,
        user
    }
}
export function logout() {
    return {
        type: LOG_OUT
    }
}
