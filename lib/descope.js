import { createSdk } from "@descope/nextjs-sdk/server";

export const descopeSdk = createSdk({
   projectId: process.env.DESCOPE_PROJECT_ID,
   managementKey: process.env.DESCOPE_MANAGEMENT_KEY,
});