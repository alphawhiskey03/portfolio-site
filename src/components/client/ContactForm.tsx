import {
  useState,
  cloneElement,
  type ReactElement,
  type ChangeEvent,
} from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", query: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setStatus("submitting");
    // Replace with your actual form endpoint (e.g. Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  };

  return (
    <div className="flex justify-center lg:px-4 py-10 w-full lg:ml-78 ">
      <div
        className="w-full max-w-lg
          rounded-xl p-4
          border border-white/10
          bg-white/5
          backdrop-blur-md
          shadow-lg shadow-black/20"
      >
        <h2 className="text-2xl font-bold tracking-tight mb-1">Get in touch</h2>
        <p className="text-sm text-zinc-400 mb-6">
          I'll get back to you as soon as I can.
        </p>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <span className="text-3xl">✓</span>
            <p className="font-semibold">Message sent!</p>
            <p className="text-sm text-zinc-400">Thanks for reaching out.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Field label="Name">
              <input
                type="text"
                className="focus:border-blue-300"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Field>

            <Field label="Email">
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Field>

            <Field label="Message">
              <textarea
                name="query"
                placeholder="What's on your mind?"
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
                cursor-pointer"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const fieldClass = `w-full rounded-lg px-3.5 py-2.5
  bg-white/5 border border-white/10
  text-sm placeholder:text-zinc-500
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
