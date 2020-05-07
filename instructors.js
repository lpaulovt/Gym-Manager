const fs = require('fs')

exports.post =  function(req, res){
    const keys = Object.keys(req.body)

    for( key of keys){
        if(req.body[key] == ""){
            res.send("Por favor, preencha todos os campos!")
        }
    }

    fs.writeFile("data.json", JSON.stringify(req.body), function(err){
        if(err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })

    return res.send(req.body)
}