import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllTournaments,fetchUser,fetchNewPlayer}from '../../actions/index';

import  './TournamentBracket.css';

const mongoose=require('mongoose');

const Tournament=mongoose.model('tournaments');


class TournamentBracket extends Component{
    async tesFunction (tournament){
      
        const response = await fetch('/api/fields', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({playerId:tournament._id,field1:tournament.fild1,
                tournamentC:tournament.tournamentCreator,field2:tournament.fild2,
                field3:tournament.fild3, field4:tournament.fild4, field5:tournament.fild5,
                field6:tournament.fild6, field7:tournament.fild7, field8:tournament.fild8,
                field9:tournament.fild9, field10:tournament.fild10, field11:tournament.fild11,
                field12:tournament.fild12, field13:tournament.fild13, field14:tournament.fild14,
                field15:tournament.fild15
        })
        });
    }
        
    constructor (props) {
        super(props);
        this.state = {
         
            inputText: ''
        };
      }
   
      
      onTodoChange(value){
        this.setState({
            inputText: value
            
        });
       
        
    }
      

    

    componentDidMount(){
        this.props.fetchAllTournaments();
       
        
    }
   
    renderAllTournaments(){
     console.log(this.props.allTournaments[3])
     console.log(this.props.allTournaments.fild1);
       var arr=[];
      
        return this.props.allTournaments.map((tournament)=>{
       console.log(tournament.tournamentCreator);
        
           var arr=JSON.stringify(tournament.players);
         var br=''
          switch(tournament.numberOfPlayers){
            
              case '2': 
           
            return(
                
                    <div className="card darken-1 kartica2" key={tournament._id}>
                        <div className="card-content">
                            <span className="card-title title">{tournament.title}</span>
                            <p>Round One</p>
                            <div className="lefttab2">
                                <input type='text' onChange={(e)=>{tournament.fild1=e.target.value}}
                               placeholder={tournament.fild1}
                                
                                />
                                </div >
                                <div className="righttab2">
                                    <p>Winner</p>
                                    <input type="text"onChange={(e)=>{tournament.fild2=e.target.value}}
                               placeholder={tournament.fild2}
                                  />
                                </div>
                                <div className="lefttab2">
                                    <input type="text"onChange={(e)=>{tournament.fild3=e.target.value}}
                               placeholder={tournament.fild3}
                                     
                                     />
                                </div>
                            
                        
                            </div>
                            
                            <button  className=" btn-flat white-text b1  " type="submit"
                               onClick={()=>{this.tesFunction(tournament);}}>
                              Save Changes
                               
                              </button>
                
                            <div className="card-action">
               
                            </div>
                        </div>
                
                   
            );
            case '4':
                return(
                    <div className="card darken-1 kartica2" key={tournament._id}>
                        <div className="card-content">
                            <span className="card-title title">{tournament.title}</span>
                            <p>Round One</p>
                            <div className="lefttab4">
                                <input type='text'onChange={(e)=>{tournament.fild1=e.target.value}}
                               placeholder={tournament.fild1} />
                                </div >
                                <div className="righttab4">
                                    <p>Finals</p>
                                    <input type="text"onChange={(e)=>{tournament.fild2=e.target.value}}
                               placeholder={tournament.fild2}/>
                                </div>
                                <div className="lefttab4">
                                    <input type="text"onChange={(e)=>{tournament.fild3=e.target.value}}
                               placeholder={tournament.fild3}/>
                                </div>
                                
                                <div className="middletab4">
                                <p>Winner</p>
                                    <input type="text"onChange={(e)=>{tournament.fild4=e.target.value}}
                               placeholder={tournament.fild4}/>
                                </div>
                              
                                <div className="lefttab4">
                                    <input type="text"onChange={(e)=>{tournament.fild5=e.target.value}}
                               placeholder={tournament.fild5}/>
                                </div>
                              
                                <div className="righttab4">
                                    <input type="text"onChange={(e)=>{tournament.fild6=e.target.value}}
                               placeholder={tournament.fild6}/>
                                </div>
                                <div className="lefttab4">
                                    <input type="text"onChange={(e)=>{tournament.fild7=e.target.value}}
                               placeholder={tournament.fild7}/>
                                </div>
                        
                            </div>
                            
                            <button  className=" btn-flat white-text  b1" type="submit"
               onClick={()=>{this.tesFunction(tournament);}}>
                              Save Changes
                               
                              </button>
                
                            <div className="card-action">
               
                            </div>
                        </div>
                
                   
            );
            case '8':{
                return(
                    <div className="card darken-1 kartica2" key={tournament._id}>
                        <div className="card-content">
                            <span className="card-title title">{tournament.title}</span>
                            <p >Round One</p>
                            <div className="lefttab8">
                                <input type='text'onChange={(e)=>{tournament.fild1=e.target.value}}
                               placeholder={tournament.fild1}/>
                                </div >
                                <div className="lefttab88">
                                    <p>Semi-Finals</p>
                                    <input type="text"onChange={(e)=>{tournament.fild2=e.target.value}}
                               placeholder={tournament.fild2}/>
                                </div>
                                <div className="lefttab8">
                                    <input type="text"onChange={(e)=>{tournament.fild3=e.target.value}}
                               placeholder={tournament.fild3}/>
                                </div>
                                
                                <div className="middletab8">
                                <p>Finals</p>
                                    <input type="text"onChange={(e)=>{tournament.fild4=e.target.value}}
                               placeholder={tournament.fild4}/>
                                </div>
                              
                                <div className="lefttab8">
                                    <input type="text"onChange={(e)=>{tournament.fild5=e.target.value}}
                               placeholder={tournament.fild5}/>
                                </div>
                              
                                <div className="lefttab88">
                                    <input type="text"onChange={(e)=>{tournament.fild6=e.target.value}}
                               placeholder={tournament.fild6}/>
                                </div>
                                
                                <div className="lefttab8">
                                    <input type="text"onChange={(e)=>{tournament.fild7=e.target.value}}
                               placeholder={tournament.fild7}/>
                                </div>
                                <div className="righttab8">
                                    <p>Winner</p>
                                    <input type="text"onChange={(e)=>{tournament.fild8=e.target.value}}
                               placeholder={tournament.fild8}/>
                                </div>
                                <div className="lefttab8">
                                    <input type="text"onChange={(e)=>{tournament.fild9=e.target.value}}
                               placeholder={tournament.fild9}/>
                                </div>
                                <div className="lefttab88">
                                    <input type="text"onChange={(e)=>{tournament.fild10=e.target.value}}
                               placeholder={tournament.fild10}/>
                                </div>
                                <div className="lefttab8">
                                    <input type="text"onChange={(e)=>{tournament.fild11=e.target.value}}
                               placeholder={tournament.fild11}/>
                                </div>
                                <div className="middletab8">
                                    <input type="text"onChange={(e)=>{tournament.fild12=e.target.value}}
                               placeholder={tournament.fild12}/>
                                </div>

                                 <div className="lefttab8">
                                    <input type="text"onChange={(e)=>{tournament.fild13=e.target.value}}
                               placeholder={tournament.fild13}/>
                                </div>
                                <div className="lefttab88">
                                    <input type="text"onChange={(e)=>{tournament.fild14=e.target.value}}
                               placeholder={tournament.fild14}/>
                                </div>
                                <div className="lefttab8">
                                    <input type="text"onChange={(e)=>{tournament.fild15=e.target.value}}
                               placeholder={tournament.fild15}/>
                                </div>
                            <button  className=" btn-flat white-text  b2" type="submit"
                             onClick={()=>{this.tesFunction(tournament);}}   >
                                Save Changes
                               
                              </button>
                
                            <div className="card-action">
               </div>
                            </div>
                        </div>
                
                   
            );
            }
            }
          });
        }
    render(){
       
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
export default connect (mapStateToProps,{fetchAllTournaments})(TournamentBracket);

