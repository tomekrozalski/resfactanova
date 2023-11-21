import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	return !Number.isNaN(param) && Number(param) > 0 && Number(param) < 100;
};
