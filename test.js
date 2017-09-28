'use strict';
import test from 'ava';
import execa from 'execa';

test(async t => {
	const {stdout} = await execa('./cli.js', [1, 2, 3]);
	t.true(stdout === '1');
});
