var name1= "Alex Rodriguez";
var name2= "Mila Kunis";
var name3= "Santa Claus";

if(name1.length>name2.length && name1.length>name3.length){
    console.log("Alex Rodriguez has the longest name.");
}
else if(name2.length>name1.length && name2.length>name3.length){
    console.log("Mila Kunis has the longest name.")
}
else if(name3.length>name1.length && name3.length>name2.length){
    console.log("Santa Claus has the longest name.");
}
else if(name1.length == name2.length && name1.length>name3.length){
    console.log("Alex Rodriguez and Mila Kunis tie for the longest name.");
}
else if(name1.length == name3.length && name1.length>name2.length){
    console.log("Alex Rodriguez and Santa Claus tie for the longest name.");
}
else if(name2.length == name3.length && name2.length>name1.length){
    console.log("Mila Kunis and Santa Claus tie for the longest name.");
}
else{
    console.log("All three names are the same length");
}