import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMyTournaments} from '../actions/index';
import './UserTournaments.css';



class UserTournaments extends Component {

    componentDidMount(){
        this.props.fetchMyTournaments();
        
    }

    renderMyTournaments(){
        return this.props.myTournament.map(tournament=>{
            var arr=JSON.stringify(tournament.players);
           
            return(
              
                    <div className="card darken-1 kartica" key={tournament._id}>
                        <div className="card-content">
                            <span className="card-title titl">{tournament.title}</span>
                           

                            <p>Tournament Creator : {tournament.tournamentCreator}</p>
                            <p>Type of Tournament : {tournament.type}</p>
                            <p>
                               Number of Players : {tournament.numberOfPlayers}
                            </p>
                            <p>
                               Participation : {tournament.participation} credits
                            </p>
                            <p>
                                Players : {arr}
                            </p>
                            <div className="card-action">
                                <a href="/bracket">Tournament Brackets</a>
                            </div>
                        </div>
                    </div>
                   
            )
        });
    }

    render(){
        
        return(
            <div>
                {this.renderMyTournaments()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return{myTournament : state.myTournament,auth:state.auth}
}
export default connect (mapStateToProps,{fetchMyTournaments})(UserTournaments);