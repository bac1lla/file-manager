import path from "node:path";
import {fileURLToPath} from "url";
import fs from "node:fs";

export const read = async () => {

    let dirName = "files"
    let filename = "fileToRead.txt"
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    let filePath = path.join(__dirname, dirName, filename)

    fs.access(filePath, err => {
        if (err) {
            // console.log("FS operation failed");
            // console.log(`${filename} in ${filePath} doesn't exist`);
            throw new Error("FS operation failed");
        }
    })

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log("FS operation failed");
            console.log(`Unable to read ${filename}`);
            throw new Error("FS operation failed");
        }
        console.log(data)
    })
};

read()