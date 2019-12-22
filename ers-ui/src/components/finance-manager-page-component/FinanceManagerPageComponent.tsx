import React from "react"
import { Container, Typography, Card } from "@material-ui/core"
import { User } from "../../models/user"
import UserInfoContainer from "../user-component/UserInfoContainer"
import ReimbursementInfoContainer from "../reimbursement-component/ReimbursementInfoContainer"
import { SubmitReimbursementComponent } from "../reimbursement-component/SubmitReimbursementComponent"
import AllUsersContainer from "../user-component/AllUsersContainer"
import UserByIdContainer from "../user-component/UserByIdContainer"
import { UpdateReimbursementComponent } from "../reimbursement-component/UpdateReimbursementComponent"
import ReimbursementByStatusIdContainer from "../reimbursement-component/ReimbursementByStatusIdContainer"
import ReimbursementByUserIdContainer from "../reimbursement-component/ReimbursementByUserIdContainer"

interface IFinanceManagerPageComponentProps {
    user: User
}

export class FinanceManagerPageComponent extends React.Component<IFinanceManagerPageComponentProps, any>{
    render() {
        return (
            <Container component="main" maxWidth="md" >
                <Card>
                    <Typography variant="h4" gutterBottom>
                        Welcome Finance Manager: {this.props.user.username}
                    </Typography>
                    <UserInfoContainer />
                    <br />
                    <AllUsersContainer />
                    <br />
                    <UserByIdContainer />
                    <br />
                    <ReimbursementInfoContainer />
                    <br />
                    <ReimbursementByStatusIdContainer />
                    <br />
                    <ReimbursementByUserIdContainer />
                    <br />
                    <UpdateReimbursementComponent />
                    <br />
                    <SubmitReimbursementComponent />
                </Card>
            </Container>
        )
    }
}