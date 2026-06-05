import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contactfunctions";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export function ContactForm() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      service: String(fd.get("service") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      website: String(fd.get("website") || ""),
    };

    const fe: FieldErrors = {};
    if (payload.name.length < 2) fe.name = "Please enter your name";
    if (payload.phone.length < 7) fe.phone = "Please enter a valid phone number";
    if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
      fe.email = "Invalid email";
    if (payload.message.length < 5) fe.message = "Tell us a bit more about what you'd like";
    if (Object.keys(fe).length) {
      setErrors(fe);
      return;
    }

    setStatus("loading");
    try {
      await submit({ data: payload });
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please WhatsApp or call us directly.");
    }
  }

  const input =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Your name *
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={80}
            className={`mt-1.5 ${input}`}
            placeholder="Priya Sharma"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            maxLength={20}
            className={`mt-1.5 ${input}`}
            placeholder="+91 98XXXXXXXX"
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={120}
            className={`mt-1.5 ${input}`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium">
            Service of interest
          </label>
          <select id="service" name="service" className={`mt-1.5 ${input}`} defaultValue="">
            <option value="">Choose a service</option>
            <option>Bridal Makeup</option>
            <option>Party / HD Makeup</option>
            <option>Hair Smoothening / Keratin</option>
            <option>Balayage / Hair Color</option>
            <option>Acrylic Nails / Nail Art</option>
            <option>Facial / Skin Treatment</option>
            <option>Body Waxing</option>
            <option>Beauty Parlor Course</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={1500}
          rows={4}
          className={`mt-1.5 ${input}`}
          placeholder="Tell us what you’re looking for, preferred date, etc."
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold hover:opacity-90 transition disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Enquiry
          </>
        )}
      </button>

      {status === "success" && (
        <div className="flex items-start gap-2 rounded-xl bg-secondary p-4 text-sm text-secondary-foreground">
          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
          <span>
            Thank you! We’ve received your enquiry and will reach out shortly. For urgent bookings,
            WhatsApp us directly.
          </span>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="w-5 h-5 shrink-0" /> <span>{errorMsg}</span>
        </div>
      )}
    </form>
  );
}
