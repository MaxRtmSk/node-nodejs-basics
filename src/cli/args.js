const parseArgs = () => {
    const argvs = process.argv.slice(2).reduce((acc, val, index, arr) => {
        if (val.startsWith('--')) {
            acc.push(`${val} is ${arr[index + 1]}`);
        }
        return acc;
    }, []);

    console.log(argvs.join(', '));
};

parseArgs();
