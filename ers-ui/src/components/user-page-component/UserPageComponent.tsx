import React from 'react'
import { User } from '../../models/user';
import { Container, Typography } from '@material-ui/core';
import UserInfoContainer from '../user-component/UserInfoContainer';
import ReimbursementInfoContainer from '../reimbursement-component/ReimbursementInfoContainer';
import { SubmitReimbursementComponent } from '../reimbursement-component/SubmitReimbursementComponent';

interface IUserPageComponentProps {
    user: User
}

export class UserPageComponent extends React.Component<IUserPageComponentProps, any>{

    render() {
        return (
            <Container component="main" maxWidth="md" >
                <Typography variant="h4" gutterBottom>
                    Welcome User: {this.props.user.username}
                </Typography>
                <UserInfoContainer />
                <br />
                <ReimbursementInfoContainer />
                <br />
                <SubmitReimbursementComponent />
            </Container>
        )
    }
}