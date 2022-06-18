import * as fs from 'node:fs';
import * as path from "node:path"

export const create = async () => {
    let directoryPath = "./src/fs/files"
    let fileName = "fresh.txt"
    let fileContent = "I am fresh and young"

    let finalPath = path.join("./", directoryPath, fileName)

    fs.access(finalPath, (err) => {
        if (err) {
            fs.writeFile(`${directoryPath}/${fileName}`, fileContent, (err) => {
                if (err) throw err;
                console.log("The file was succesfully saved!");
            });
        } else {
            console.log("FS operation failed");
        }
    });


};