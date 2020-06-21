import * as express from 'express'

import { Job } from '../../model'

const router = express.Router()

router.get('/:status', async (req, res) => {
    const { page, pageSize } = req.query
    const limit = parseInt(pageSize as string) || 2
    const offset = (parseInt(page as string) - 1) * limit
    const { count, rows } = await Job.findAndCountAll({
        where: {
            status: req.params.status,
        },
        limit,
        offset,
        include: [ Job.associations.suburb, Job.associations.category ],
    })
    return res.json({
        totalPage: Math.ceil(count / limit),
        leads: rows,
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
