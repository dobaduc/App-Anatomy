var config = {
  tabData: {
    tab1: [
      '<h2>INTRODUCTION TO DHTINY</h2>'+
      'Firstly, this library is written to make javascript source code shorter, stronger and more reusable. DHTiny brings a set of â€œshorcutâ€ attributes and function name to help web developers write strong inline commands, and allows us extend that set freely later.'+
      '<br/>Secondly, DHTiny provides a lot of methods used for quick DOM processing. Because I overloaded almost all of them, web developers just have to remember a few function names, but can do many kinds of job (Eg: According to given parameters, a method can be a GET or SET method, at both object scope and global scope at the same time).' +
      '<br/>Thirdly, DHTiny gives support to cross-browser, AJAX & object-oriented programming. Some people might find that prototype extending and instance management are quite interesting functionalities of DHTiny.' +
      '<br/>Latest version of DHTiny is 0.5.1, tested on IE 6+, Firefox 2+, Opera 9+, Mac Safari for Win 3+.'+
      
      '<br/><h2>THE IDEA OF WRITING A JAVASCRIPT LIBRARY FROM SCRATCH</h2>'+
      
      'I have just started writing Web 2.0 applications for nearly 7 months. Formerly, javascript in my thoughts was just something that is used to support web designing and merely create some mediocre effects on web browser, not a fully-feartured OOP language such as C++ or Java. But when I spent some days in playing around with AJAX, trying creating some reusable web components by javascript, I found that a prototype language like javascript can do much more than that.'+
      "<br/>Because JS is a portable programming language that can be coded and executed almost anywhere without a specific compiler, I felt the fun in writing JS snippets with just a plain text editor then test them on web browsers in my leisure time. Everything was fine until I had to build a really big web component. I get bored with so many problems (cross-browser, long syntax, OOP,...). In fact, those problems can be solved quite well by using a JS library. But I don't like to attach a heavy library with some thousands line of code to my web applications, don't want to spend much time on learning new sophisticated syntax, and besides, no one of currently most famous JS librarys can satisfy my coding style."+
      "<br>Finally, I decided to write a whole new little library from scratch, in order to be able to write JS code in the way that I like (short, flexible, and strong), and never care about the weight of it. After 1 months without any Sunday or Saturday, Iâ€™ve finished my library DHTiny while writing another project for the customer."+
      "<br/>I don't aim my best efforts at making my DHTiny to be a well-known one, but I hope that some people will encourage my ideas including inside it. Now take a look at DHTiny developer's guide to see how it works." +
      "<br/><br/>Happy coding with DHTiny!"
    ],
    tab2: [
      'The "default" package contains the core of the app. It is represented by the directory /client/default.',
      'The main start file for this app is index.html - it\'s full path is /client/default/index.html.',
      'To begin exploring this app, start by looking at the index.html file.',
      'The main JavaScript for this app is in init.js - here we initialise the contents of the tabs, and set up scrolling.',
      'This app uses iScroll to manage scrolling of content that flows outside of the viewport. To demonstrate the use of this library, we\'ve added some generic text to this tab.',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat sem, tristique dignissim facilisis sit amet, congue ac sem. Ut nec consectetur neque. Ut sit amet dui leo. Aliquam elementum posuere tempus. Sed et mi elit, sed ultricies leo. Ut non nisi orci, sit amet sagittis justo. Mauris rutrum dignissim lacus, eu mollis sem facilisis in. Curabitur sit amet est ligula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris sit amet accumsan arcu.",
      "Nam congue fringilla odio non pulvinar. In id neque leo, vitae vehicula massa. Cras varius orci posuere massa congue quis vulputate libero varius. Quisque rutrum tellus vel nisi interdum id congue mauris mattis. Proin suscipit elit id magna blandit dignissim facilisis tellus pharetra. Aenean justo quam, egestas in ornare ac, gravida in leo. Donec viverra ante vel lectus consectetur vitae consectetur justo euismod. Etiam ligula sem, tristique sed sollicitudin vitae, pharetra vel sapien. Nam non sem dignissim velit fermentum tincidunt sit amet sit amet lectus. Integer lobortis luctus tortor et tempor. Aliquam id molestie libero. Nunc erat risus, convallis quis feugiat at, lobortis non orci. Sed a felis ante, ut rhoncus massa. Suspendisse potenti."
    ],
    tab3: [
      'The extra packages contain an override prefs.js which positions the tabs at different areas on screen.',
      'The iOS and Android packages contain different UI themes - which consist of some different css and different images.',
      'Try adding each of these packages to the Studio Preview under the Configuration accordion item and see the differences after refreshing this preview.'
    ],
    tab4: [
      'The content for the tabs in this app are configured in /shared/config.js',
      'When the app starts up, the latest config is read from the server, and used.',
      'If the config can\'t be retrieved, a fallback of the last known configuration is used.',
      'If there was no last configuration, the app defaults to using the config bundled with the app.',
      'To demonstrate the usefulness of this pattern, the Reload button can be used to update the tab contents after the app has been deployed. From the Studio, edit the contents for any of the tab data in /shared/config.js (after deploying the app to a device) and press the Reload button.'
    ]
  }
};

exports.config = config;
