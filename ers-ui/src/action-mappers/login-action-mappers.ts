import { ersRemoteLogin } from "../remote/ers-clients/ers-user"

export const ersLoginType = {
    INVALID_CREDENTIALS: 'ERS_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'ERS_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'ERS_LOGIN_FAILED_LOGIN'
}

export const ersLogin = (username: string, password: string) => async (dispatch: any) => {
    try {
        let res = await ersRemoteLogin(username, password)
        // Succesful login
        if (res.status === 200) {
            dispatch({
                type: ersLoginType.SUCCESSFUL_LOGIN,
                payload: {
                    user: res.body
                }
            })
        } else {
            dispatch({
                type: ersLoginType.INVALID_CREDENTIALS
            })
        }
    } catch (e) {
        dispatch({
            type: ersLoginType.UNSUCCESSFUL_LOGIN
        })
    }
}