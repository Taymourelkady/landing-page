"use server"

import { Resend } from "resend"

// Initialize Resend with your API key (you'll need to add this as an environment variable)
const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  company: string
  role: string
  interest: string
  message: string
}

export async function sendContactFormEmail(formData: ContactFormData) {
  try {
    // Validate the form data
    if (!formData.firstName || !formData.email || !formData.company) {
      return { success: false, error: "Missing required fields" }
    }

    // Send the email
    const { data, error } = await resend.emails.send({
      from: "Treeo Contact Form <contact@treeo.ai>",
      to: "taymour@treeo.ai",
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      text: `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Role: ${formData.role || "Not specified"}
Interest: ${formData.interest || "Not specified"}
Message:
${formData.message || "No message provided"}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Company:</strong> ${formData.company}</p>
<p><strong>Role:</strong> ${formData.role || "Not specified"}</p>
<p><strong>Interest:</strong> ${formData.interest || "Not specified"}</p>
<h3>Message:</h3>
<p>${formData.message || "No message provided"}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error in sendContactFormEmail:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
