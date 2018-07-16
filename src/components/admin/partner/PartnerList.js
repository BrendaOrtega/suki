import React, {Component} from 'react';
import {getPartners} from '../../../services/firebase';
import toastr from 'toastr';
import { List, Avatar, Icon } from 'antd';
import {Table} from 'antd';
const { Column } = Table;

export class PartnerList extends Component{

    state = {
        partners:[]
    }

    componentWillMount(){
        getPartners()
            .then(partners=>{
                this.setState({partners})
            })
            .catch(e=>{
                console.log(e)
                toastr.error('no se pudo cargar ' + e)
            })
    }
    render(){
        const {partners} = this.state;
        return(
            <div className="box_contenido">
                <h2>Partners</h2>
                <Table  dataSource={partners} >

                    <Column
                        render={(text, record) => (
                            <span>

                                        </span>
                        )}
                    />
                    <Column
                        title= "Id del post"
                        dataIndex="_id"
                        key="_id"

                    />
                    <Column
                        title= "Nombre del Cliente"
                        dataIndex="name"
                        key="name"

                    />
                    <Column
                        title= "Lugar"
                        dataIndex="place"
                        key="place"

                    />
                    <Column
                        title= "Eliminar"
                        dataIndex="place"
                        key="place"
                        render= {()=>{ return <div style={{textAlign:"center", cursor:"pointer"}}><Icon type="delete" /></div> }}

                    />





                </Table>


            </div>
        );
    }
}