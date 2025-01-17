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

export async function ersRemoteReimbursementByStatusId(statusId: number) {
    try {
        const response = await ersUserClient.get('reimbursements/status/' + statusId)
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

export async function ersRemoteSubmitReimbursement(amount: number, description: string, type: number, dateSubmitted: number) {
    const fields = {
        reimbursementId: 0,
        author: 0,
        amount: amount,
        dateSubmitted: dateSubmitted,
        dateResolved: 0,
        description: description,
        resolver: 0,
        status: 0,
        type: type
    }
    try {
        let response = await ersUserClient.post('/reimbursements', fields)
        if (response.status === 201) {
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

export async function ersRemoteUpdateReimbursement(reimbursementId: number, status: number) {
    const fields = {
        reimbursementId,
        status
    }
    try {
        let response = await ersUserClient.patch('/reimbursements', fields)
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