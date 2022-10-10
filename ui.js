'use strict';
const React = require('react');
const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');
const importJsx = require('import-jsx');
const Table = importJsx('./components/table')

const App = () => (
	<>
		<Gradient name="summer">
			<BigText text="Dollars Bank ATM Welcomes You!!" align='left' font='chrome'/>
		</Gradient>

		<Table/>
	</>
	

);

module.exports = App;
