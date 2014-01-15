module.exports = function (grunt) {
	// grunt includes copy of underscore library: 
	// node_modules/grunt/node_modules/underscore.string/dist/underscore.string.min.js

	var _ = grunt.util._; // lodash

	// new task - homepage
	// parameter target is a configuration object from Gruntfile.js: homepage.dev in our case
	grunt.registerTask("homepage", "generates a homepage html file for our app", function (target) {
		// define needed variables
		var context, source, targetConfig, template;

		// we need to get a context of a template that we added
		target = target || 'dist';
		// if there are no config specified below - show an error
		this.requiresConfig('homepage.template');
		this.requiresConfig('homepage.' + target); // output: homepage.dev

		// let's grub a template
		template = grunt.config.get('homepage.template');
		// let's grub a configuration
		targetConfig = grunt.config.get('homepage.' + target);
		// let's grub a source file
		source = grunt.file.read(template);
		// let's grub a context
		context = _(grunt.config.get()).extend(targetConfig.context);
		grunt.file.write(targetConfig.dest, _(source).template(context));
		grunt.log.writeln('Homepage HTML written ' + targetConfig.dest);
	});
};