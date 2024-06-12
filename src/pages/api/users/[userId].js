import { getUser, updateUser } from '@/lib/data'
import mongoose from 'mongoose'

//------------------------------------------------------------------------------
// Handler for api calls to `/api/user/:userid`
//------------------------------------------------------------------------------
const handler = async (req, res) => {
  const userId = req.query.userId

  if (req.method === 'GET') {
    const user = await getUser(userId)
    return res.status(200).json({ user })
  }

  if (req.method === 'PATCH') {
    await updateUser(mongoose.Types.ObjectId(Number(userId)), {
      studied: { ...req.body },
    })
    return res.status(200).json({})
  }

  res.status(404).send(`Unsupported method: ${req.method}`)
}

export default handler
