import React, {Component} from 'react';
import {getAdminPartners, removePartner} from '../../../services/heroku';
import toastr from 'toastr';
import { Icon } from 'antd';
import {Table} from 'antd';
//import LightBox from 'react-images';
const { Column } = Table;
const preview = "https://library.lmc.nsw.gov.au/montage/images/no_image_w_large.gif"

export class PartnerList extends Component{

    state = {
        partners:[]
    }

    componentWillMount(){
        getAdminPartners()
            .then(partners=>{
                this.setState({partners})
            })
            .catch(e=>{
                console.log(e)
                toastr.error('no se pudo cargar ' + e)
            })
    }

    removePartner = (partner) =>{
        if(!window.confirm('Seguro que deceas borrar a ' + partner.name + '??')) return;
        removePartner(partner._id)
        .then(p=>{
            let {partners} = this.state;
            partners = partners.filter(pa=>pa._id!==p._id)
            this.setState({partners});
            toastr.warning('Se ha borrado el partner')
        })
        .catch(e=>{
            toastr.error('No se pudo borrar')
        })
    }

    render(){
        const {partners} = this.state;
        return(
            <div className="box_contenido">
                <h2>Clientes</h2>
                {/* Es importante el rowKey */}
                <Table rowKey="_id"  dataSource={partners} > 

                    <Column
                        title= "Imagen"
                        dataIndex="picture"
                        key="picture"
                        render={(data)=><img alt={data} width="50" src={data || preview} />}

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
                        dataIndex="_id"
                        key="_id"
                        render= {(data,record)=>{ return <div style={{textAlign:"center", cursor:"pointer"}}><Icon onClick={()=>this.removePartner(record)} type="delete" /></div> }}

                    />





                </Table>


            </div>
        );
    }
}