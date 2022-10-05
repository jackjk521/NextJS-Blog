export default function firstPostHandler(req, res) {

    const body = req.body
    console.log('body: ', body)

    // to check if data is present
    if (!body.name || !body.age) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'Name or age not found' })
    }

    // if info is found
    res.status(200).json({
        Name: `${body.name}` ,
        Age:  `${body.age}`
    })
}