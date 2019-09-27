import React, { Component } from 'react'
import { connect } from 'react-redux'
import Child from '../../../components/childs'

class Shopp extends Component {
    render() {
        let { onData, prises } = this.props;
        return (
            <div className="shopping">
                {
                    onData.filter(item => {
                        return item.count > 0
                    }).map((ite,ind) => {
                        return <Child key={ind} item={ite}  />
                    })
                }
                <div>
                    总价: {prises}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        onData:[...store.EatData,...store.DrunkData],
        prises: store.prises
    }
}

export default connect(mapStateToProps)(Shopp)