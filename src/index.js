import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AthContext, FirebaseContext } from './store/Contexts'; // Assuming this is your Firebase context
import { app ,db,storage} from './firebase/config'; // Assuming this is your Firebase configuration context


ReactDOM.render(
  <FirebaseContext.Provider value={{ app,db,storage }}>
    <AthContext >
      <App />
    </AthContext>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
