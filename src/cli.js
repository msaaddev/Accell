const handleError = require('node-cli-handle-error');
const ora = require('ora');

// stacks
const renm = require('./stacks/react-express-node-mongodb');
const rfm = require('./stacks/react-flask-mongodb');
const rdm = require('./stacks/react-django-mongodb');
const nenm = require('./stacks/next-express-node-mongodb');
const nfm = require('./stacks/next-flask-mongodb');
const ndm = require('./stacks/next-django-mongodb');
const venm = require('./stacks/vue-express-node-mongodb');
const vfm = require('./stacks/vue-flask-mongodb');
const vdm = require('./stacks/vue-django-mongodb');
const renf = require('./stacks/react-express-node-firebase');
const rff = require('./stacks/react-flask-firebase');
const rdf = require('./stacks/react-django-firebase');
const nenf = require('./stacks/next-express-node-firebase');
const nff = require('./stacks/next-flask-firebase');
const ndf = require('./stacks/next-django-firebase');
const venf = require('./stacks/vue-express-node-firebase');
const vff = require('./stacks/vue-flask-firebase');
const vdf = require('./stacks/vue-django-firebase');
const rensql = require('./stacks/react-express-node-mysql');

module.exports = async input => {
	const { projName, frontend, backend, database } = input;

	const spinner = ora();

	// platform
	const isWindows = process.platform === 'win32' ? true : false;

	// current directory path
	let path;
	isWindows
		? (path = `${process.cwd()}\\${projName}`)
		: (path = `${process.cwd()}/${projName}`);

	try {
		console.log();

		// react.js, node.js, express.js, mongodb boilerplate
		if (
			frontend === 'React.js' &&
			backend === 'Node.js' &&
			database === 'MongoDB'
		) {
			await renm(projName, isWindows, path);
		}

		// react.js, flask, mongodb boilerplate
		if (
			frontend === 'React.js' &&
			backend === 'Flask' &&
			database === 'MongoDB'
		) {
			await rfm(projName, isWindows, path);
		}

		// react.js, django, mongodb boilerplate
		if (
			frontend === 'React.js' &&
			backend === 'Django' &&
			database === 'MongoDB'
		) {
			await rdm(projName, isWindows, path);
		}

		// next.js, node.js, express.js, mongodb boilerplate
		if (
			frontend === 'Next.js' &&
			backend === 'Node.js' &&
			database === 'MongoDB'
		) {
			await nenm(projName, isWindows, path);
		}

		// next.js, flask, mongodb boilerplate
		if (
			frontend === 'Next.js' &&
			backend === 'Flask' &&
			database === 'MongoDB'
		) {
			await nfm(projName, isWindows, path);
		}

		// next.js, django, mongodb boilerplate
		if (
			frontend === 'Next.js' &&
			backend === 'Django' &&
			database === 'MongoDB'
		) {
			await ndm(projName, isWindows, path);
		}

		// vue.js, node.js, express.js, mongodb boilerplate
		if (
			frontend === 'Vue.js' &&
			backend === 'Node.js' &&
			database === 'MongoDB'
		) {
			await venm(projName, isWindows, path);
		}

		// vue.js, flask, mongodb boilerplate
		if (
			frontend === 'Vue.js' &&
			backend === 'Flask' &&
			database === 'MongoDB'
		) {
			await vfm(projName, isWindows, path);
		}

		// vue.js, django, mongodb boilerplate
		if (
			frontend === 'Vue.js' &&
			backend === 'Django' &&
			database === 'MongoDB'
		) {
			await vdm(projName, isWindows, path);
		}

		// react.js, node, express, firebase boilerplate
		if (
			frontend === 'React.js' &&
			backend === 'Node.js' &&
			database === 'Firebase'
		) {
			await renf(projName, isWindows, path);
		}

		// react.js, flask, firebase boilerplate
		if (
			frontend === 'React.js' &&
			backend === 'Flask' &&
			database === 'Firebase'
		) {
			await rff(projName, isWindows, path);
		}

		// react.js, django, firebase boilerplate
		if (
			frontend === 'React.js' &&
			backend === 'Django' &&
			database === 'Firebase'
		) {
			await rdf(projName, isWindows, path);
		}

		// next.js, node.js, express.js, firebase boilerplate
		if (
			frontend === 'Next.js' &&
			backend === 'Node.js' &&
			database === 'Firebase'
		) {
			await nenf(projName, isWindows, path);
		}

		// next.js, flask, firebase boilerplate
		if (
			frontend === 'Next.js' &&
			backend === 'Flask' &&
			database === 'Firebase'
		) {
			await nff(projName, isWindows, path);
		}

		// next.js, django, firebase boilerplate
		if (
			frontend === 'Next.js' &&
			backend === 'Django' &&
			database === 'Firebase'
		) {
			await ndf(projName, isWindows, path);
		}

		// vue.js, node.js, express.js, firebase boilerplate
		if (
			frontend === 'Vue.js' &&
			backend === 'Node.js' &&
			database === 'Firebase'
		) {
			await venf(projName, isWindows, path);
		}

		// vue.js, flask, firebase boilerplate
		if (
			frontend === 'Vue.js' &&
			backend === 'Flask' &&
			database === 'Firebase'
		) {
			await vff(projName, isWindows, path);
		}

		// vue.js, django, firebase boilerplate
		if (
			frontend === 'Vue.js' &&
			backend === 'Django' &&
			database === 'Firebase'
		) {
			await vdf(projName, isWindows, path);
		}

		// react.js, node, express, firebase boilerplate
		if (
			frontend === 'React.js' &&
			backend === 'Node.js' &&
			database === 'MySQL'
		) {
			await rensql(projName, isWindows, path);
		}

		// react.js, flask, firebase boilerplate
		if (
			frontend === 'React.js' &&
			backend === 'Flask' &&
			database === 'MySQL'
		) {
		}

		// react.js, django, firebase boilerplate
		if (
			frontend === 'React.js' &&
			backend === 'Django' &&
			database === 'MySQL'
		) {
		}

		// next.js, node.js, express.js, firebase boilerplate
		if (
			frontend === 'Next.js' &&
			backend === 'Node.js' &&
			database === 'MySQL'
		) {
		}

		// next.js, flask, firebase boilerplate
		if (
			frontend === 'Next.js' &&
			backend === 'Flask' &&
			database === 'MySQL'
		) {
		}

		// next.js, django, firebase boilerplate
		if (
			frontend === 'Next.js' &&
			backend === 'Django' &&
			database === 'MySQL'
		) {
		}

		// vue.js, node.js, express.js, firebase boilerplate
		if (
			frontend === 'Vue.js' &&
			backend === 'Node.js' &&
			database === 'MySQL'
		) {
		}

		// vue.js, flask, firebase boilerplate
		if (
			frontend === 'Vue.js' &&
			backend === 'Flask' &&
			database === 'MySQL'
		) {
		}

		// vue.js, django, firebase boilerplate
		if (
			frontend === 'Vue.js' &&
			backend === 'Django' &&
			database === 'MySQL'
		) {
		}

		console.log();
	} catch (err) {
		spinner.fail(`Couldn't create the project.`);
		console.log();
		handleError(`Failed while generating the boilerplate`, err);
	}
};
