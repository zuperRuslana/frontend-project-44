install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-progression:
	node bin/brain-progression.js
publish:
npm publish --dry-run

lint:
	npx eslint .
