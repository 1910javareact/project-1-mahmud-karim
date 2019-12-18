import React from 'react'
import { Table } from '@material-ui/core'
import { User } from '../../models/user'
import { UsersRowComponent } from './users-row/UsersRowComponent'
import { getAllUsers } from '../../remote/ers-clients/ers-user'

interface IAllUsersState {
    allUsers: User[]
}

export class AllUsersComponent extends React.Component<any, IAllUsersState>{
    constructor(props: any) {
        super(props)
        this.state = {
            allUsers: []
        }
    }

    async componentDidMount() {
        try {
            let g = await getAllUsers()
            if (g.status === 200) {
                this.setState({
                    ...this.state,
                    allUsers: g.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allUsers.map((e) => {
            return <UsersRowComponent user={e} key={'user ' + e.userId} />
        })
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <td>User ID</td>
                            <td>Username</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>Role</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>
        )
    }
}