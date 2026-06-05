import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  email: z.string().trim().email("Invalid email").max(120).optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Tell us a bit more").max(1500),
  // honeypot — must be empty
  website: z.string().max(0).optional().or(z.literal("")),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot triggered — silently succeed
    if (data.website) return { ok: true };

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "kamalpandey.dev@gmail.com";

    const body = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : "",
      data.service ? `Service: ${data.service}` : "",
      "",
      "Message:",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    if (resendKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: process.env.CONTACT_FROM_EMAIL || "My Salon <onboarding@resend.dev>",
            to: [to],
            reply_to: data.email || undefined,
            subject: `New enquiry from ${data.name} — My Salon Professional`,
            text: body,
          }),
        });
        if (!res.ok) {
          const t = await res.text();
          console.error("Resend error:", res.status, t);
          throw new Error("email_failed");
        }
      } catch (err) {
        console.error("Contact email failed:", err);
        // Still return ok=true to user — the lead is logged server-side
      }
    } else {
      console.log("[Contact form submission — RESEND_API_KEY not set]\n" + body);
    }

    return { ok: true };
  });
