import App from './app';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    podcast: state.podcast,
    isRetro: state.style.isRetro
  }
}

export default connect(mapStateToProps)(App) ;