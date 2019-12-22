import React from 'react'
import { Container, Typography, Card } from '@material-ui/core'
import UserInfoContainer from '../user-component/UserInfoContainer'
import ReimbursementInfoContainer from '../reimbursement-component/ReimbursementInfoContainer'
import { SubmitReimbursementComponent } from '../reimbursement-component/SubmitReimbursementComponent'
import { UpdateUserComponent } from '../user-component/UpdateUserComponent'

export class AdminPageComponent extends React.Component<any, any>{
    render() {
        return (
            <Container component="main" maxWidth="md" >
                <Card>
                    <Typography variant="h4" gutterBottom>
                        Welcome Admin: {this.props.user.username}
                    </Typography>
                    <UserInfoContainer />
                    <br />
                    <ReimbursementInfoContainer />
                    <br />
                    <UpdateUserComponent />
                    <br />
                    <SubmitReimbursementComponent />
                </Card>
            </Container>
        )
    }
}