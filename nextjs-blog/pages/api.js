export default function handler(req, res) {

    const email = req.body.email; // sample request to retrieve the value of an input

    res.status(200).json({ text: 'Hello World' });
}