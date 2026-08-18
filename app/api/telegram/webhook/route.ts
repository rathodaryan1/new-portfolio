import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const update = await request.json();
    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();

    if (!botToken) {
      return NextResponse.json({ ok: false, error: "Bot token not configured" }, { status: 500 });
    }

    const message = update.message;
    if (!message || !message.text) {
      return NextResponse.json({ ok: true });
    }

    const chatId = message.chat.id;
    const text = message.text.trim();
    const firstName = message.from?.first_name || "there";

    let replyText = "";

    if (text.startsWith("/start")) {
      replyText = `👋 Hello <b>${firstName}</b>!\n\nWelcome to the <b>Aryan Rathod Portfolio Bot</b>.\n\n🆔 <b>Your Chat ID:</b> <code>${chatId}</code>\n\n📌 <b>Commands:</b>\n• /start — Welcome & Chat ID\n• /status — Check bot connectivity\n• /help — Bot information\n\nThis bot automatically notifies Aryan whenever a visitor submits the contact form on his website.`;
    } else if (text.startsWith("/status")) {
      replyText = `🟢 <b>Bot Status:</b> Online & Operational\n⚡ <b>Engine:</b> Next.js Serverless API\n📅 <b>Time:</b> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`;
    } else if (text.startsWith("/chatid")) {
      replyText = `🆔 <b>Your Telegram Chat ID is:</b> <code>${chatId}</code>`;
    } else if (text.startsWith("/help")) {
      replyText = `ℹ️ <b>Aryan Rathod Portfolio Bot</b>\n\nThis bot forwards inquiries submitted via the website's contact form.\n\nUse <code>/chatid</code> to view your Chat ID.`;
    } else {
      replyText = `Hello <b>${firstName}</b>! I'm the notification bot for Aryan Rathod's portfolio. Any messages submitted on the portfolio website will be delivered to this chat.`;
    }

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: replyText,
        parse_mode: "HTML",
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Webhook processing error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    bot: "Aryan Rathod Portfolio Telegram Webhook",
    timestamp: new Date().toISOString(),
  });
}
