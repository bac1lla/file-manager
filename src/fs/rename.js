import path from "node:path";
import {fileURLToPath} from "url";
import fs from 'node:fs'

export const rename = async () => {

    let dirName = "files"
    let startFilename = "wrongFilename.txt"
    let finalFilename = "properFilename.md"
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    let finalPath = path.join(__dirname, dirName)

    fs.access(startFilename, err => {
        if (err) {
            console.log("FS operation failed");
            throw err
        }
    })

};