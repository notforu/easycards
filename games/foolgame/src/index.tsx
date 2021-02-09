import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FoolGameProvider } from './context';

ReactDOM.render(
	<React.StrictMode>
		<FoolGameProvider>
			<App />
		</FoolGameProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
