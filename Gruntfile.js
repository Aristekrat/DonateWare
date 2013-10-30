module.exports = function(grunt)
{
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
			concat: {
				options: {
					// define a string to put between each file in the concatenated output
					separator: ';'
				},
				dist: {
					// the files to concatenate
					src: ['scripts/library/*.js'],
					// the location of the resulting JS file
					dest: 'scripts/library/compress/<%= pkg.name %>.js'
				}
			},
			
			uglify: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				dist: {
					files: {
						'scripts/library/compress/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
					}
				}
			} 
			
	});
		
		// Load the plugin that provides the "uglify" task.
		/* grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-concat'); */
		//grunt.loadNpmTasks('grunt-contrib-watch');
		
		// Default task(s).
		/*grunt.registerTask('default', ['concat', 'uglify']);*/
		
	};
