import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const templateParams = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: {
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        phone: data.phone,
        budget: data.budget,
        message: data.message,
      },
    };

    console.log("Sending email with params:", templateParams);

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(templateParams),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`EmailJS API error: ${errorText}`);
    }

    console.log("Email sent successfully");
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Detailed error:", {
      message: error.message,
      stack: error.stack,
      error,
    });
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
