module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/app.js',
        dest: 'js/app.min.js'
      }
    },

    sass: {
      dist: {
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    },

    shell : {
        jekyllBuild : {
            command : 'jekyll build'
        },
        // jekyllServe : {
        //     command : 'jekyll serve'
        // }
    },

    watch : {
      files : [ 'js/app.js',
                '_layouts/*.html',
                '_posts/*.markdown',
                'sass/*.scss',
                '_config.yml',
                'index.html'],
      tasks : [ 'uglify','sass','shell' ],
      options : {
          spawn : false,
          interrupt : true,
          atBegin : true,
          livereload : true
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: '_site'
        }
      }
    }
      



  });

  // plugin tasks
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');


  grunt.registerTask('default', ['connect','watch']);

};