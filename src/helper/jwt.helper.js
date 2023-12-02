export const getJwtToken = () => {
    return localStorage.getItem('eventfulluser');
}

export const saveJwtToken = (jwtToken) => {
    return localStorage.setItem('eventfulluser', jwtToken);
}

export const removeJwtToken = () => {
    return localStorage.removeItem('eventfulluser');
}

export const returnToMainpage = () => {
    return window.location = "/";
}