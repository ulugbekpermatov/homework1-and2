import React, {Component}from 'react'

const WithData = (Wrapp) => class extends Component{

    state = {
        loading: false,
        errorMsg: null,
        user: [],
    }
    componentDidMount(){
        this.setState({loading:true});
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => this.setState({user: data}) )
        .catch((err) => this.setState({errorMsg: err}))
        .finally(() => this.setState({loading: false}))
    }

    render(){

        const {loading, user, errorMsg} = this.state;

  if(loading){
    return " loading......"
  }
  if(errorMsg){
    return errorMsg.massage
  }

  return <Wrapp user={user}  {...this.props}/>
  


    }
}



export default WithData
