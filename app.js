
function crack(input) {
    const res = {};
    let candidateKey = '';
    let highestScore = 0;
    const freq = [' ', 'e', 't', 'a', 'o', 'i', 'n', 's', 'h', 'r', 'd', 'l', 'u'];
    const keys = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    keys.forEach(key => {
        let output = '';
        let cursor = 0;
        while (cursor < input.length) {
            let hex = input.slice(cursor, cursor + 2);
            let xor = parseInt(hex, 16) ^ key.charCodeAt(0);
            output += String.fromCharCode(xor);
            cursor += 2;
        }
        let score = 0;
        freq.forEach((key, i) => {
            const re = new RegExp(key, 'g');
            const matches = output.toLowerCase().match(re);
            if (matches) {
                score += matches.length * (12 - i);
            }
        });
        if (score > highestScore) {
            highestScore = score;
            candidateKey = key;
            res[key] = output;
        }
    });

    return {
        key: candidateKey,
        message: res[candidateKey]
    }
}

const input = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';
const result = crack(input);
console.log(result);