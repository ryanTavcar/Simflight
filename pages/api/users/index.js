import NextCors from 'nextjs-cors';

export default function handler(req, res) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

    if (req.body.email === process.env.NEXT_PUBLIC_EMAIL && req.body.password === process.env.NEXT_PUBLIC_PASSWORD) {
        res.status(200).send({});
    } else {
        return res.status(401).send({ error: 'Invalid email or password' });
    }
};