const fs = require("fs");
const path = require("path");
function ReadLogFiles() {
    const pathsFilePath = path.join(__dirname, "rootFile.txt");
    fs.readFile(pathsFilePath, "utf8", (err, data) => {
        console.log(data)
        const Filelist = data.split("\n").map((relativePath) =>
            path.join(__dirname, relativePath.trim())
        );
        let i;
        for (i = 0; i < Filelist.length; i++) {
            fs.readFile(Filelist[i], "utf8", (err, data) => {
                console.log(data);
            })
        }
    });
}


ReadLogFiles();