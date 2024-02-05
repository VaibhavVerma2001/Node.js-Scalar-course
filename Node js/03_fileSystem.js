const fs = require("fs");

//reading a file
let txt = fs.readFileSync("file1.txt", "utf-8"); // (file_path , encoding)
console.log("content od the file is : " , txt);



//now replacing the text of file 1 and creating a new file 2 and adding that replaced content to that => if file does not exits then it will create that , else replace existing content of that file
let txt2 = txt.replace('file 1' , 'file 2');
console.log(txt2);

fs.writeFileSync('file2.txt' , txt2); // it will create a file2.txt will new content as txt2




//copying content of file1 to file3 => if file does not exits then it will create that , else replace existing content of that file
fs.copyFileSync('file1.txt' , 'file3.txt');


//appending  => if file does not exits then it will create that , else replace existing content of that file
fs.appendFileSync('file3.txt' , " \nAppending this in file 3.");



// 5 - Delete a file 
// fs.unlinkSync("file3.txt");