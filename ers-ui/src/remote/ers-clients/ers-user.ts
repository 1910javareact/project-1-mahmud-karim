import { ersUserClient } from "./ers-user-client";

export async function ersLogin(username: string, password: string) {
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