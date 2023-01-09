import Airtable from 'airtable';
export default async (req, res) => {

    var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appyG2vPGcjP7Frvn');


    if (req.method !== "POST") {
        return res.send("wrong request")
    } else {
        base('Audience').create([
            {
                "fields": {
                    "Email": req.body.mail
                }
            }
        ], function (err, records) {
            if (err) {
                console.error(err);
                res.send("not sent")
                return;
            } else {
                res.send("sent")
            }
        });
    }




}; 