const fs=require('fs');

//utf8 is use for converting buffer data to readable data
const first=fs.readFileSync('content/subfolder/first.txt','utf8')
const second=fs.readFileSync('content/subfolder/second.txt','utf8')

fs.writeFileSync(
    'content/subfolder/result-sync.txt',
    `Here is the redult : ${first} ${second}`,
{flag: 'a'}
)
// by use of flag we can append the content in existing file