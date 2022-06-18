import fs from 'node:fs';
import path from "node:path"
import { fileURLToPath } from 'url';

export const create = async () => {
    let fileName = "fresh.txt"
    let fileContent = "I am fresh and young"
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    let finalPath = path.join(__dirname, "files", fileName)

    fs.access(finalPath, (err) => {
        if (err) {
            fs.writeFile(finalPath, fileContent, (err) => {
                if (err) throw err;
                console.log("The file was successfully saved!");
            });
        } else {
            console.log("FS operation failed");
        }
    });
};
