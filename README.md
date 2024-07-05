# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Workflow actions

Once it is cloned make sure you enable permissions

`Settings > Actions > General` make sure in **Workflow permissions** **Read and Write** is granted

<img width="1312" alt="image" src="https://github.com/n1md7/three-boilerplate/assets/6734058/d5f4bd64-45e5-4025-a6e6-d869c801b4e4">

### How to deploy to GitHub Pages?

Just create a new release

1. Navigate to **Releases**
2. Click **Choose a tag**
3. Type your tag name similarly to `v1.0.0` (increment the last version)
4. Click **create new tag** (plus button)
5. Click **Publish release**

Pipeline is going to run and deploy the application
