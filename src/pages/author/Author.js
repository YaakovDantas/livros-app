import React, { Fragment, Component } from 'react'
import { NavLink } from 'react-router-dom';
import Header from '../../components/header/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAuthors,deleteAuthor } from './authorAction';

class Author extends Component {
    // constructor(props){
    //     super(props)
    // }
    componentWillMount() {
        this.props.getAuthors(this.props.user);
    }

    render() {
        let linhas = this.props.names.map((item) => {

            return (
                <tr>
                    <td key={`${item.id}${item.name}`}>
                        <NavLink to={`authors/${item.id}`}>
                            {item.name}
                        </NavLink>
                    </td>
                    <td key={`${item.id+201}${item.name}`}>
                        <NavLink to={`author/form/${item.id}/`}>
                            Update
                        </NavLink>
                    </td>
                    <td key={`${item.id-320}${item.name}`} onClick={()=>{this.props.deleteAuthor(item.id, this.props.user)}}>
                        <a href="#" >
                            Delete
                        </a>    
                    </td>
                </tr>)

        })
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Authors</h1>

                    <NavLink to="/author/form" className="btn waves-effect waves-light" type="submit" name="action">New</NavLink>
                    <table className='centered highlight' >
                        <thead>
                            <tr>
                                <th >Name</th>
                                <th >Update</th>
                                <th >Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {linhas}
                        </tbody>
                    </table>

                </div>

            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        names: state.authors.list,
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAuthors,deleteAuthor }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Author)


