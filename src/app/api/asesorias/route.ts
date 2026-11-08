import { createAdvisoryHandler } from "@/lib/advisory-request";

export const runtime = "nodejs";
export const POST = createAdvisoryHandler({
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  },
});
