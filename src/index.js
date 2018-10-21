import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

import { getData } from './data';

getData()
    .then((response) =>
    {
        ReactDOM.render(<App />, document.getElementById('root'));
        registerServiceWorker();
    })

