declare module "astro:actions" {
	type Actions = typeof import("/Users/_perso/Documents/archUI/archui-lib/website/src/actions/index.ts")["server"];

	export const actions: Actions;
}