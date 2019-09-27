import React, { Component } from 'react'
import {connect} from 'react-redux'
import Childs from '../../../../components/childs'
import axios from 'axios'
import '../../../../mock/mock'


class Small extends Component {
    componentDidMount(){
        this.props.EatData.length === 0 && this.props.getData()
    }
    render() {
        // console.log('====================================');
        // console.log('props',this.props);
        // console.log('====================================');
        let {
            EatData
        } = this.props;
        return (
            <div className="small">
                {
                    EatData.length > 0 && EatData.map((item,index) => {
                        return <Childs key={index} item={item} />
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (store) => ({EatData: [...store.EatData]})

const mapmapDispathToProps = (dispath) => {
    return {
        getData(){
            // 请求数据,dispath拿到type那一项里边的数据
            axios.get('/getEat').then(res => {
                // console.log("res",res);
                dispath({
                    type:"Add_EatDate",
                    data: res.data.data
                })
            })
        }
    }
}


export default connect(mapStateToProps,mapmapDispathToProps)(Small)