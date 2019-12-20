import React from 'react'
import { Reimbursement } from '../../models/reimbursement'
import { Container, Card } from '@material-ui/core'
import { User } from '../../models/user'

interface IReimbursementInfoComponentProps {
    reimbursement: Reimbursement[]
    user: User
    ersReimbursementInfo: (userId: number) => void
}

export class ReimbursementInfoComponent extends React.Component<IReimbursementInfoComponentProps, any>{
    componentDidMount() {
        this.props.ersReimbursementInfo(this.props.user.userId)
    }

    render() {
        return (
            <Container component="main" maxWidth="xs" >
                <Card >
                    <p className="cardP">ReimbursementId: {this.props.reimbursement[0].reimbursementId}</p>
                    <p className="cardP">Author: {this.props.reimbursement[0].author}</p>
                    <p className="cardP">Amount: {this.props.reimbursement[0].amount}</p>
                    <p className="cardP">Date Submitted: {this.props.reimbursement[0].dateSubmitted}</p>
                    <p className="cardP">Date Resolved: {this.props.reimbursement[0].dateResolved}</p>
                    <p className="cardP">Description: {this.props.reimbursement[0].description}</p>
                    <p className="cardP">Resolver: {this.props.reimbursement[0].resolver}</p>
                    <p className="cardP">Status: {this.props.reimbursement[0].status}</p>
                    <p className="cardP">Type: {this.props.reimbursement[0].type}</p>
                </Card>
            </Container>
        )
    }
}