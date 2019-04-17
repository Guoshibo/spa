/* global module */
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
          'dist/11-password-visual/index.html':'./11-password-visual/index.html',
          'dist/12-range/index.html':'./12-range/index.html',
          'dist/13-progress/index.html':'./13-progress/index.html',
          'dist/31-echart/index.html':'./31-echart/index.html',
          'dist/32-map/index.html':'./32-map/index.html',
          'dist/33-highlight/index.html':'./33-highlight/index.html',
          'dist/34-excel/index.html':'./34-excel/index.html',
          'dist/41-timer-button/index.html':'./41-timer-button/index.html',
          'dist/42-password-visual/index.html':'./42-password-visual/index.html'
        }
      }
    },   
    cssmin: {
      release:{
        files:{
          'dist/00-template/layout.css':'./00-template/layout.css',
          'dist/10-timer-button/layout.css':'./10-timer-button/layout.css',
          'dist/11-password-visual/layout.css':'./11-password-visual/layout.css',
          'dist/12-range/layout.css':'./12-range/layout.css',
          'dist/13-progress/layout.css':'./13-progress/layout.css',
          'dist/31-echart/layout.css':'./31-echart/layout.css',
          'dist/32-map/layout.css':'./32-map/layout.css',
          'dist/33-highlight/layout.css':'./33-highlight/layout.css',
          'dist/34-excel/layout':'./34-excel/layout.css',
          'dist/41-timer-button/timer-button.css':'./41-timer-button/timer-button.css',
          'dist/42-password-visual/layout.css':'./42-password-visual/layout.css'
        }
      }
    },
    uglify: {
      release:{
        files: {
          'dist/00-template/main.js':'./00-template/main.js',
          'dist/10-timer-button/main.js':'./10-timer-button/main.js',
          'dist/11-password-visual/main.js':'./11-password-visual/main.js',
          'dist/12-range/main.js':'./12-range/main.js',
          'dist/13-progress/main.js':'./13-progress/main.js',
          'dist/31-echart/main.js':'./31-echart/main.js',
          'dist/32-map/main.js':'./32-map/main.js',
          'dist/33-highlight/main.js':'./33-highlight/main.js',
          'dist/34-excel/main.js':'./34-excel/main.js',
          'dist/41-timer-button/timer-button.js':'./41-timer-button/timer-button.js',
          'dist/42-password-visual/main.js':'./42-password-visual/main.js'
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
