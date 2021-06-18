import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';
import './Header.css';
class Header extends Component {

    renderContent(){
        switch(this.props.auth){
            case null :
                        
            case false:
                return (

                    <li><a href="/auth/google">Login with Google</a></li>
                )

            default :
                return [ 
                   
                    <li key="1"><Payments/></li>,
                    <li key="2" style={{margin:'0 15px'}}>Credits : {this.props.auth.credits}</li>,
                    <li key="4"><Link to="/bracket">Tournament Brackets</Link></li>,
                <li key="3"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render(){
       
        return(
            <nav>
                <div className="nav-wrapper navigation">
                    <Link to={this.props.auth ?'/dashboard':'/'}
                     className="left brand-logo ">
                        TournamentHub
                        <i class="large material-icons right">assistant_photo</i>
                    </Link>
                   
                    <ul className="right">
                    
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return{auth : state.auth};
}
export default connect(mapStateToProps) (Header);