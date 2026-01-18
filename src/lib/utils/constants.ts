import { normalizeBy } from '.';

export type Soundtrack = {
	src: string[];
};
export type Route = {
	name: string;
	path: string;
	icon?: string;
	soundtrack?: Soundtrack;
};

export const ROUTES = {
	home: () => '/',
	ccpoop: () => '/ccpoop',
	ccmovies: () => '/ccmovies',
	about: () => '/about'
};
export const menuDict: Record<string, Route> = {
	home: {
		name: 'Home',
		path: ROUTES.home(),
		icon: 'solar:home-outline',
		soundtrack: {
			src: [
				'https://directus.smokinggoats.art/assets/4c1c1822-a761-4a2f-876d-4c64e12917e1.flac?format=mp3'
			]
		}
	},
	ccpoop: {
		name: 'Poop',
		path: ROUTES.ccpoop(),
		soundtrack: {
			src: [
				'https://directus.smokinggoats.art/assets/4c1c1822-a761-4a2f-876d-4c64e12917e1.flac?format=mp3'
			]
		}
	},
	ccmovies: {
		name: 'Firme?',
		path: ROUTES.ccmovies(),
		soundtrack: {
			src: [
				'https://directus.smokinggoats.art/assets/4c1c1822-a761-4a2f-876d-4c64e12917e1.flac?format=mp3'
			]
		}
	},
	about: {
		name: 'About',
		path: ROUTES.about(),
		soundtrack: {
			src: [
				'https://directus.smokinggoats.art/assets/4c1c1822-a761-4a2f-876d-4c64e12917e1.flac?format=mp3'
			]
		}
	}
};

export const menu = Object.values(menuDict);

export const menuByRoute = menu.reduce(...normalizeBy<'path', Route>('path')).byId;
