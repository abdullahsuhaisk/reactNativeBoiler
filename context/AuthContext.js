import createDataContext from './createDataContext'
import { _storeData, _removeItem, _retrieveData } from "../utils";
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload }
        case 'login':
            return {errorMessage: '', token: action.payload }
        case 'clear_err':
            return {...state, errorMessage: ''}
        default:
            return state;
    }
};

const login = (dispatch) => {
    return ({ email, password }) => {
        const data = { email, password }
        _storeData("user", JSON.stringify(data)).then(()=> {
            setUser(data);
        })
        dispatch({ type: 'login', payload: "asdtoken" });
        
        // Bilerek signup yaptım çünkü diğer navigator a nasıl geçecek bilemedim!! şimdilik böyle
        navigate("Signup")
    }
}

const clearErrorMsg = dispatch => () =>{
    dispatch({ type: 'clear_err' })
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {login, clearErrorMsg},
    { token: null, errorMessage: '' }
);