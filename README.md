grunt-pub
=========

Dart Pub automation for Grunt

### Usage

```sh
grunt.config.set('pub', {
	options: {
		root:'./.tmp',
		target:'public'
	}
});

grunt.loadNpmTasks('grunt-pub');
```

This will execute "pub build public" in the .tmp folder of the current directory
