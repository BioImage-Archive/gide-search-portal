import { defineConfig, envField } from 'astro/config';

export default defineConfig({
    base: "/gide-search",
    env: {
        schema: {
            GIDE_SEARCH_API: envField.string({
                type: "string",
                required: true,
                access: "public",
                context: "client",
                default: "http://127.0.0.1:8000/search"
            }),
        }
    }
});