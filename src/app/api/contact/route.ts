import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Server-side validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    // In a real application, you would connect to a database or trigger an email here
    console.log("Contact form submission received:", {
      name,
      email,
      phone,
      subject: subject || "None",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "Inquiry received successfully." });
  } catch (error) {
    console.error("Error in contact route handler:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
