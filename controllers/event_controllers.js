// DEPENDENCIES
const event = require('express').Router()
const db = require('../models')
const { Event } = db 
// DEPENDENCIES 
const { Op } = require('sequelize')
   
// FIND ALL Events
event.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [ [ 'event_id', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})


// // FIND ALL EventS
// Events.get('/', async (req, res) => {
//     try {
//         const foundEvents = await Event.findAll()
//         res.status(200).json(foundEvents)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// FIND A SPECIFIC Event
event.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { Event_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Event
event.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Event
event.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.update(req.body, {
            where: {
                Event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvent} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Event
event.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvent} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = event