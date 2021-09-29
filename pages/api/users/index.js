export default function handler(req, res) {
        if (req.body.email === process.env.NEXT_PUBLIC_EMAIL && req.body.password === process.env.NEXT_PUBLIC_PASSWORD) {
            res.status(200).send({});
        } else {
            return res.status(401).send({ error: 'Invalid email or password' });
        }
  }