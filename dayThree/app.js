const express = require("express")
const app = express();

const notes = [];

app.use(express.json())

// POST API 

app.post("/notes", (req, res) =>{
    notes.push(req.body)
    res.status(201).json({
        message : "Note Created Successfuly"
    })

})

app.get("/notes", (req,res)=>{
    res.status(200).json({
        notes : notes
    })
})
app.delete("/notes/:index", (req, res)=>{
    delete notes[req.params.index]

    res.status(200).json({
        message: "Note Deleted Successfully"
    })
})
app.patch("/notes/:index", (req, res)=>{
    const index =req.params.index;
     notes[ index ].description = req.body.description

     res.status(200).json({
        message:"Notes updated successfully",
        notes: notes[index]
     })
})




module.exports = app;