import { writable } from 'svelte/store';

export const visibleMobileMenu = writable(false);
export const visibleBanner = writable(true);

export const mainFormSent = writable(false);
export const contactFormSent = writable(false);

export const image = writable(false);
