import React from 'react'
import { User } from '../../models/user';
import { Card, Container, Typography } from '@material-ui/core';

interface IUserInfoComponentProps {
    user: User
}

export class UserInfoComponent extends React.Component<IUserInfoComponentProps, any>{

    render() {
        return (
            <Container component="main" maxWidth="xs" >
                <Typography component="h1" variant="h5">
                    My Information
                </Typography>
                <Card >
                    <p className="cardP">UserID: {this.props.user.userId}</p>
                    <p className="cardP">Username: {this.props.user.username}</p>
                    <p className="cardP">First name: {this.props.user.firstName}</p>
                    <p className="cardP">Last name: {this.props.user.lastName}</p>
                    <p className="cardP">Email: {this.props.user.email}</p>
                    <p className="cardP">Role : {this.props.user.role.role}</p>
                </Card>
            </Container>
        )
    }
}