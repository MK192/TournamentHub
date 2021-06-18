import React, {Component}from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect }from 'react-redux';
import * as actions from '../actions';
import  keys  from '../keys' ;

class Payments extends Component{

    render(){

        return(
            <StripeCheckout 
             amount={1000}/*100 centi- 1 dolar (1 kredit-dolar)*/
             token={token=>this.props.handleToken(token)}
             stripeKey={keys.stripePublishableKey}
             name="TournamentHub"
             description="Buy 10 credits for 10 $"
             >
                 <button className="btn credits">
                     Add Credits
                 </button>
                 </StripeCheckout>

        );
    }
}
export default connect(null,actions)(Payments);