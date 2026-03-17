import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';

const adapter = node({ mode: 'standalone' });

export default defineConfig({
    base: "/portal",
    env: {
        schema: {
            GIDE_SEARCH_API: envField.string({
                type: "string",
                required: true,
                access: "public",
                context: "client",
                default: "https://wwwdev.gide-project.org/search/search"
            }),
        }
    },
    adapter
});