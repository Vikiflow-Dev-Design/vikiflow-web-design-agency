import { NextResponse } from "next/server";
import * as emailjs from "@emailjs/nodejs";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Initialize EmailJS with credentials
    emailjs.init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY!,
      privateKey: process.env.EMAILJS_PRIVATE_KEY!,
    });

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company,
      phone: data.phone,
      budget: data.budget,
      message: data.message,
    };

    console.log("Sending email with SDK params:", {
      serviceId: process.env.EMAILJS_SERVICE_ID,
      templateId: process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
    });

    // Send email using SDK
    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      templateParams
    );

    console.log("Email sent successfully with SDK:", result);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("SDK Error details:", {
      message: error.message,
      status: error.status,
      text: error.text,
      error,
    });
    return NextResponse.json(
      {
        success: false,
        error: error.text || error.message || "Failed to send email",
        status: error.status,
      },
      { status: error.status || 500 }
    );
  }
}

/*
Note: To use this SDK approach:
1. Install the SDK: npm install @emailjs/nodejs
2. Enable server-side API calls in EmailJS dashboard
3. Update the form submission to use '/api/contact-sdk' endpoint

Pros of SDK approach:
- More structured and type-safe
- Handles initialization and configuration
- Built-in error types and handling

Cons of SDK approach:
- Requires additional dependency
- May require account upgrades
- Less flexible than direct REST API
*/
