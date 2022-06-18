import path from "node:path";
import {fileURLToPath} from "url";
import fs from 'node:fs'

export const remove = async () => {

    let dirName = "files"
    let filename = "fileToRemove.txt"
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    let filePath = path.join(__dirname, dirName, filename)

    fs.access(filePath, err => {
        if (err) {
            console.log("FS operation failed");
            console.log(`${filename} doesn't exist`);
            throw err
        }
        fs.unlink(filePath, err => {
            if (err) {
                console.log("FS operation failed");
                console.log(`Unable to delete ${filename}`);
                throw err
            }
        })


    })
};