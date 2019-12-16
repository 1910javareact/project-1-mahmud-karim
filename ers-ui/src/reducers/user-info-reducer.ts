import { ILoginState } from ".";
import { User } from "../models/user";
import { Role } from "../models/role";
import { ersUserInfoTypes } from "../action-mappers/user-info-action-mappers"

const initialState: ILoginState = {
    user: new User(0, '', '', '', '', '', new Role(0, ''))
}

export const userInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ersUserInfoTypes.USER_INFO: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}