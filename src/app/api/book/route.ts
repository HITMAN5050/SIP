import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, targetSize, primaryGoal, message } = body;

    // Server-side validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    // In a real application, you would connect to a database, send to a CRM (e.g. HubSpot), or alert via WhatsApp webhook
    console.log("Consultation booking submission received:", {
      name,
      email,
      phone,
      targetSize,
      primaryGoal,
      message: message || "None",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "Consultation booked successfully." });
  } catch (error) {
    console.error("Error in booking route handler:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
