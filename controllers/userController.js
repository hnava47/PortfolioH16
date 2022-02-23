const sgMail = require('@sendgrid/mail');

module.exports = {
    portfolioPage: (req, res) => {
        res.render('portfolio');
    },
    sendEmail: async (req, res) => {
        const { email, firstName, lastName, message } = req.body;
        const msg = {
            to: 'hector.r.nava44@gmail.com',
            replyTo: 'me@noreply.com',
            from: 'hector.r.nava35@gmail.com',
            subject: `Portfolio Contact: ${firstName} ${lastName}`,
            html: `<p>Received contact request from ${firstName} ${lastName} with the following message:<ul><li>${message}</li></ul></p></br><p>Respond back to them at ${email}</p>`
        };

        if (!email || !firstName || !lastName || !message) {
            res.status(400).json({ message: 'Email, first name, last name, and message are all required' })
        };

        try {
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            const sentEmail = await sgMail.send(msg);

            res.json(sentEmail);
        } catch (error) {
            console.log(error)
        }
    }
};
