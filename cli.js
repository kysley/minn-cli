#!/usr/bin/env node
'use strict';
const getStdin = require('get-stdin');
const meow = require('meow');
const min = require('minn');

const cli = meow(`
	Usage
		$ min <numbers>
		echo <numbers> | min

	Examples
		$ min 99, 2, 1, 4, 5, 8, 29
		1
`);

const input = process.argv.slice(2);

function init(data) {
	console.log(min(data));
}

if (!input && process.stdin.isTTY) {
	console.error('Input required');
	process.exit(1);
}

if (input) {
	init(input);
} else {
	getStdin.then(init);
}
