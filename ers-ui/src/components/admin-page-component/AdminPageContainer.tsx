import { IState } from "../../reducers"
import { connect } from "react-redux"
import { AdminPageComponent } from "./AdminPageComponent"

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps)(AdminPageComponent)