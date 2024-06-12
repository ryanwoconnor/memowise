import { updateUser } from '@/lib/data'

//------------------------------------------------------------------------------
// Handler for api calls to `/api/deck/:deckid/link`
//------------------------------------------------------------------------------
const handler = async (req, res) => {
  const deckId = req.query.deckid

  if (req.method === 'POST') {
    await updateUser(req.body.user.id, { unlink: { deckId } })

    return res.status(200).json({})
  }

  res.status(404).send(`Unsupported method: ${req.method}`)
}

export default handler
