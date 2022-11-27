MintEditor is a friendly rich text editor for IM.
## Features

- ⚛️ Create React App 3 (React 16.8)
- 📖 Storybook 5
- 🐈 Yarn Workspaces
- 🐉 Lerna 3
- ✨ Host Multiple Packages in one Monorepo
- 🔥 Hot Reload all Apps, Components & Storybooks
- 👨‍🔬 Test all workspaces with Eslint & Jest using one command
- :octocat: Deploy your apps to Github Pages using one command

## Setup

### Pre-Requisites

- Yarn ^1.13.0
- Node >11.14.0

### Installation

```bash
git clone git@github.com:react-workspaces/mint-editor.git
cd mint-editor
yarn
yarn start:app
```

### workspace command

```bash
yarn workspace <workspace_name> <command>
```

This will run the chosen Yarn command in the selected workspace.

Example:

```bash
# add `react-router-dom` as `dependencies` in your `packages/my-app/package.json`
yarn workspace my-app add react-router-dom --dev
# remove `react-router-dom` as `dependencies` in your `packages/my-app/package.json`
yarn workspace my-app remove react-router-dom --dev
# executes the specified project scripts command
yarn workspace @mint-editor/app-react start
# don't use it, homepage is hosted by main branch
yarn workspace @mint-editor/app-react deploy

```
