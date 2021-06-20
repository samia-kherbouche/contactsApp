import React,{Component} from 'react'
import { act } from 'react-dom/test-utils';


const Context=React.createContext();
const reducer=(state,action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
               contacts:state.contacts.filter(contact =>
                   contact.id!==action.payload
               ) 
            };
            case 'ADD_CONTACT':
                return{
                    contacts:[action.payload,...state.contacts]
                }
            default:return state;
    }
}
export class Provider extends Component{
    state={
        contacts:[
        {
            id:1,
            nom:'samia kherbouche',
            email:'kherbouchesamia@gmail.com',
            telephone:'0782159983'

        },
        {
            id:2,
            nom:'Saliha kebir',
            email:'saliha.kebir@gmail.com',
            telephone:'0782205066'

        },
        {
            id:3,
            nom:'mira kherbouche',
            email:'mira.rs@gmail.com',
            telephone:'0782159980'

        }
    ],
    dispatch:action=>{
        this.setState(state=>reducer(state,action))
    }

    }
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer=Context.Consumer;