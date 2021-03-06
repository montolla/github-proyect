const loader = require('monaco-loader');
const { ipcRenderer} = require('electron');
const fs = require('fs');

loader().then(monaco => {
  let editor = monaco.editor.create(
    document.querySelector('#app'),
    {
      language:'javascript',
      theme:'vs-dark',
      automaticlayout:true
    }
  )

  ipcRenderer.on('open-file', (e,url) => {
    fs.readFile(url.slice(7),'utf-8',(err,data) => {
      editor.setModel(monaco.editor.createModel(data,'javascript'));
    })
  });
})
