import React,{Component} from 'react';
import { render } from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import {connect}from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import TournamentForm from './Tournament/TournamentForm';
import AllTournaments from './AllTournaments';
import TournamentBracket from './Tournament/TournamentBracket';




const Surveynew=()=><h2>SurveyNew</h2>


class  App extends Component{
    componentDidMount(){
     this.props.fetchUser();
     
    }
render(){

    return(
        <div >
        <div className="container">
            <BrowserRouter>
            <div >
                <Header />
                
                <Route exact path='/'component={Landing}/>
                <Route exact path='/dashboard'component={Dashboard}/>
                <Route exact path='/createTournament' component={TournamentForm}/>
                <Route exact path='/findTournament' component={AllTournaments}/>
                <Route exact path='/bracket' component={TournamentBracket}/>
                
            </div>
            </BrowserRouter>
        </div>
        </div>
    );
  }
};
export default connect(null, actions) (App);