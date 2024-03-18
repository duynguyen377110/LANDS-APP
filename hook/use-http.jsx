import { useDispatch } from "react-redux";
import { open, close } from "../store/store-loader";
const useHttp = (url = '') => {

    const dispatch = useDispatch();


    const http = async (method ='', payload = null, cb) => {
        try {
            dispatch(open());
            let res = await fetch(url, {
                method: method? method : 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: payload? JSON.stringify(payload) : null
            })

            if(!res.json) throw new Error('Call api unsuccess');
            cb(await res.json());

        } catch (err) {
            console.log(err);
        }
        dispatch(close());
    }

    return {
        http
    }
}

export default useHttp;