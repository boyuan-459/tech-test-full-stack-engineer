import * as express from 'express'

import leads from './leads'

const router = express.Router()

router.use('/leads', leads)

export default router
