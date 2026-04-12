// @ts-check
import { defineConfig } from 'astro/config';

/** @param {string | undefined} raw */
function normalizeBase(raw) {
	if (!raw || raw === '/') return '/';
	const withSlash = raw.startsWith('/') ? raw : `/${raw}`;
	return withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
}

const site = process.env.SITE_URL ?? 'https://naruto1031.github.io';
const base = normalizeBase(process.env.BASE_PATH ?? '/');

// https://astro.build/config
export default defineConfig({
	site,
	base,
	output: 'static',
});
