const isNode = typeof window === 'undefined';
const windowObj = isNode ? { localStorage: new Map() } : window;
const storage = windowObj.localStorage;

const toSnakeCase = (str) => {
	return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

const getAppParamValue = (paramName, { defaultValue = undefined, removeFromUrl = false } = {}) => {
	if (isNode) {
		return defaultValue;
	}
};

const clearAppParams = () => {
	if (isNode) {
		// Clear URL params
		window.history.replaceState({}, '', window.location.pathname);
	} else {
		// Clear local storage
		storage.clear();
	}
};

const getAppParams = () => {
	if (isNode) {
		return {
			appId: import.meta.env.VITE_APP_ID,
			token: localStorage.getItem('access_token') || null,
			fromUrl: window.location.href,
			functionsVersion: import.meta.env.VITE_FUNCTIONS_VERSION,
			appBaseUrl: import.meta.env.VITE_APP_BASE_URL,
		}
	} else {
		return {
			appId: import.meta.env.VITE_APP_ID,
			token: localStorage.getItem('access_token') || null,
			fromUrl: window.location.href,
			functionsVersion: import.meta.env.VITE_FUNCTIONS_VERSION,
			appBaseUrl: import.meta.env.VITE_APP_BASE_URL,
		}
	}
};

export const appParams = {
	...getAppParams()
};
