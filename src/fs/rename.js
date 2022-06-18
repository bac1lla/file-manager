import path from "node:path";
import {fileURLToPath} from "url";
import fs from 'node:fs'

export const rename = async () => {

    let dirName = "files"
    let startFilename = "wrongFilename.txt"
    let finalFilename = "properFilename.md"
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    let startFilenamePath = path.join(__dirname, dirName, startFilename)
    let finalFilenamePath = path.join(__dirname, dirName, finalFilename)

    fs.access(startFilenamePath, err => {
        if (err) {
            console.log("FS operation failed");
            console.log(`File ${startFilename} doesn't exist`);
            throw err
        }
        fs.access(finalFilenamePath, err => {
            if (!err) {
                console.log("FS operation failed");
                console.log(`File ${finalFilename} already exists`);
                throw err
            }
            fs.rename(startFilenamePath, finalFilenamePath, err => {
                if (err) {
                    console.log("FS operation failed");
                    console.log(`Unable to rename ${startFilename} to ${finalFilename}`);
                    throw err
                }
            })
        })
    })

};