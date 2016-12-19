# grunt-snow-js-retrieval

> A simple task that gets script includes (for now) for unit testing from a SNOW instance.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-snow-js-retrieval --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-snow-js-retrieval');
```

## The "snow_js_retrieval" task

### Overview
In your project's Gruntfile, add a section named `snow_js_retrieval` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  snow_js_retrieval: {
    options: {
		instance: 'https://instance.service-now.com',
		userName: 'username',
		password: 'password',
		query: 'nameSTARTSWITHITCE',
		destination: 'lib/scriptIncludes'
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.instance
Type: `String`
Default value: `''`

The ServiceNow instance you will be running the script against

#### options.userName
Type: `String`
Default value: `''`

The ServiceNow instance user name

#### options.password
Type: `String`
Default value: `''`

The ServiceNow instance password

#### options.query
Type: `String`
Default value: `'nameSTARTSWITHITCE'`

The a specific filter you would like to extract scripts for. Currently it is set to all scripts starting with ITCE.

#### options.destination
Type: `String`
Default value: `'lib/scriptIncludes'`

The local folder you would like to store files to.

### Usage Examples

#### Custom Options
In this example, the task will connect to https://instance.service-now.com with the specified username and password and will search all scripts starting with ITCE. The ones that are found will be placed in the folder 'test/scriptIncludes'

```js
grunt.initConfig({
  snow_js_retrieval: {
    options: {
      instance: 'https://instance.service-now.com',
		userName: 'username',
		password: 'password',
		query: 'nameSTARTSWITHITCE',
		destination: 'test/scriptIncludes'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
