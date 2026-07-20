---
title: "Contact"
lead: "Tell us about your project — we'd love to hear from you."
---

The quickest way to reach us is email: **[hello@shuntyard.com](mailto:hello@shuntyard.com)**.
Prefer a form? Fill this in and we'll get back to you within one business day.

<form action="https://formspree.io/f/your-form-id" method="POST">
  <div class="grid">
    <label>
      Name
      <input type="text" name="name" placeholder="Your name" required>
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="you@company.com" required>
    </label>
  </div>
  <label>
    Message
    <textarea name="message" rows="6" placeholder="What are you building?" required></textarea>
  </label>
  <button type="submit">Send message</button>
</form>

*The form posts to a placeholder endpoint — replace the `action` URL in
`content/contact.md` with your own form handler (e.g. Formspree) to receive
submissions.*
