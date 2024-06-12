import { getDeck, updateDeck, deleteDeck, updateUser } from '@/lib/data'

//------------------------------------------------------------------------------
// Handler for api calls to `/api/deck/:deckid`
//------------------------------------------------------------------------------
const handler = async (req, res) => {
  const deckId = req.query.deckid

  if (req.method === 'GET') {
    const deck = await getDeck({ id: deckId })
    return res.status(200).json({ deck })
  }

  if (req.method === 'PATCH') {
    const deck = await updateDeck(deckId, req.body.updatedDeck)
    return res.status(200).json({ deck })
  }

  if (req.method === 'DELETE') {
    await deleteDeck(deckId)
    await updateUser(req.body.user.id, { remove: { deckId } })

    return res.status(200).json({})
  }

  res.status(404).send(`Unsupported method: ${req.method}`)
}

export default handler
