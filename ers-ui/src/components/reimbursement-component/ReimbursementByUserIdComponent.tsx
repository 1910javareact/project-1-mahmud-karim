import React, { SyntheticEvent } from 'react'
import { Reimbursement } from '../../models/reimbursement';
import { Container, TextField, Button, Card, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core';
import { ReimbursementRowComponent } from './reimbursement-row/ReimbursementRowComponent';

interface IReimbursementByUserIdComponentProps {
    reimbursement: Reimbursement[]
    ersReimbursementInfo: (userId: number) => void
}

export class ReimbursementByUserIdComponent extends React.Component<IReimbursementByUserIdComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: 0
        }
    }
    updateUserId = (e: any) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }
    submitUserId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.ersReimbursementInfo(this.state.userId)
    }

    render() {
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementRowComponent reimbursement={e} key={'reimbursement' + e.reimbursementId} />
        })
        return (
            <Container component="main" maxWidth="md" >
                <Typography component="h1" variant="h5">
                    Get Reimbursements by User ID
                </Typography>
                <Card>
                    <form onSubmit={this.submitUserId} className='{classes.form}' noValidate>
                        <TextField
                            onChange={this.updateUserId}
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
                            Get Reimbursements
                </Button>
                    </form>
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
                </Card>
            </Container>
        )
    }
}