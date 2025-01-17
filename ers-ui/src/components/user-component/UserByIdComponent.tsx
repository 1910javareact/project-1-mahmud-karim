import React, { SyntheticEvent } from 'react'
import { User } from '../../models/user'
import { Container, Card, TextField, Button, Typography } from '@material-ui/core'

interface IUserByIdComponentProps {
    user: User
    ersUserById: (userId: number) => void
}

export class UserByIdComponent extends React.Component<IUserByIdComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: 0
        }
    }
    updateId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    submitUserId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.ersUserById(this.state.userId)
    }

    render() {
        return (
            <Container component="main" maxWidth="xs" >
                <Typography component="h1" variant="h5">
                    Get User By User ID
                </Typography>
                <Card>
                    <Card >
                        <p className="cardP">UserID: {this.props.user.userId}</p>
                        <p className="cardP">Username: {this.props.user.username}</p>
                        <p className="cardP">First name: {this.props.user.firstName}</p>
                        <p className="cardP">Last name: {this.props.user.lastName}</p>
                        <p className="cardP">Email: {this.props.user.email}</p>
                        <p className="cardP">Role : {this.props.user.role.role}</p>
                    </Card>
                    <form onSubmit={this.submitUserId} className='{classes.form}' noValidate>
                        <TextField
                            value={this.state.userId}
                            onChange={this.updateId}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="User ID"
                            name="userid"
                            autoComplete="userid"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className='{classes.submit}'
                        >
                            Get User
                </Button>
                    </form>
                </Card>
            </Container>
        )
    }
}