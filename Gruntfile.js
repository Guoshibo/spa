module.exports = function(grunt){
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'     
      },
      target:'./00-template/main.js'
    },
    csslint: {
      options: {
                csslintrc: '.csslintrc'   
      },
        src: ['./00-template/layout.css']  
        
    },
    htmlhint: {
      options: {
                htmlhintrc: '.htmlhintrc'    
      },
        src: '*.html'          
                
    },  
  htmlmin: {
      dist: {                                    
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   
          'dist/index.html': 'index.html',   
          'dist/00-template/index.html':'./00-template/index.html',
          'dist/10-timer-button/index.html':'./10-timer-button/index.html',
          'dist/11.password-visual/index.html':'./11-password-visual/index.html',
          'dist/12-range/index.html':'./12-range/index.html',
          'dist/13.html':'./13-progress/index.html'
        }
      }
    },   
    cssmin: {
      release:{
        files:{
              'dist/00.css':'./00-template/layout.css',
              'dist/10.css':'./10-timer-button/layout.css',
              'dist/11.css':'./11-password-visual/layout.css',
              'dist/12.css':'./12-range/layout.css',
              'dist/13.css':'./13-progress/layout.css'
        }
      }
    },
    uglify: {
      release:{
        files: {
                'dist/00.js':'./00-template/main.js',
                'dist/10.js':'./10-timer-button/main.js',
                'dist/11.js':'./11-password-visual/main.js',
                'dist/12.js':'./12-range/main.js',
                'dist/13.js':'./13-progress/main.js'

        } 
                   
    }            
  },

});

grunt.loadNpmTasks('grunt-contrib-csslint');
grunt.loadNpmTasks('grunt-htmlhint');
grunt.loadNpmTasks('grunt-eslint');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
                  

grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint','uglify','cssmin','htmlmin']);

};
