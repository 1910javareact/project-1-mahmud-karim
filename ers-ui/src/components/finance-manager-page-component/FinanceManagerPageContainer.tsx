import { IState } from "../../reducers"
import { connect } from "react-redux"
import { FinanceManagerPageComponent } from "./FinanceManagerPageComponent"

const mapStateToProps = (state: IState) => {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps)(FinanceManagerPageComponent)