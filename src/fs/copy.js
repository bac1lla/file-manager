import path from "node:path";
import {fileURLToPath} from "url";
import fs from 'node:fs'

// callback hell need to refactor callback to promises
export const copy = async () => {

    let dirName = "files"
    let dirNameCopy = dirName + "_copy"
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    let startPath = path.join(__dirname, dirName)
    let finalPath = path.join(__dirname, dirNameCopy)


    fs.access(startPath, err => { // check "files" already exists
        if (err) {
            console.log("FS operation failed");
            console.log(`Directory ${startPath} doesn't exist`);
            throw err
        }
        fs.access(finalPath, (err) => { // check "files_copy" already exists
            if (!err) {
                console.log("FS operation failed");
                console.log(`Directory ${startPath} already exists`);

                throw err
            }
            fs.mkdir(finalPath, err => { // create directory
                if (err) {
                    console.log("FS operation failed");
                    console.log(`Unable to create a directory`);
                    throw err
                }
                fs.readdir(startPath, (err, files) => {
                    if (err) {
                        console.log("FS operation failed");
                        console.log(`Unable to read files in directory ${startPath}`);
                        throw err
                    }
                    files.forEach(file => {
                        fs.copyFile(path.join(startPath, file), path.join(finalPath, file), err => {
                            if (err) {
                                console.log("FS operation failed");
                                console.log(`Unable to copy ${file} in directory ${startPath}`);
                                throw err
                            }
                            // console.log(`${path.join(startPath, file)} was copied to ${path.join(finalPath, file)}`);
                        })
                    })
                })
            })
        });
    })


    // fs.access(startPath, err => {
    //     if (err) {
    //         console.log("FS operation failed");
    //         throw err
    //     }
    // })
    //
    // fs.access(finalPath, err => {
    //     if (!err) {
    //         console.log("FS operation failed");
    //         throw err
    //     }
    // })
    //
    // fs.mkdir(finalPath, err => { // create directory
    //     if (err) {
    //         console.log("FS operation failed");
    //         throw err
    //     }
    // })
    //
    // fs.readdir(startPath, (err, files) => {
    //     if (err) {
    //         console.log("FS operation failed");
    //         throw err
    //     }
    //
    //     files.forEach(file => {
    //         fs.copyFile(path.join(startPath, file), path.join(finalPath, file), err => {
    //             if (err) {
    //                 console.log("FS operation failed");
    //                 throw err
    //             }
    //             // console.log(`${path.join(startPath, file)} was copied to ${path.join(finalPath, file)}`);
    //         })
    //     })
    // })

    // await createDirectory(finalPath);
    // await copyFiles(startPath, finalPath)
};


// async function createDirectory(path) {
//     try {
//         await fs.promises.mkdir(path)
//     } catch (error) {
//         console.log("FS operation failed");
//         throw error
//     }
// }
//
// async function copyFiles(startPath, finalPath) {
//     try {
//         await fs.readdir(startPath, (err, files) => {
//             if (err) throw err
//
//             files.forEach(file => {
//                 fs.copyFile(path.join(startPath, file), path.join(finalPath, file), err => {
//                     if (err) throw err
//                     // console.log(`${path.join(startPath, file)} was copied to ${path.join(finalPath, file)}`);
//                 })
//             })
//         })
//     } catch (error) {
//         console.log("FS operation failed");
//         throw error
//     }
// }