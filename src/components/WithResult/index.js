import React, {Component}from 'react'

const WithResult = (Wrapp) => class extends Component{

    state = {
        loading: false,
        errorMsg: null,
        itemList: [],
    }
    componentDidMount(){
        this.setState({loading:true});
        fetch('https://jsonplaceholder.typicode.com/users/10')
        .then((res) => res.json())
        .then((data) => this.setState({itemList: data}) )
        .catch((err) => this.setState({errorMsg: err}))
        .finally(() => this.setState({loading: false}))
    }

    render(){

        const {loading, itemList, errorMsg} = this.state;

  if(loading){
    return " loading......"
  }
  if(errorMsg){
    return errorMsg.massage
  }

  return <Wrapp itemList={itemList} {...this.props}/>



    }
}



export default WithResult
