import * as express from 'express'

import { Job } from '../../model'

const router = express.Router()

router.get('/:status', async (req, res) => {
    const leads = await Job.findAll({
        where: {
            status: req.params.status,
        },
        include: [ Job.associations.suburb, Job.associations.category ],
    })
    return res.json({
        leads,
    })
})

router.post('/:id/accept', async (req, res) => {
    await Job.update({ status: 'accepted' }, {
        where: {
            id: req.params.id,
        }
    })
    return res.json({
        status: 'accepted',
        id: parseInt(req.params.id),
    })
})

router.post('/:id/decline', async (req, res) => {
    await Job.update({ status: 'declined' }, {
        where: {
            id: req.params.id,
        }
    })
    return res.json({
        status: 'declined',
        id: parseInt(req.params.id),
    })
})

export default router
