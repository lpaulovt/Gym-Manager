const fs = require('fs')
const data = require('./data.json')

exports.post =  function(req, res){
    const keys = Object.keys(req.body)

    for( key of keys){
        if(req.body[key] == ""){
            res.send("Por favor, preencha todos os campos!")
        }
    }

    let {
        avatar_url,
        birth,
        name,
        gender,
        services
    } = req.body

    birth = Date.parse(birth)
    const id= Number(data.instructors.length + 1)
    const created_at = Date.now()

    data.instructors.push({
        id,
        name,
        avatar_url,
        birth,
        gender,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })
}