import MediaBrowser from './media-browser';
import {podcastOperations} from '../../redux/ducks/podcast';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        onSeeMoreClick: () => {
            dispatch(podcastOperations.incrementMediaCount())
        }
    }
}

const mapStateToProps = state => {
    return {
        items: state.podcast.rss.channel.item,
        mediaCount: state.podcast.mediaCount
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaBrowser);