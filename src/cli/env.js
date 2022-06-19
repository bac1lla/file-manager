export const parseEnv = () => {
    let prefix = "USER"
    let env = process.env
    let parseEnvStr = `^${prefix}(.*)`
    let parseEnvReg = new RegExp(parseEnvStr)

    for (let key in env) {
        if (key.match(parseEnvReg)) {
            process.stdout.write(`${key}=${env[key]}; `)
        }
    }
};

parseEnv()



