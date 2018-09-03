import { connect } from 'react-redux'
import Info from '../components/Info'

const mapStateToProps = (state, ownProps) => ({
  info: state.info
})

const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info)
