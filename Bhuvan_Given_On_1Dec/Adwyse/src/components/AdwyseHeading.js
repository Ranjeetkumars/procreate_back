import React, { Component } from 'react'
import SVGImages from '../components/icons';
import { Link } from 'react-router-dom';

export default class AdwyseHeading extends Component {
    constructor(props){
        super(props)
        this.state={
            route:'/'
        }
        
    }
    componentDidMount() {
        const { history, details,prsnDetails } = this.props;
        this.setState({route:this.props.fromParaent})
      }
        
      
    render() {
        return (
            <div>       
            <div  style={{marginTop:"12px",width:"414px",width:"212px",margin:"auto"}}>
            <div style={{marginTop:"41px",marginLeft:"-5px"}}>
            <Link to={this.state.route}>
            <img style={{marginTop:"12px",marginLeft:"-54px"}} src={SVGImages.BackArrow} alt="" />
           </Link>
            </div>
            <img  src={SVGImages.Logo} alt="" />
            </div> 
            </div>
        )
    }
}