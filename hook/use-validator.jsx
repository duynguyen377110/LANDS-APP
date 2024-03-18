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
                message: 'Nội dung không được trống'
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
                message: 'E-mail không hợp lệ'
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
                message: 'Mật khẩu phải có 6ký tự và ký tự đặc biệt'
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
                message: 'Số điện thoại không hợp lệ'
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

const useValdator = (condition = []) => {
    const [valid, dispatchValid] = useReducer(validReducer, {status: null, message: ''});
    const [value, setValue] = useState('');

    const verifyElm = (val) => {
        dispatchValid({type: 'VALID', options: condition, value: val});
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