import React, { SyntheticEvent } from 'react'
import { Typography, Link, Container, CssBaseline, TextField, FormControlLabel, Checkbox, Button, Grid, Box } from '@material-ui/core'
import { User } from '../../models/user'
import { Redirect } from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {"Copyright © Mahmud's Site "}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

interface ILoginComponentProps {
    user: User
    ersLogin: (u: string, p: string) => void
}

export class LoginComponent extends React.Component<ILoginComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    updateUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    updatePassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }
    submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        await this.props.ersLogin(this.state.username, this.state.password)

    }

    render() {
        if (this.props.user.role.role === 'finance-manager') {
            return <Redirect to="/finance-manger" />
        } else if (this.props.user.role.role === 'admin') {
            return <Redirect to="/admin" />
        } else if (this.props.user.role.role === 'user') {
            return <Redirect to="/userpage" />
        }
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className='{classes.paper}'>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={this.submitLogin} className='{classes.form}' noValidate>
                        <TextField
                            value={this.state.username}
                            onChange={this.updateUsername}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            value={this.state.password}
                            onChange={this.updatePassword}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className='{classes.submit}'
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                {/* <Link2 to="/userpage">User Page</Link2>
                <br />
                <Link2 to="/finance-manger">Finance Manager Page</Link2>
                <br />
                <Link2 to="/admin">Admin Page</Link2>
                <br />
                <Link2 to="/user">User</Link2>
                <br />
                <Link2 to="/userbyid">User By Id</Link2>
                <br />
                <Link2 to="/users">Get All Users</Link2>
                <br />
                <Link2 to="/updateuser">Update User</Link2>
                <br />
                <Link2 to="/reimbursement/status">Reimbursement By Status ID</Link2>
                <br />
                <Link2 to="/reimbursement/user">Reimbursement By User ID</Link2>
                <br />
                <Link2 to="/reimbursement">Reimbursement Info</Link2>
                <br />
                <Link2 to="/sumbitreimbursement">Submit Reimbursement</Link2>
                <br />
                <Link2 to="/updatereimbursement">Update Reimbursement</Link2>
                <br /> */}
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        )
    }
}