/**
 * Pure-vanilla JS, no jQuery.
 * No ES6 in here as we're not pre-processing (hence the vars).
 * @author Dan Shirley
 */
window.hmrcNS = function() {
  var noJsClass = 'no-js';

  /**
   * Set help text to anchor element, which is revealed with JS.
   */
  var setNiNumberHelpText = function() {
    var helpTextElement = document.getElementById('ni-number-help-text')
    var anchorElement = document.getElementById("ni-number-help-prompt");

    anchorElement.setAttribute('title', helpTextElement.textContent);
    anchorElement.style.display = 'inline';
  }

  var hideNoJsContent = function() {
    var noJsElements = document.getElementsByClassName(noJsClass);

    for (var x = 0; x < noJsElements.length; x++) {
      noJsElements[x].style.display = 'none';
    }
  }

  return {
    doJsEnabledActions: function() {
      setNiNumberHelpText();
      hideNoJsContent();
    }
  }
}();

// Run on DOM ready
document.addEventListener('DOMContentLoaded', function(event) { 
  hmrcNS.doJsEnabledActions();
});