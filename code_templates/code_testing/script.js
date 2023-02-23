var location = 'https://api.github.com/repos/Franco-Henriquez/Web_Fundamentals/contents/';
var path = '/Web_Fundamentals/HTML';
var directoryPaths = path.substring(1, location.lastIndexOf("/")+1);
var directoryName = path.substring(path.lastIndexOf("/")+1); /*current working directory*/
console.log("Directory name: " + directoryPaths);