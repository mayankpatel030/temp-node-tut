const fs=require('fs');

fs.readFile('content/subfolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    fs.readFile('content/subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        fs.writeFile(
            'content/subfolder/resultAsync.txt',
            `Here is the result : ${first} ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return 
                }
                console.log(result)
            }
        )
    }
    )
}
)