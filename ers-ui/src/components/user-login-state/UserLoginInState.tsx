import React from 'react'
import { User } from '../../models/user';
import { Role } from '../../models/role';

interface IUserLoginStateState {
    user: User
}

export class UserLoginStateComponent extends React.Component<any, IUserLoginStateState>{
    constructor(props: any) {
        super(props)
        this.state = {
            user: new User(0, '', '', '', '', '', new Role(0, ''))
        }
    }
    updateLoggedInUser = (user: User) => {
        this.setState({
            ...this.state,
            user
        })
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}