import React, {Fragment , Component} from 'react'
import Header from '../../components/header/Header'
import DataTable from '../../components/dataTable/DataTable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getAuthors} from './authorAction';

class Author extends Component {
    // constructor(props){
    //     super(props)
    // }
    componentWillMount(){
        this.props.getAuthors();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Authors</h1>
                    
                    <DataTable dados={this.props.names} titulo={['Authors']} link="authors" colunas={['name']} />

                </div>

            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        names: state.authors.list
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAuthors }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Author)


