// var myCustomObj = {
//     name: 'Zonayed Ahmed',
//     age: 21,
//     job: 'Student',
//     anotherObj: {
//        name: 'Ahmed Zonayed',
//        value: function() {
//           console.log('My name is ' + this.name);
//        }
//     }
//  }

//  myCustomObj.anotherObj.value.apply(myCustomObj);
 
//  var karim = {
//     name: 'Karim Rahman',
//     dob: 1996,
//     age: function(currentYear,uni) {
//        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!. He studied '+uni+' University');
//     }
//  }

//  var rahim = {
//     name: 'Rahim Abdu',
//     dob: 1986
//  }

//  karim.age.call(rahim,2018,'Dhaka');

//  var karim = {
//     name: 'Karim Rahman',
//     dob: 1996,
//     age: function(currentYear,uni) {
//        console.log(this.name + ' His DOB: '+this.dob+  ' is ' + (currentYear - this.dob) + ' years old!. He studied '+uni+' University');
//     }
//  }

//  var rahim = {
//     name: 'Rahim Abdu',
//     dob: 1986
//  }
//  var arr=[2018,'Dhaka']

//  karim.age.apply(rahim,arr);

 var karim = {
    name: 'Karim Rahman',
    dob: 1996,
    age: function(currentYear,uni) {
       console.log(this.name + ' His DOB: '+this.dob+  ' is ' + (currentYear - this.dob) + ' years old!. He studied '+uni+' University');
    }
 }

 var rahim = {
    name: 'Rahim Abdu',
    dob: 1986
 }
 var arr=[2018,'Dhaka']

var bin=karim.age.bind(rahim,arr)

 console.log(karim.age(bin));


//  var anotherObj = {
//     name: 'Zonayed Ahmed',
//     age: 21,
//     timer: function() {
//        setTimeout(function() {
//           console.log(this.name);
//        }.apply(anotherObj), 1000)
//      }
//  }
//  anotherObj.timer.apply(anotherObj)

