import { ersUserClient } from "./ers-user-client";

export async function ersRemoteLogin(username: string, password: string) {
    const credentails = {
        username,
        password
    }
    try {
        const response = await ersUserClient.post('/login', credentails)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export const getAllUsers = async () => {
    try {
        let response = await ersUserClient.get('/users')
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export const getUserById = async (userId: number) => {
    try {
        let response = await ersUserClient.get('/users/' + userId)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e)
        throw new Error('Something Went Wrong')
    }
}