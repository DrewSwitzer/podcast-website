import Header from './header';
import { connect } from 'react-redux';
import { styleOperations } from '../../redux/ducks/style';

const mapDispatchToProps = dispatch => {
    return {
        onToggle: () => {
            dispatch(styleOperations.toggleRetro())
        }
    }
}

const mapStateToProps = state => {
    return {
        isRetro: state.style.isRetro
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);