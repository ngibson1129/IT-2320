var dynamicObject = {};
dynamicObject.Name = "Anything";
dynamicObject.Size = "Whatever";
dynamicObject.ThankYouText ="Thank You!";

function ToggleHighlight()
{
       var captions = document.getElementsByClassName("ferrets-playing-caption");
       var images = document.getElementsByClassName("ferrets-playing-images");
       var hImages = document.getElementsByClassName("ferrets-playing-images-highlight");
       
       var captionText;
       if (images[0] != null)
       {
          captions[0].innerHTML = "Just set ferrets-playing Highlight ON";
          images[0].className = "ferrets-playing-images-highlight";
       }
       else 
       {
          captions[0].innerHTML = "Just set ferrets-playing Highlight OFF";
          hImages[0].className = "ferrets-playing-images"; 
       }

}

function MouseOver(x)
{
         x.className = "list-item-highlight"; 
}

function MouseOut(x)
{
         x.className = ""; 
}

function TextInputChanged(input)
{
     var page = document.getElementsByClassName("ferrets_webpage")[0];
     var footer = document.getElementsByClassName("footer")[0];     
     page.removeChild(input);
     footer.innerHTML = dynamicObject.ThankYouText;
}

