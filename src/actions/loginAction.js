export const loginAction = ({ user, role, token }) => ({
    type: "LOGIN",
    user,
    role,
    token
});

export const logoutAction = () => ({
    type: "LOGOUT"
});

export const editLoginUserAction = ({ user, role, token }) => ({
    type: "EDIT_USER",
    user,
    role,
    token
});
