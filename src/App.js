import React,{Component} from 'react';
import Header from './composants/interface/Header';
import Liste from './composants/contacts/Liste';
import {Provider} from './context';
import AddContact from './composants/contacts/AddContact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Apropos from './composants/pages/Apropos';
import Erreur from './composants/pages/Erreur'
//on met le code js entre {}
//props sert a ecrire des propriete et faire passer les donnees dun composant a autre
//le state sert a rendre un composant dynamic et MAJ les donnes de ce composant
class App extends Component {
  
  render(){
    
    return (
      <Provider>
        <Router>

          <div className="App">
            <Header/>
            <div className="container">
              <Switch>

              {/* <AddContact/> */}
              <Route exact path="/ajout" component={AddContact}/>
              <Route exact path="/Liste" component={Liste}/>
              <Route exact path="/" component={Liste}/>
              <Route exact path="/apropos" component={Apropos}/>
              <Route component={Erreur}/>
              </Switch>
            </div>
            
          </div>
        </Router>
      </Provider>
    );
  }
}
  

export default App;
