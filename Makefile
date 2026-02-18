i:
	npm install

ir:
	rm -rf node_modules package-lock.json
	npm cache clean --force
	npm install

d:
	npm  run dev

b:
	npm run build

g:
	npm  run generate

p:
	npm run preview

l:
	npm run lint

lf:
	npm run lint:fix

f:
	npm run format

fc:
	npm run format:check
