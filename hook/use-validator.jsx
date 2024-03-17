import { useState, useReducer } from "react";
const regexEmail = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
const regexPhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

const valid = (key, value) => {
    
    if(key === 'require') {
        if(!(value.trim() === 'DEFAULT') && value.trim().length) {

            return {
                status: true,
                message: ''
            }

        } else {
            return {
                status: false,
                message: 'Input must enter value'
            }
        }
    }

    if(key === 'email') {
        if(value.trim().toLowerCase().match(regexEmail)) {
            return {
                status: true,
                message: ''
            }
        } else {
            return {
                status: false,
                message: 'Input must enter email'
            }
        }
    }

    if(key === 'password') {
        if(regexPassword.test(value)) {
            return {
                status: true,
                message: ''
            }
        } else {
            return {
                status: false,
                message: 'Enter password less 6 charter'
            }
        }
    }

    if(key === 'phone') {
        if(regexPhone.test(value)) {
            return {
                status: true,
                message: ''
            }
        } else {
            return {
                status: false,
                message: 'Enter phone number'
            }
        }
    }
}

const validReducer = (state, action) => {
    if(action.type === "VALID") {
        // Dự vào danh sách nhập điều kiên lấy từng điều kiện kiểm tra. VD: ['require', 'email'].
        if(action.options.length) {
            for(let key of action.options) {
                let inforValid = valid(key, action.value);
    
                if(!inforValid.status) {
                    return inforValid;
                }
            }
        }
        

        return {status: true, message: ''};
    }

    if(action.type === 'REVALID') {
        return {status: null, message: ''};
    }

    return state;
}

const useValdator = () => {
    const [valid, dispatchValid] = useReducer(validReducer, {status: null, message: ''});
    const [value, setValue] = useState('');

    const verifyElm = (val, options = []) => {
        dispatchValid({type: 'VALID', options, value: val? 'has file' : ''});
    }

    const enterVal = (val) => {
        setValue(val);
    }

    const resetVal = () => {
        setValue('');
        dispatchValid({type: 'REVALID', options: [], value: ''})
    }

    return {
        value,
        valid,
        verifyElm,
        enterVal,
        resetVal
    }
}

export default useValdator;