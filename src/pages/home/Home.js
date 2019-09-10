import React, { Fragment, Component } from 'react';
import Header from '../../components/header/Header';
import 'materialize-css/dist/css/materialize.min.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserToken } from '../../utils/userAction'


class Home extends Component {

    componentWillMount() {
        this.props.getUserToken();
    }

    render() {
        return (
            <Fragment>
                <Header />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam eos esse facilis. Ex illo fugiat ab aut commodi laudantium beatae! Consequatur ab veritatis quam fugit doloremque assumenda quae esse?
                
        </Fragment>
        );

    }
}


function mapStateToProps(state) {
    
    return {
        user : state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getUserToken }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
