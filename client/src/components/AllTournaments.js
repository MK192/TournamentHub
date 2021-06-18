import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllTournaments,fetchUser,fetchNewPlayer}from '../actions/index';
import './AllTournaments.css';
import { withRouter } from "react-router";


const mongoose=require('mongoose');

const Tournament=mongoose.model('tournaments');




class AllTournaments extends Component{
    async tesFunction (tournament){
      
        const response = await fetch('/api/addplayer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({playermail: 'gdg',playerId:tournament._id,numberofp:tournament.numberOfPlayers,
        arrofplayers:tournament.players,parti:tournament.participation})
        });
        const data = await response.json();
        console.log(data);
        tournament.players.length+=1;
        
    }
    componentDidMount(){
        this.props.fetchAllTournaments();
       
        
    }
   
   


    
renderAllTournaments(){
  
     
        return this.props.allTournaments.map(tournament=>{
           var arr=JSON.stringify(tournament.players);
          
           
            return(
                    <div className="card darken-1 kartica" key={tournament._id}>
                        <div className="card-content">
                            <span className="card-title naslov">{tournament.title}</span>

                            <p>Tournament Creator : {tournament.tournamentCreator}</p>
                            <p>Type of Tournament : {tournament.type}</p>
                            <p>
                               Number of Players : {tournament.numberOfPlayers}
                            </p>
                            <p>
                               Participation : {tournament.participation} credits
                            </p>
                            <div>
                              Players : {arr}
                            
                        
                            </div>
                            
                            <button  className=" btn-flat white-text button12" type="submit"
                onClick={()=>this.tesFunction(tournament)}>
                               Join Tournament
                               
                              </button>
                
                            <div className="card-action">
               
                            </div>
                        </div>
                
                    </div>
            )
        });
    }
    render(){
        console.log(this.props.form);
        return(
            <div>
                {this.renderAllTournaments()}
               
               
            </div>
            
        );
    }
   
}



function mapStateToProps(state){
    return{allTournaments : state.allTournaments,form:state.form,auth:state.auth}
}
export default connect (mapStateToProps,{fetchAllTournaments})(withRouter(AllTournaments));