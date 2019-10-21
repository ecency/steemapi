# Interactive SteemAPI

Steem Interactive API explorer, brought to you by eSteem, built on top of [steemjs](https://github.com/steemit/steem-js). Gives users and developers quickly get started with their development of applications on top of Steem.

## How to Use It

### Download
You can use the SteemAPI code AS-IS!  No need to build or recompile--just clone this repo and use the pre-built files in the `docs` folder.  If you like steemapi as-is, stop here.

### Build
You can rebuild SteemAPI on your own to tweak it or just so you can say you did.  To do so, follow these steps:

* Ensure you have `nodejs` 4.0 or greater installed, and on your classpath.
* Windows Users: Please install [Python](https://www.python.org/downloads/windows/) before following the guidelines below for node-gyp rebuild to run.

1. `npm install`
2. `npm run build`
3. You should see the distribution under the docs folder. Open [`./docs/index.html`](./docs/index.html) to launch SteemAPI UI in a browser


## How to Improve It

If you only want to contribute documentation of APIs, please use `swagger.json` file to modify and make a pull request. Example of Definitions are in bottom of the file.

Create your own fork of [esteemapp/steemapi](https://github.com/esteemapp/steemapi)

To share your changes, [submit a pull request](https://github.com/esteemapp/steemapi/pull/new/master).


