# SteemAPI UI

Steem Interactive API explorer, brought to you by eSteem and Busy, built on top of [steemjs](https://github.com/adcpm/steem) by @fabien. Gives users and developers quickly get started with their development of applications on top of Steem.

## How to Use It

### Download
You can use the SteemAPI code AS-IS!  No need to build or recompile--just clone this repo and use the pre-built files in the `docs` folder.  If you like steemapi as-is, stop here.

##### Browser support
SteemAPI works in all evergreen desktop browsers (Chrome, Safari, Firefox). Internet Explorer support is version 8 (IE8) and above.

### Build
You can rebuild SteemAPI on your own to tweak it or just so you can say you did.  To do so, follow these steps:

* Ensure you have `nodejs` 4.0 or greater installed, and on your classpath.
* Windows Users: Please install [Python](https://www.python.org/downloads/windows/) before following the guidelines below for node-gyp rebuild to run.

1. `npm install`
2. `npm run build`
3. You should see the distribution under the docs folder. Open [`./docs/index.html`](./docs/index.html) to launch SteemAPI UI in a browser

### Development
Use `npm run serve` to make a new build, watch for changes, and serve the result at http://localhost:8080/.


## How to Improve It

Create your own fork of [esteemapp/steemapi](https://github.com/esteemapp/steemapi)

To share your changes, [submit a pull request](https://github.com/esteemapp/steemapi/pull/new/master).


## License

Copyright 2017 eSteem

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

---
<img src="http://esteem.ws/files/logo.png" width="200"/>
