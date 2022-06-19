export const parseArgs = () => {
    let args = process.argv

    for (let i = 1; i < args.length; i++) {
        if (args[i - 1].match(/^--.*/) && args[i].match(/^(?!--).+/)) {
            console.log(`${args[i - 1]} is ${args[i]} `)
        }
    }
};




