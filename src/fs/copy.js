import path from "node:path";
import {fileURLToPath} from "url";
import fs from 'node:fs'


export const copy = async () => {

    let dirName = "files"
    let dirNameCopy = dirName + "_copy"
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    let startPath = path.join(__dirname, dirName)
    let finalPath = path.join(__dirname, dirNameCopy)


    fs.access(startPath, err => { // check "files" already exists
        if (err) {
            console.log("FS operation failed");
            throw err
        }
        fs.access(finalPath, (err) => { // check "files_copy" already exists
            if (!err) {
                console.log("FS operation failed");
                throw err
            }
            fs.mkdir(finalPath, err => { // create directory
                if (err) {
                    console.log(err);
                    throw err
                }
                fs.readdir(startPath, (err, files) => {
                    if (err) {
                        throw err
                    }
                    files.forEach(file => {
                        fs.copyFile(path.join(startPath, file), path.join(finalPath, file), err => {
                            if (err) {
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

copy()


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