import { ersUserClient } from "./ers-user-client";

export async function ersRemoteReimbursement(userId: number) {
    try {
        const response = await ersUserClient.get('reimbursements/author/userId/' + userId)
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