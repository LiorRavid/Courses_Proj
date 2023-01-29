export const userDataInitialState = { user: null, role:"", token: "" };

const loginReducer = (userData, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: { ...action.user }, role:action.role, token: action.token };
        case "LOGOUT":
            return { user: null, role:"", token: "" };
        case "EDIT_USER":
            return { user: { ...action.user }, role:action.role, token: action.token };
        default:
            return { ...userData };
    }
};

export default loginReducer;