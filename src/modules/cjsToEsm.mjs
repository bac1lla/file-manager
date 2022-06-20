import path from "node:path"
import { release, version } from "node:os"
import {createServer as createServerHttp} from "node:http"
import "./files/c.js"
import {fileURLToPath} from "url";
import { createRequire } from 'module';


const require = createRequire(import.meta.url);
const random = Math.random();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json')
} else {
    unknownObject = require('./files/b.json')
}
console.log(unknownObject)
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

