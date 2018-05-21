import React from 'react';
import ReactDOM from 'react-dom';

import Application from 'Application.jsx';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function() {
    console.log('Service Worker Registered');
  });
}

ReactDOM.render(<Application />, document.getElementById('react-root'));
