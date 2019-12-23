import React, { SyntheticEvent } from "react"
import { Container, Card, TextField, Button, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core"
import { ersRemoteUpdateReimbursement } from "../../remote/ers-clients/ers-reimbursement"

export class UpdateReimbursementComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            updated: '',
            reimbursementId: 0,
            status: 1
        }
    }
    updateReimbursementId = (e: any) => {
        this.setState({
            ...this.state,
            reimbursementId: e.target.value
        })
    }
    updateStatus = (e: any) => {
        this.setState({
            ...this.state,
            status: e.target.value
        })
    }
    updateReimbursement = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let u = await ersRemoteUpdateReimbursement(this.state.reimbursementId, this.state.status)
            if (u.status === 200) {
                this.setState({
                    ...this.state,
                    updated: 'Updated'
                })
            } else {
                this.setState({
                    ...this.state,
                    updated: u.status
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h5">
                    Update Reimbursement
                </Typography>
                <Card>
                    <form onSubmit={this.updateReimbursement} className="updateComponent" noValidate autoComplete="off">
                        <TextField onChange={this.updateReimbursementId} label="Reimbursement ID" />
                        <br />
                        <p> </p>
                        {/* <TextField onChange={this.updateStatus} label="Status" /> */}
                        <FormControl component="fieldset" className='{classes.formControl}'>
                            <RadioGroup name="type" value={this.state.status} onChange={this.updateStatus}>
                                <FormControlLabel value="2" control={<Radio />} label="Approve" />
                                <FormControlLabel value="3" control={<Radio />} label="Deny" />
                            </RadioGroup>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className='{classes.submit}'
                        >
                            Update
                        </Button>
                    </form>
                    <p>{this.state.updated}</p>
                </Card>
            </Container>
        )
    }
}