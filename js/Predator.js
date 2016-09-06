var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
        var loader = new XMLHttpRequest();
        // loader.addEventListener("load", onLoad);
        loader.addEventListener("error", function() {
            console.log("There was an error!");
        });
        loader.open("GET", "json/carnivores.json")
        loader.send();
        loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        // Invoke the callback function
        callbackToInvoke(carnivores);
      });
    },loadHerbivores: function (callbackToInvoke) {
        var loader = new XMLHttpRequest();
        // loader.addEventListener("load", onLoad);
        loader.addEventListener("error", function() {
            console.log("There was an error!");
        });
        loader.open("GET", "json/herbivores.json")
        loader.send();
        loader.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText);
        // Invoke the callback function
        callbackToInvoke(herbivores);
      });
    }
  }
})();

