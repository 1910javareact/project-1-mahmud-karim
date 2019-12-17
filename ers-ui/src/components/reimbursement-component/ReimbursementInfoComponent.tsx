import React from 'react'
import { Reimbursement } from '../../models/reimbursement'
import { Container, Card } from '@material-ui/core'
import { User } from '../../models/user'

interface IReimbursementInfoComponentProps {
    reimbursement: Reimbursement
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
                    <p className="cardP">ReimbursementId: {this.props.reimbursement.reimbursementId}</p>
                    <p className="cardP">Author: {this.props.reimbursement.author}</p>
                    <p className="cardP">Amount: {this.props.reimbursement.amount}</p>
                    <p className="cardP">Date Submitted: {this.props.reimbursement.dateSubmitted}</p>
                    <p className="cardP">Date Resolved: {this.props.reimbursement.dateResolved}</p>
                    <p className="cardP">Description: {this.props.reimbursement.description}</p>
                    <p className="cardP">Resolver: {this.props.reimbursement.resolver}</p>
                    <p className="cardP">Status: {this.props.reimbursement.status}</p>
                    <p className="cardP">Type: {this.props.reimbursement.type}</p>
                </Card>
            </Container>
        )
    }
}