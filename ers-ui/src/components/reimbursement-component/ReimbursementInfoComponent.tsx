import React from 'react'
import { Reimbursement } from '../../models/reimbursement'
import { Container, Card, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core'
import { User } from '../../models/user'
import { ReimbursementRowComponent } from './reimbursement-row/ReimbursementRowComponent'

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
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementRowComponent reimbursement={e} key={'reimbursement' + e.reimbursementId} />
        })
        return (
            <Container component="main" maxWidth="md" >
                <Typography component="h1" variant="h5">
                    My Reimbursements
                </Typography>
                <Card>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Reimbursement ID</TableCell>
                                <TableCell>Author</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Date Submitted</TableCell>
                                <TableCell>Date Resolved</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                    </Table>
                </Card>
            </Container>
        )
    }
}