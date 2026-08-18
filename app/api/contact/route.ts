import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const isPlaceholderToken =
      !botToken ||
      botToken.includes("your_bot_token") ||
      !chatId ||
      chatId.includes("your_telegram_chat");

    if (isPlaceholderToken) {
      console.log("📬 New Contact Form Submission Received:");
      console.log(`👤 Name: ${name}`);
      console.log(`✉️ Email: ${email}`);
      console.log(`💬 Message: ${message}`);
      console.log(
        "ℹ️ Telegram notification skipped because credentials in .env.local are placeholders."
      );

      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been received.",
      });
    }

    // Format Markdown Telegram Message
    const text = `🚀 *New Contact Form Submission* (Aryan Rathod Portfolio)\n\n*Name:* ${name}\n*Email:* ${email}\n*Date:* ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}\n\n*Message:*\n${message}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const res = await fetch(telegramUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        console.warn("Telegram API error:", data);
        // Return success response so user experience is smooth even if Telegram token is invalid
        return NextResponse.json({
          success: true,
          message: "Thank you! Your message has been received.",
        });
      }
    } catch (telegramErr) {
      console.warn("Telegram dispatch network warning:", telegramErr);
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
