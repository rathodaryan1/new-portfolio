import { NextResponse } from "next/server";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

    if (!botToken || !chatId) {
      console.warn(
        "⚠️ Telegram configuration missing: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set in environment."
      );
      return NextResponse.json({
        success: true,
        message: "Message received (Telegram credentials not configured).",
      });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim());
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Clean HTML-formatted Telegram Message
    const text = `📬 <b>New Portfolio Message</b>\n\n👤 <b>Name:</b> ${safeName}\n✉️ <b>Email:</b> <a href="mailto:${safeEmail}">${safeEmail}</a>\n📅 <b>Time:</b> ${timestamp}\n\n💬 <b>Message:</b>\n${safeMessage}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const res = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.ok) {
      console.error("❌ Telegram Bot API error:", data);
      return NextResponse.json(
        {
          error:
            data.description || "Failed to deliver message to Telegram.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error: any) {
    console.error("❌ Contact API error:", error?.message || error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
