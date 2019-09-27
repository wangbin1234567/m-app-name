import React, { Component } from 'react'
import {connect} from 'react-redux'
import Childs from '../../../../components/childs'
import axios from 'axios'
import '../../../../mock/mock'

class Eat extends Component {
    componentDidMount(){
        this.props.DrunkData.length === 0 && this.props.getList()
    }
    render() {
        // console.log('====================================');
        // console.log('props',this.props);
        // console.log('====================================');
        let {
            DrunkData
        } = this.props;
        return (
            <div>
                {
                    DrunkData.length > 0 && DrunkData.map((item,index) => {
                        return <Childs key={index} item={item} />
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (store) => ({DrunkData: [...store.DrunkData]})

const mapmapDispathToProps = (dispath) => {
    return {
        getList(){
            // 请求数据,dispath拿到type那一项里边的数据
            axios.get('/getDrink').then(res => {
                // console.log("res",res);
                dispath({
                    type:"Add_DrunkData",
                    data: res.data.data
                })
            })
        }
    }
}


export default connect(mapStateToProps,mapmapDispathToProps)(Eat)