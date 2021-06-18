import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Dashboard.css';
import * as actions from '../actions';
import UserTournaments from './UserTournaments';
class Dashboard extends Component{

   
    

    render(){
       
        return(
            <div >
           
               
                <div className=" btn-floating btn-large waves-effect waves-light  red button1">
                <Link to="/createTournament"className=
                "btn-floating btn-large waves-effect waves-light red "><i class="material-icons">add</i></Link>
              
            </div>
           
            Create New Tournament
            
            <div className=" btn-floating btn-large waves-effect waves-light  red button2">
                <Link to="/findTournament"className=
                "btn-floating btn-large waves-effect waves-light red "><i class="material-icons">search</i></Link>
            </div>
            Find New Tournament
            <UserTournaments />
           
        </div>
         
        )
       
    }
}

function mapStateToProps(state){
    return{auth:state.auth}
}
export default connect(mapStateToProps) (Dashboard);