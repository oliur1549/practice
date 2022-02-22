const x=3, y=8;
if(!(x=="3")){
    console.log(x+"1st")
}
else if(!(!(x===3))){
    console.log(x+"2nd")
}
if(!(y!=8)){
    console.log(y+"3rd")
}
if(!(x<=y)){
    console.log(y+"4th")
}

//Exercise-4 :
const str="";
const msg="haha!";
const isFunny="false";

if (!(str)) {
    console.log("Success!")
}
if(!(msg)){
    console.log("Fail!")
}
if((isFunny)){
    console.log("Fail!")
}