export const actionTypes = {
    OPEN_POST: 'APP/OPEN_POST',
    CLOSE_POST: 'APP/CLOSE_POST',
}

export const openPostActon = (postId) => ({
    type: actionTypes.OPEN_POST, postId
});

export const closePostActon = () => ({
    type: actionTypes.CLOSE_POST
});