const fs = require('fs')



    function createFile(fileName) {
        if(fileName !== undefined || fileName !== ''){
            fs.writeFile(fileName, "This is the test file",(err) => {
                if(err){
                    console.log(err)
                }
                else{
                    console.log("file created successfuly")
                }
            })
        }
    }

    function appendMyFiile(fileName){
        if(fileName !== undefined || fileName !== ''){
            fs.appendFile(fileName, "\n** This is appended text by append method **", function(err){
                if(err){
                    console.log(err)
                }
                else{
                    console.log("Text appended successfuly.")
                }
            })
        }
    }


    function readMyFile(fileName){
        if(fileName !== undefined || fileName !== ''){
            fs.readFile(fileName, 'utf8', function(err, data){
                if(err){
                    console.log(err)
                }
                else{
                    console.log(data)
                }
            })
        }
    }

    function deleteMyFile(fileName){
        fs.unlink(fileName, function(err){
            if(err){
                console.log(err)
            }
            else{
                console.log("file deleted...")
            }
        })
    }


    // createFile('hello1.txt')
    // readMyFile('hello.txt')
    // appendMyFiile('hello.txt')
    // deleteMyFile("hello1.txt")