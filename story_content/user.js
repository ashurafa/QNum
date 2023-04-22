function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Jnp5CX8geT":
        Script1();
        break;
      case "6GviGFdZUyU":
        Script2();
        break;
      case "6RiOYpCIcEg":
        Script3();
        break;
      case "6Ng5MddjBSA":
        Script4();
        break;
  }
}

function Script1()
{
  
var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');

// alert("Slide 1.1 Trigger 1 A");
// ----------------------

script.src = 'story_content/WebObjects/v.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script);

// alert("Slide 1.1 Trigger 1 B");


}

function Script2()
{
  /*
Two steps needed:

1. Copy the following code and add it to the end of the bosy section of the story or index file:

<script 
 src="https://code.responsivevoice.org/responsivevoice.js?key=QWobFfIM";
></script> 


2. Copy the WebObject folder and past it in the output folder. It contains.

*/
}

function Script3()
{
  
// alert("Slide 1.1 Trigger 3 A");

// OnLineVoice();

// alert("Slide 1.1 Trigger 3 B");

}

function Script4()
{
  alert("OnLineVoice Trigger A");

var player = GetPlayer();
var myText = player.GetVar("myText");


alert("OnLineVoice Trigger B");

responsiveVoice.speak(myText , "US English Female");

alert("OnLineVoice Trigger C");

}

