import { ILoginState } from ".";
import { User } from "../models/user";
import { Role } from "../models/role";

const initialState: ILoginState = {
    user: new User(0, '', '', '', '', '', new Role(0, ''))
}

export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}