import React, { Component } from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'

class Childs extends Component {
    countclick = (types) => {
        let {
            dispatch, EatData, 
            DrunkData, item, 
            counts, prises
        } = this.props;
        // console.log(EatData,type)
        if(item.type === "EatData"){
            EatData = EatData.map((val) =>{
                if(val.id === item.id){
                    types === "add" ? val.count++ : val.count--;
                }
                return val;
            })
        } else {
            DrunkData = DrunkData.map((val) =>{
                if(val.id === item.id){
                    types === "add" ? val.count++ : val.count--;
                }
                return val;
            })
        }
        dispatch({
            type: item.type === "EatData" ? "Add_EatDate" : "Add_DrunkData",
            data: item.type === "EatData" ? EatData : DrunkData
        })
        dispatch ({
            type:"New_count",
            data: types === "add" ? ++counts : --counts
        })
        if(types === "add"){
            prises += item.price
        } else {
            prises -= item.price
        }
        dispatch({
            type: "New_Prise",
            data: prises
        })
         
    }
    render() {
        // console.log("props",this.props);
        
        let {item} = this.props;
        return (
            <div className="childs">
                <h3>{item.name}</h3>
                <h5>{item.price}</h5>
                <div>
                    {
                        item.count > 0 ? 
                        [<button key={1} onClick={() => this.countclick('del')}>-</button>,
                        <span key={2}>{item.count}</span>,
                        <button key={3} onClick={() => this.countclick("add")}>+</button>]
                        :
                        <Button onClick={() => this.countclick("add")}>加入购物车</Button>
                    }
                </div>
            </div>
        )
    }
}
export default connect((store) => {
    // console.log(store);
    return {
        ...store
    }
})(Childs)