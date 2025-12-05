// const nodemailer = require('nodemailer')

// async function testEmail() {
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.hostinger.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: 'info@azzaypharmacy.com',
//             pass: 'YOUR_ACTUAL_PASSWORD', // Replace with your actual password
//         },
//         debug: true,
//         logger: true,
//     })

//     try {
//         await transporter.verify()
//         console.log('✅ SMTP connection successful')

//         const info = await transporter.sendMail({
//             from: '"Test" <info@azzaypharmacy.com>',
//             to: 'info@azzaypharmacy.com',
//             subject: 'Test Email',
//             text: 'This is a test email',
//         })

//         console.log('✅ Email sent:', info.messageId)
//     } catch (error) {
//         console.error('❌ Error:', error)
//     }
// }

// testEmail()