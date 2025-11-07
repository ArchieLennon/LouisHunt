import { createClient } from "next-sanity";

const projectId = "o6bq730o";
const dataset = "production";
const apiVersion = "2025-01-01";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})