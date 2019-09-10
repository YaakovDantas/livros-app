import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';


class DataTable extends Component {


    render() {
        
        const { dados,colunas, titulo, link } = this.props;
        let cont = 0;
       
            let linhas = dados.map((item) => {
            if(link){
                return( <tr key={`${item.id}`}>
                    
                        {colunas.map((coluna) => 
                            <td key={`${item.id}${item[coluna]}`}>
                                <NavLink to={`${link}/${item.id}`}>
                                    {item[coluna]}      
                                </NavLink>
                            </td>)}
                    
                </tr>)
            }else{
               
               return (<tr key={`${item.id}`}>
                    
                        {colunas.map((coluna) => 
                            <td key={`${item.id}${item[coluna]}`}>
                                    {item[coluna]}      
                            </td>)}
                    
                </tr>)
            }
            
            }
        
        );

        let titulos = titulo.map(item=>{
            return <th key={cont++}>{item}</th>
        });

        return (
            <table className='centered highlight' >
                <thead>
                    <tr>
                        {titulos}
                    </tr>
                </thead>
                <tbody>
                    {linhas}
                </tbody>
            </table>
        );
    }
}



export default DataTable;
