const useHttp = (url = '') => {

    const http = async (method ='', payload = null, cb) => {
        try {
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
    }

    return {
        http
    }
}

export default useHttp;