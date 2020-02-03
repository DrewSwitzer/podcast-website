import Footer from './footer';
import { connect } from 'react-redux';
import { styleOperations } from '../../redux/ducks/style';

const mapStateToProps = state => {
    return {
        isRetro: state.style.isRetro
    }
}

export default connect(mapStateToProps)(Footer);