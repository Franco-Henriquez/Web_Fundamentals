var location = '/Web_Fundamentals/HTML/Practice';
var path = '/Web_Fundamentals/HTML';
var directoryPaths = location.substring(0, location.lastIndexOf("/"));
var directoryName = path.substring(path.lastIndexOf("/")+1); /*current working directory*/
console.log("Directory name: " + directoryPaths);

const pathArray = [];
pathArray.push(location.split( '/' )[2]);
pathArray.push(location.split( '/' )[3]);


console.log("Path Array: " + pathArray);
console.log("Subdirectories only: " + pathArray[0] + "/" + pathArray[1] + "/");
