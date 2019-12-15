import { IState } from "../../reducers";
import { ersLogin } from "../../action-mappers/login-action-mappers"
import { connect } from "react-redux";
import { LoginComponent } from "./LoginComponent";

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user
    }
}

const mapDispatchToProps = {
    ersLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)