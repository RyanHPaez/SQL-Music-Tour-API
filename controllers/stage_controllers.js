const stage = require('express').Router()
const db = require('../models')
const { Stage } = db 
// DEPENDENCIES 
const { Op } = require('sequelize')
   
// FIND ALL Stages
stage.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [ [ 'stage_id', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})


// // FIND ALL Stage
// Stages.get('/', async (req, res) => {
//     try {
//         const foundStages = await Stage.findAll()
//         res.status(200).json(foundStages)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// FIND A SPECIFIC Stage
stage.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Stage
stage.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Stage
stage.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: {
                Stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStage} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Stage
stage.delete('/:id', async (req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStage} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = stage