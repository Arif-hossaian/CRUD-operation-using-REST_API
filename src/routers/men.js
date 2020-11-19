const express = require("express")
const router = new express.Router()
const MensRanking = require("../models/mens")




//we will handle post/create request
router.post("/mens", async(req,res) =>{
    try{
        const addingMensRecords = new  MensRanking(req.body)
        console.log(req.body)
        const insertMens = await addingMensRecords.save()
        res.status(201).send(insertMens)
    }
    catch(e){
        res.status(404).send(e)
    }
})


//want to read data
router.get("/mens", async(req,res) =>{
    try{
        const getMens = await MensRanking.find().sort({"ranking": 1})
        res.send(getMens)
    }
    catch(e){
        res.status(404).send(e)
    }
})


//get indivisual data 
router.get("/mens/:id", async(req,res) =>{
    try{
        const _id = req.params.id 
        const getMen = await MensRanking.findById(_id)
        res.send(getMen)
    }
    catch(e){
        res.status(404).send(e)
    }
})


//updating using patch 
router.patch("/mens/:id", async(req,res) =>{
    try{
        const _id = req.params.id 
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(getMen)
    }
    catch(e){
        res.status(500).send(e)
    }
})


module.exports = router