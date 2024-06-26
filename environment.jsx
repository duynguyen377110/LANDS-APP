const environment = {
    dev: {
        api: {
            url: 'https://1142-171-251-232-242.ngrok-free.app/api/v1/',
            auth: {
                signup: 'common/access/signup',
                signin: 'common/access/signin',
            },
            category: {
                common: {
                    root: 'common/category',
                    all: 'common/category/all'
                },
                mobile: {

                }
            },
            product: {
                common: {
                    root: 'common/product',
                    all: 'common/product/all',
                }
            }
        }
    },
    pro: {
        api: {
            url: 'https://lands-be.onrender.com/api/v1/',
            auth: {
                signup: 'common/access/signup',
                signin: 'common/access/signin',
            },
            category: {
                common: {
                    root: 'common/category',
                    all: 'common/category/all'
                },
                mobile: {

                }
            },
            product: {
                common: {
                    root: 'common/product',
                    all: 'common/product/all',
                }
            }
        }
    }
}

export default environment['pro'];