import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../../context'
//map permet de recuperer chaq objet de notre state et retourner sa valeur
export default class Liste extends Component {
  componentDidMount(){
      console.log('Le composant est bien assemble')
  } 
  
    render(){
        return(
            <Consumer>
                {value=>{
                    return(
                        <React.Fragment>
                            <h1 className="display-4 my-4">Nos contacts</h1>
                            {value.contacts.map(contact=>(
                                <Contact
                                key={contact.id}
                                id={contact.id}
                                nom={contact.nom} 
                                email={contact.email}
                                telephone={contact.telephone}
                                
                                />
                            ))}
                        </React.Fragment>
                    )
                }

                }
            </Consumer>
        )
        
       
                }
            }