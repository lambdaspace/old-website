module.exports = {
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'index.html',     // 'destination': 'source'
        'dist/contact.html': 'contact.html'
      }
    }
  }
};
