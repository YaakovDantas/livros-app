import React, {Fragment , Component} from 'react';
import Header from '../../components/header/Header';
import DataTable from '../../components/dataTable/DataTable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getBooks} from './bookAction';

class Book extends Component{

   componentWillMount(){
       this.props.getBooks(this.props.user);
    //    console.log(this.props.user)
   }

    render(){
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <h1>All Books</h1>
                    <DataTable dados={this.props.livros} titulo={['Name','Price']} colunas={['name','value']} />
                    {/* {console.log(this.)} */}
                </div>
            </Fragment>
        );
    }
}


function mapStateToProps(state) {
    return {
        livros: state.books.list,
        user:state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getBooks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)