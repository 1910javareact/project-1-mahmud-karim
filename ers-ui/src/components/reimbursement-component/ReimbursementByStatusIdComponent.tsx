import React, { SyntheticEvent } from 'react'
import { Reimbursement } from '../../models/reimbursement'
import { Container, Card, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core'
import { ReimbursementRowComponent } from './reimbursement-row/ReimbursementRowComponent'

interface IReimbursementByStatusIdComponentProps {
    reimbursement: Reimbursement[]
    ersReimbursementByStatusId: (statusId: number) => void
}

export class ReimbursementByStatusIdComponent extends React.Component<IReimbursementByStatusIdComponentProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            statusId: 0
        }
    }
    updateStatusId = (e: any) => {
        this.setState({
            ...this.state,
            statusId: e.target.value
        })
    }
    submitStatusId = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.ersReimbursementByStatusId(this.state.statusId)
    }

    render() {
        let rows = this.props.reimbursement.map((e) => {
            return <ReimbursementRowComponent reimbursement={e} key={'reimbursement' + e.reimbursementId} />
        })
        return (
            <Container component="main" maxWidth="md" >
                <Typography component="h1" variant="h5">
                    Get Reimbursements by Status ID
                </Typography>
                <Card>
                    <form onSubmit={this.submitStatusId} className='{classes.form}' noValidate>
                        {/* <TextField
                            onChange={this.updateStatusId}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="statusid-1"
                            label="Status ID"
                            name="statusid"
                            autoComplete="statusid"
                        /> */}
                        <FormControl component="fieldset" className='{classes.formControl}'>
                            <RadioGroup name="type" value={this.state.statusId} onChange={this.updateStatusId}>
                                <FormControlLabel value="1" control={<Radio />} label="Pending" />
                                <FormControlLabel value="2" control={<Radio />} label="Approved" />
                                <FormControlLabel value="3" control={<Radio />} label="Denied" />
                            </RadioGroup>
                        </FormControl>
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