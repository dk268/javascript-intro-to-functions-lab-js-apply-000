function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var uppercase=string;
  var lowercase=string;
  var mixedCase=string;

  if (string !== uppercase.toUpperCase() && string !== "I love you, Grandma.") {
    return "I can't hear you!"
  }

  if (string === uppercase.toUpperCase()) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."}
    else if (string !== uppercase.toUpperCase()){
      return "I can't hear you!"
    } else {
      return "YES INDEED!"
    }
  }
