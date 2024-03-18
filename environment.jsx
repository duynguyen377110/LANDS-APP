const environment = {
    dev: {
        api: {
            url: 'https://4956-171-251-233-18.ngrok-free.app/api/v1/',
            auth: {
                signup: 'common-access/signup'
            }
        }
    },
    pro: {
        api: {
            url: 'https://lands-be.onrender.com/api/v1/',
            auth: {
                signup: 'common-access/signup'
            }
        }
    }
}

export default environment['pro'];