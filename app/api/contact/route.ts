import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, message } = body

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            )
        }

        console.log('Attempting to send email...')
        console.log('EMAIL_USER:', process.env.EMAIL_USER)
        console.log('EMAIL_PASSWORD exists:', !!process.env.EMAIL_PASSWORD)

        // Create transporter with Hostinger SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
            debug: true, // Enable debug output
            logger: true, // Log information to console
        })

        // Verify connection
        try {
            await transporter.verify()
            console.log('SMTP connection verified successfully')
        } catch (verifyError) {
            console.error('SMTP verification failed:', verifyError)
            return NextResponse.json(
                { error: 'SMTP configuration error. Please check server logs.' },
                { status: 500 }
            )
        }

        // Email to pharmacy
        const mailOptions = {
            from: `"Azzay Pharmacy Website" <${process.env.EMAIL_USER}>`,
            to: 'info@azzaypharmacy.com',
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Message</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #1f2937;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            This message was sent from the Azzay Pharmacy website contact form.
          </p>
        </div>
      `,
        }

        // Auto-reply to customer
        const autoReplyOptions = {
            from: `"Azzay Pharmacy" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Thank you for contacting Azzay Pharmacy',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You for Reaching Out!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and our team will get back to you as soon as possible.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Your Message:</h3>
            <p style="color: #4b5563;">${message}</p>
          </div>

          <p>In the meantime, feel free to:</p>
          <ul style="color: #4b5563;">
            <li>Visit our store at Twumasi Aben Street, Dormaa Ahenkro</li>
            <li>Call us at +233 54 685 3264</li>
            <li>Check out our services online</li>
          </ul>

          <p style="margin-top: 30px;">Best regards,<br><strong>Azzay Pharmacy Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            Azzay Pharmacy - Your Trusted Healthcare Partner<br>
            Twumasi Aben Street, Dormaa Ahenkro<br>
            +233 54 685 3264 | info@azzaypharmacy.com
          </p>
        </div>
      `,
        }

        // Send both emails
        console.log('Sending email to pharmacy...')
        const info1 = await transporter.sendMail(mailOptions)
        console.log('Email to pharmacy sent:', info1.messageId)

        console.log('Sending auto-reply to customer...')
        const info2 = await transporter.sendMail(autoReplyOptions)
        console.log('Auto-reply sent:', info2.messageId)

        return NextResponse.json(
            {
                message: 'Email sent successfully',
                messageId: info1.messageId
            },
            { status: 200 }
        )
    } catch (error: any) {
        console.error('Detailed error sending email:', {
            message: error.message,
            code: error.code,
            command: error.command,
            response: error.response,
            responseCode: error.responseCode,
        })

        return NextResponse.json(
            {
                error: 'Failed to send email. Please try again later.',
                details: error.message
            },
            { status: 500 }
        )
    }
}