function showFileName() {
    var input = document.getElementById('file-upload');
    var output = document.getElementById('file-name');
  
    output.innerHTML = ''; // clear the current content
    if ('files' in input) {
      if (input.files.length == 0) {
        output.innerHTML = 'No file selected';
      } else {
        for (var i = 0; i < input.files.length; i++) {
          output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
        }
      }
    }
  }