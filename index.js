 var katzDeliLine = [];
 
var ticket = 1 

 function takeANumber(katzDeliLine){
   katzDeliLine.push(ticket)
   return `Welcome! You're ticket number ${ticket++}`
 }
 
 //takeANumber(katzDeliLine) => "Welcome! You're ticket number #1" [1]
// takeANumber(katzDeliLine) => "Welcome! You're ticket number #2" [1,2]

// nowServing(katzDeliLine) => [2]
// nowServing(katzDeliLine) => []

// takeANumber(katzDeliLine) => "Welcome! You're ticket number #3" [3]
 
 
 function takeANumber(katzDeliLine,name) {
   var position = katzDeliLine.length+1;
   var str = `Welcome, ${name}. You are number ${position} in line.`
   katzDeliLine.push(name);
   return str;
 }
 function nowServing(katzDeliLine) {
   var person = katzDeliLine[0];
   var str = `Currently serving ${person}.`
   if(katzDeliLine.length === 0){
     return "There is nobody waiting to be served!"
   } else {
     katzDeliLine.shift();
     return str;
   }
 }
function currentLine(katzDeliLine){
   var str = "The line is currently: ";
    if(katzDeliLine.length === 0){
      return "The line is currently empty."
    } else {
      /*
        var list = []
        for(var i = 0; i < katzDeliLine.length; i++){
          list.push(`${i+1}. ${katzDeliLine[i]`)
        }
        
        return str + list.join(", ")
      */
      for(var i = 0; i < katzDeliLine.length; i++){
      var position = i + 1;
      var name = katzDeliLine[i];
      str += `${position}. ${name}, `
      }
  str = str.substring(0, str.length - 2);
  return str;
  }
}