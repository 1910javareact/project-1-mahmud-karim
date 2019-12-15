import { ILoginState } from ".";
import { User } from "../models/user";
import { Role } from "../models/role";
import { ersLoginType } from "../action-mappers/login-action-mappers";

const initialState: ILoginState = {
    user: new User(0, '', '', '', '', '', new Role(0, ''))
}

export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ersLoginType.SUCCESSFUL_LOGIN: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}