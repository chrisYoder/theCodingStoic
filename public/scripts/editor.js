

var toolbarOptions = [
	[{ 'font': []}],
  ['bold', 'italic', 'underline'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
 
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  

  
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];



var quill = new Quill('#editor', {
	modules: {
		toolbar: toolbarOptions
	},
    theme: 'snow'
  });

