export const environments = {
    DEV: 'development',
    PROD: 'production',
    TEST: 'test'
};


export const ENV_IS_TEST = process.env.NODE_ENV === environments.TEST;