function greet() {
    var name = document.getElementById("nameInput").value;
  
    function generateGreeting(name) {
      return "Hello, " + name;
    }
  
    var greetingMessage = generateGreeting(name);
    document.getElementById("greeting").textContent = greetingMessage;
  }
  