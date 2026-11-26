// Custom GA4 event tracking for interactions Enhanced Measurement doesn't
// cover automatically. Outbound links (LinkedIn, Scholar, ORCID, DOIs, etc.)
// are already tracked by GA4's built-in "Outbound Click" measurement —
// mailto: links are not, since they don't navigate to a different domain.

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener("click", () => {
      if (typeof gtag === "function") {
        gtag("event", "email_click", {
          link_url: link.href
        });
      }
    });
  });
});
