import React ,{Component}from 'react';
import { Field,formValues,reduxForm} from 'redux-form';
import TournamentField from './TournamentField';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Select from 'react-select';
import RFReactSelect from '../../RFReactSelect';
import  './TournamentForm.css';
import reducers from '../../reducers';
import * as actions from '../../actions';




class TournamentForm extends Component{
    
    

   render(){
   
        const options1=[
            
            {value: '2', label:'2'},
            {value : '4', label: '4'},
            {value : '8', label: '8'},
        ];
        const options2 =[
            {value : 'Poker', label: 'Poker'},
            {value : 'Pool', label : 'Pool'},
            {value : 'Snooker', label : 'Snooker'},
            {value : 'Chess',label: 'Chess'},
            
        ];
       
 
   
        return(
           
            <div>
                <form onSubmit={this.props.handleSubmit(value=>{console.log(value);
             this.props.CreateTournament(value,this.props.history) })}>
                    <div className="titletour">
                   <label>Tournament Title
                <Field type="text" name="title" component={TournamentField}/>
                </label>
                </div>


               <div className="Select1">
                <label>Type of Tournament
                <Field 
                name="type" component={RFReactSelect} options={options2}/>
                </label>
                </div>

                <div className="Select2">
                <label>Number of Players
                <Field name="numberOfPlayers"options={options1} 
                component={RFReactSelect} />
                  
                </label>
                </div>


                <div className="participation">
                <label>Participation (optional)
                <Field type="number"name="participation" component='input'/>
                </label>
                </div>

                    <div className="prizes">
                <div className="prize1rd">
                <label>Prize for First Place (optional)
                <Field type="text" name="prizesForFirstPlace" component={TournamentField}/>
                </label>
                </div>

                <div className="prize2rd">
                <label>Prize for Secound Place (optional)
                <Field type="text" name="prizesForSecoundPlace" component={TournamentField}/>
                </label>
                </div>

                <div className="prize3rd">
                <label>Prize for ThirdPlace (optional)
                <Field type="text" name="prizesForThirdPlace" component={TournamentField}/>
                </label>
                </div>

                </div>
                <button  
              
                className=" btn-flat white-text button1"type="submit" >Submit
            
                </button>
       
                </form>
                
            </div>
        
        );
       
    }
}

function validate(values){
    const errors={};
    if(!values.title){
        errors.title="You must provide title of tournament";
    }

    if (!values.type){
        errors.type="TASTASET";
}

if (!values.numberOfPlayers){
        errors.numberOfPlayers="TASTASETss";
}
    return errors;

}

function mapStateToProps(state){
    return{formValues : state.form.TournamentForm.values}
}
    

export default reduxForm({
    validate: validate,
    form : 'TournamentForm',
    
    
    
})(connect(mapStateToProps,actions)(withRouter(TournamentForm)))