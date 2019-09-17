import React, { Fragment, Component } from 'react'
import Header from '../../components/header/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAuthor } from './authorAction';

class AuthorDetail extends Component {

    componentWillMount() {
        this.props.getAuthor(this.props.match.params.id, this.props.user);
    }


    render() {
        const lista = this.props.authorBooks.map(book => {
            return <li key={book.id}>{book.name} - R$ {book.value}</li>
        })

        return (
            <Fragment>
                <Header />
                <h3>Detail about {this.props.author.name}</h3>
                <h4>Books published</h4>
                <ul>
                    {lista}
                </ul>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {

    return {
        author: state.author.author,
        user: state.user.data,
        authorBooks: state.author.authorBooks,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAuthor }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetail)


