
      // ---scuberGreetingForFeet-->
      
function scuberGreetingForFeet(myNumber){
  // Write your code here!
  if(myNumber == 199){
    return "This one is on me!"
  }
  else if (myNumber> 2000 && myNumber < 2500){
    return "I will gladly take your thirty bucks."
  }
  else if (myNumber > 2500){
    return "No can do."
  }
}
      // --ternaryCheckCity-->

function ternaryCheckCity(myCity){
  // Write your code here!
if (myCity == "NYC"){
  return "Ok, sounds good."
}
else{
  return "No go.";
}
}
        // --switchOnCharmFromTip--

function switchOnCharmFromTip(myTip){
  // Write your code here!
   
 switch(myTip){
   case 'generous':
     return "Thank you so much."
     break;
   case 'not as generous':
   return "Thank you."
   break;
   default:
     return "Bye."
 
 }
}