import React from 'react'
import { Container, Typography, Card, AppBar, Toolbar, Button } from '@material-ui/core'
import UserInfoContainer from '../user-component/UserInfoContainer'
import ReimbursementInfoContainer from '../reimbursement-component/ReimbursementInfoContainer'
import { SubmitReimbursementComponent } from '../reimbursement-component/SubmitReimbursementComponent'
import { UpdateUserComponent } from '../user-component/UpdateUserComponent'
import { Redirect } from 'react-router'

export class AdminPageComponent extends React.Component<any, any>{
    render() {
        return (
            this.props.user.userId ?
                <Container component="main" maxWidth="md" >
                    <AppBar position="static">
                        <Toolbar>
                            <Button href="/login" color="inherit">Logout</Button>
                        </Toolbar>
                    </AppBar>
                    <p> </p>
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
                :
                <Redirect to='/login' />
        )
    }
}