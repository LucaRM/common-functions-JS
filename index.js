const {DevEnv, SeparateLink: linkDelimiter} = require("./customLists");

function separateLink(str) {
    const delimiters = linkDelimiter;

    return str.split("").reduce((result, char, index, arr) => {
        if (delimiters.includes(char)) {
            if (index > 0 && !delimiters.includes(arr[index - 1])) {
                result.push(str.slice(0, index));
                str = str.slice(index);
                index = 0;
            }
        }
        if (index === arr.length - 1) {
            result.push(str);
        }
        return result;
    }, []);
}

function isDevEnv(link) {
    const linkArr = separateLink(link);
    const delimiters = DevEnv;

    for (let i = 0; i < linkArr.length; i++) {
        for (let x = 0; x < delimiters.length; x++) {
            if (linkArr[i] === delimiters[x]) {
                return true;
            }
        }
    }
}

function shortHash(hash, limit = 6) {
    return hash.slice(0, limit) + "...";
}

module.exports = {
    isDevEnv,
    shortHash,
    separateLink,
};
