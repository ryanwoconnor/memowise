import { createDeck, updateUser } from '@/lib/data'
import mongoose from 'mongoose'

//------------------------------------------------------------------------------
// Handler for api calls to `/api/deck`
//------------------------------------------------------------------------------
const handler = async (req, res) => {
  if (req.method === 'POST') {
    console.log(req.body)
    const newDeck = req.body.newDeck

    const deck = await createDeck(newDeck)

    await updateUser(req.body.user.id, {
      created: deck,
    })

    return res.status(200).json({ deck })
  }

  res.status(404).send(`Unsupported method: ${req.method}`)
}

export default handler
