"use strict";

class Cacher {
	constructor() {
		this.cachedObject = {};
		this.cleanTime = 10000;
	}

	add(key, value) {
		if (!key) {
			return console.error(`Key is not found!`);
		}

		if (!value) {
			return console.error(`Value is not found!`);
		}

		if (typeof key !== "string") {
			return console.error(`Key is not a string!`);
		}

		this.cachedObject[key] = value;
	}

	delete(key) {
		if (!key) {
			return console.error(`Key is not found!`);
		}

		if (typeof key !== "string") {
			return console.error(`Key is not a string!`);
		}

		delete this.cachedObject[key];
	}

	get(key) {
		if (!key) {
			return console.error(`Key is not found!`);
		}

		if (typeof key !== "string") {
			return console.error(`Key is not a string!`);
		}

		return this.cachedObject[key];
	}

	set(key, value) {
		if (!key) {
			return console.error(`Key is not found!`);
		}

		if (!value) {
			return console.error(`Value is not found!`);
		}

		if (typeof key !== "string") {
			return console.error(`Key is not a string!`);
		}

		if (!this.cachedObject[key]) {
			return console.error(`Key is not found in cached object!`);
		}

		this.cachedObject[key] = value;
	}

	setLimit(volume = 24) {
		if (!volume) {
			return console.error(`Volume is not found!`);
		}

		if (typeof volume !== "number") {
			return console.error(`Volume is not a string!`);
		}

		const $KEYS = Object.keys(this.cachedObject);

		setInterval(() => {
			if ($KEYS.length < volume) {
				return;
			}
			
			for (let i = 0; i < $KEYS.length; i++) {
				delete this.cachedObject[$KEYS[$KEYS.length]];
			}
		}, this.cleanTime);
	}

	setCleanTime(newTime = 1000) {
		if (!newTime) {
			return console.error(`New time is not found!`);
		}

		if (typeof newTime !== "number") {
			return console.error(`New time is not a string!`);
		}

		this.cleanTime = newTime;
	}
}

exports.Cacher = Cacher;