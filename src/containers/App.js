import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

/*
 * Which injected props should be calculated
 * from the application state and how?
 */
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

/*
 * Which injected props should be callbacks
 * that dispatch actions, and which actions?
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

/*
 * Let's create a container component
 * that injects props into the pure UI component
 * according to the instructions above, but
 * instead of all those props, accepts a store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);