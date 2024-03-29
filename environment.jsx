const environment = {
    dev: {
        api: {
            url: 'https://ecdb-2402-800-6345-b928-d931-f451-1d33-1e13.ngrok-free.app/api/v1/',
            auth: {
                signup: 'common-access/signup'
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
                    root: 'common/product'
                }
            }
        }
    },
    pro: {
        api: {
            url: 'https://lands-be.onrender.com/api/v1/',
            auth: {
                signup: 'common-access/signup'
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
                    root: 'common/product'
                }
            }
        }
    }
}

export default environment['pro'];