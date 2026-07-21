import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatorios: name, email, message" },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const contactToEmail = process.env.CONTACT_TO_EMAIL
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
    const telegramChatId = process.env.TELEGRAM_CHAT_ID

    const results: string[] = []

    // Resend
    if (resendApiKey && contactToEmail) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "SEIVA <contato@seiva.app>",
            to: [contactToEmail],
            subject: `Novo lead SEIVA: ${name}`,
            html: `
              <h2>Novo lead do site SEIVA</h2>
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>E-mail:</strong> ${email}</p>
              <p><strong>Telefone:</strong> ${phone || "Nao informado"}</p>
              <p><strong>Mensagem:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
            `,
          }),
        })
        if (resendRes.ok) {
          results.push("email-sent")
        } else {
          console.error("Resend error:", await resendRes.text())
        }
      } catch (err) {
        console.error("Resend failed:", err)
      }
    }

    // Telegram
    if (telegramBotToken && telegramChatId) {
      try {
        const telegramText =
          `<b>Novo lead SEIVA</b>\n\n` +
          `<b>Nome:</b> ${name}\n` +
          `<b>E-mail:</b> ${email}\n` +
          `<b>Telefone:</b> ${phone || "Nao informado"}\n` +
          `<b>Mensagem:</b> ${message}`

        const tgRes = await fetch(
          `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: telegramText,
              parse_mode: "HTML",
            }),
          }
        )
        if (tgRes.ok) {
          results.push("telegram-sent")
        } else {
          console.error("Telegram error:", await tgRes.text())
        }
      } catch (err) {
        console.error("Telegram failed:", err)
      }
    }

    // If neither channel was configured, still return 200 (dev mode)
    if (results.length === 0) {
      console.log("Lead received (no delivery channels configured):", {
        name,
        email,
        phone,
        message: message.substring(0, 100),
      })
      return NextResponse.json({ status: "logged", channels: [] })
    }

    return NextResponse.json({ status: "ok", channels: results })
  } catch (err) {
    console.error("Send email error:", err)
    return NextResponse.json(
      { error: "Erro interno ao processar a solicitacao" },
      { status: 500 }
    )
  }
}
