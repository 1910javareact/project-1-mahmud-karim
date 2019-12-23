import React, { SyntheticEvent } from 'react'
import { Container, Card, TextField, Button, Typography } from '@material-ui/core'
import { updateUser } from '../../remote/ers-clients/ers-user'
import { Role } from '../../models/role'

export class UpdateUserComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            updated: '',
            userId: 0,
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            role: new Role(3, 'User')
        }
    }
    updateUserId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    updateUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    updatePassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }
    updateFirstname = (e: any) => {
        this.setState({
            ...this.state,
            firstname: e.target.value
        })
    }
    updateLastname = (e: any) => {
        this.setState({
            ...this.state,
            lastname: e.target.value
        })
    }
    updateEmail = (e: any) => {
        this.setState({
            ...this.state,
            email: e.target.value
        })
    }
    updateRole = (e: any) => {
        this.setState({
            ...this.state,
            role: new Role(e.target.value, '')
        })
    }
    submitUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let u = await updateUser(this.state.userId, this.state.username, this.state.password, this.state.firstname, this.state.lastname, this.state.email, this.state.role)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    updated: 'Updated'
                })
            } else {
                this.setState({
                    ...this.state,
                    updated: 'Failed to Update'
                })
            }
        } catch (e) {
            console.log(e);
            this.setState({
                ...this.state,
                updated: 'Failed to Update'
            })
        }


    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h5">
                    Update User Information
                </Typography>
                <Card>
                    <form onSubmit={this.submitUpdate} className="updateComponent" noValidate autoComplete="off">
                        <TextField value={this.state.userId} onChange={this.updateUserId} label="User ID" />
                        <TextField value={this.state.username} onChange={this.updateUsername} label="Username" />
                        <TextField value={this.state.password} onChange={this.updatePassword} label="Password" />
                        <TextField value={this.state.firstname} onChange={this.updateFirstname} label="First Name" />
                        <TextField value={this.state.lastname} onChange={this.updateLastname} label="Last Name" />
                        <TextField value={this.state.email} onChange={this.updateEmail} label="Email" />
                        <TextField value={this.state.role.roleId} onChange={this.updateRole} label="Role" />
                        <br />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className='{classes.submit}'
                        >
                            Update
                        </Button>
                    </form>
                    <p>{this.state.updated}</p>
                </Card>
            </Container>
        )
    }
}
