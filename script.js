/* Selectors
   '$' is a selector used to access elements from HTML document (Based on CSS Selectors and also has custom selectors)
   $(elementName).actionFunction() ->
   let variableName = document.getElementByTagName(elementName)
   variableName.actionFunction()
*/
function funcTagNameSelector() {
  $("h2").css("font-style", "italic");
}
function funcClassSelector() {
  // Changes all elements with same class
  $(".class-selector-para").css("font-weight", "bold");
}
function funcIdSelector() {
  // Changes only the first element if 2 elements have same ID
  $("#id-selector-div1").css("background-color", "lightsalmon");
}
function funcMultipleIdSelector() {
  // Changes both the specified Id
  $("#id-selector-div1,#id-selector-div3").css("background-color", "violet");
}
function funcMultipleSelector() {
  //   Changes all the specified elements
  $("h2,.multiple-selector-class,#multiple-selector-id").css("color", "purple");
}
function funcChildSelector() {
  $("#id-selector-div1 p").fadeToggle(3000);
}
function funcImmediateChildSelector() {
  $("body > p").css("color", "brown");
}
function funcFirstElementSelector() {
  // Available only for 'first' and 'last'
  $("li:first").fadeToggle();
}
function funcLastElementSelector() {
  $("li:last").fadeToggle();
}
function funcOddElementSelector() {
  // index starts from '0' to 'n-1'
  $("li:odd").fadeToggle();
}
function funcEvenElementSelector() {
  // '0' is Even
  $("li:even").fadeToggle();
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Events
function funcEventPureJS() {
  document.getElementById("eventImg").style.width = "350px";
}
$("#eventButton").click(funcEventJQuery);
function funcEventJQuery() {
  $("#eventImg").css("width", "250px");
}

// Ready Function -> Called after the whole 'HTML Document' is fully loaded
$("document").ready(function () {
  // JQuery Part is to be kept in a 'Queue' until the document is fully loaded
  /* Example:
        Problem:
            A large website with lots of buttons and many contents, where the buttons perform some actions on clicking
            If User's Internet speed is not adequate, then the buttons load before loading of other contents
            It affects if the user presses any button before the loading of contents, there is no way to write jQuery for such 'click' events
        Solution:
            The HTML Document should be loaded fully before the JQuery Part Works
            'ready' event -> contains all other event functions inside it */

  // Anonymous Function
  $("#readyEventButton").click(function () {
    $("#eventImg").css("border", "5px solid brown");
  });

  $("#doubleClick").dblclick(function () {
    $("#eventImg").css("outline", "5px solid grey");
  });

  $("#mouseEvent").mouseenter(funcMouseEnter);
  function funcMouseEnter() {
    $("#eventImg").css("scale", "1.25");
  }
  $("#mouseEvent").mouseleave(funcMouseLeave);
  function funcMouseLeave() {
    $("#eventImg").css("scale", ".75");
  }
  // Combining 'mouseenter' and 'mouseleave'
  $("#hoverEvent").hover(funcMouseEnter, funcMouseLeave);

  // Effects -> Event, condition or state of affairs produced by a cause
  // Time may or maynot be given
  $("#fadeInEffect").click(function () {
    $("#eventImg").fadeIn();
  });
  $("#fadeOutEffect").click(function () {
    $("#eventImg").fadeOut(2000);
  });
  $("#showEffect").click(function () {
    $("#eventImg").show();
  });
  $("#toggleEffect").click(function () {
    $("#eventImg").toggle(2000);
  });
  $("#slideUpEffect").click(function () {
    $("#eventImg").slideUp(2000);
  });
  $("#slideDownEffect").click(function () {
    $("#eventImg").slideDown();
  });
  $("#slideToggleEffect").click(function () {
    $("#eventImg").slideToggle(3000);
  });
  $("#stopEvent").click(function () {
    //   Stops the effect inbetween
    $("#eventImg").stop();
  });
});
// Functions called using 'onclick' attribute cannot be inside 'ready' event function
function funcFadeToogle1() {
  // 'fadeToggle()' is a function defied in 'jQuery.js' library file -> Fadesout the image if it is on the screen and reverts it if button is clicked again
  $("#eventImg").fadeToggle();
}
function funcFadeToogle2() {
  // 'fadeToggle(milliseconds)' -> fades the image for the specified time ('setInterval()')
  $("#eventImg").fadeToggle(3000);
}
function hideEffect() {
  $("#eventImg").hide(3000);
}

// Animate Effect -> Uses CSS Properties on objects to move across the webpage in a particular manner
$("#animateButton").click(function () {
  $("#animateImg").animate(
    {
      left: "150px",
      border: "5px solid brown",
      outline: "5px solid",
      opacity: "1",
      height: "400px",
      width: "400px",
    },
    2000
    // "slow"
    // "fast"
  );
});
