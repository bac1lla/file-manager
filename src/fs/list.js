import path from "node:path";
import {fileURLToPath} from "url";
import fs from "node:fs";

export const list = async () => {

    let dirName = "files"
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    let dirPath = path.join(__dirname, dirName)

    fs.access(dirPath, err => {
        console.log("FS operation failed");
        console.log(`Directory ${dirName} doesn't exist`);
        return null
    })

    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.log("FS operation failed");
            console.log(`Unable to read files in directory ${dirName}`);
            return null
        }
        console.log(files)
    })
};