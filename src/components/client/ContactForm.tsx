import {
  useState,
  cloneElement,
  type ReactElement,
  type ChangeEvent,
} from "react";
import { BiCommentAdd } from "react-icons/bi";

type FormState = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", query: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // 1. Convert form state values into standard URL-encoded string data for Netlify
    const formData = new URLSearchParams({
      "form-name": "contact", // Matches the 'name' attribute on your HTML form
      ...form,
    }).toString();

    try {
      // 2. Submit via POST to your root domain where Netlify routes process requests
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", query: "" }); // Reset fields
      } else {
        throw new Error("Netlify bad response");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div
      className="w-full
          rounded-xl p-4
          border border-white/10
          bg-white/5
          backdrop-blur-md
          shadow-lg shadow-black/20"
    >
      <BiCommentAdd className="text-4xl mb-2" />
      <p className="text-sm text-zinc-400 mb-6">I promise to get back Asap!</p>

      {status === "success" ? (
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <span className="text-3xl text-green-400">✓</span>
          <p className="font-semibold text-white">Message sent! ✨</p>
          <p className="text-sm text-zinc-400">Thanks for reaching out.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs text-blue-400 hover:underline cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Required hidden input for Netlify form detection inside React integrations */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Hidden Honeypot field to filter spam bots */}
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <Field label="Who's speaking?">
            <input
              type="text"
              className="focus:border-blue-300"
              name="name"
              placeholder="Bruce Wayne (Wayne Enterprises)"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Field>

          <Field label="Where do i reply?">
            <input
              type="email"
              name="email"
              placeholder="where-should-i-reply@company.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Field>

          <Field label="The Big Idea">
            <textarea
              name="query"
              placeholder="Tell me about your vision, your timeline, or your favorite movie..."
              value={form.query}
              onChange={handleChange}
              rows={4}
              required
            />
          </Field>

          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-1 w-full rounded-lg py-2.5 px-4
                font-semibold text-sm tracking-wide
                border border-white/10
                bg-white/10 hover:bg-white/15
                backdrop-blur-sm
                transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
                cursor-pointer text-white"
          >
            {status === "submitting" ? "Sending…" : "Get in Touch"}
          </button>
        </form>
      )}
    </div>
  );
};

const fieldClass = `w-full rounded-lg px-3.5 py-2.5
  bg-white/5 border border-white/10
  text-sm placeholder:text-zinc-500 text-white
  focus:outline-none focus:border-blue-300 focus:bg-white/8
  transition-all duration-150
  resize-none`;

const Field = ({
  label,
  children,
}: {
  label: string;
  children: ReactElement<{ className?: string }>;
}) => (
  <label className="flex flex-col gap-1.5">
    <span className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
      {label}
    </span>
    {cloneElement(children, { className: fieldClass })}
  </label>
);

export default ContactForm;
