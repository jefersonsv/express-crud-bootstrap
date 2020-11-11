# express-crud-bootstrap

Node + Express + Authentication + JWT + CRUD + Jest + Supertest + Nodemon + Dotenv + VSCode Debug + ESLINT

# Setup

## Create GIT

git init

## Create Node project

npm init -y

## Create custom folders

mkdir src test http .vscode

## Setup ESLINT

npx eslint --init

## Install project dependencies

npm i --save body-parser dotenv express jsonwebtoken

## Install dev dependencies

npm i --save-dev jest nodemon supertest

## Setup VSCODE environment

### VSCODE: Create a launch.json

Inside the configuration 'nodemon' & 'node'
change program to \\src\\server.js

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen",
            "name": "nodemon",
            "program": "${workspaceFolder}\\src\\server.js",
            "request": "launch",
            "restart": true,
            "runtimeExecutable": "nodemon",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "pwa-node"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\src\\server.js"
        }
    ]
}
```

### VSCODE: Create extensions -

https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions
Ctrl+Shift+P Extensions: Configure Recommended Extensions (Workspace)

```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.
  // Extension identifier format: ${publisher}.${name}. Example: vscode.csharp
  // List of extensions which should be recommended for users of this workspace.
  "recommendations": ["dbaeumer.vscode-eslint"],
  // List of extensions recommended by VS Code that should not be recommended for users of this workspace.
  "unwantedRecommendations": []
}
```

### VSCODE: Create settings

Ctrl+Shift+P Preferences: Open Workspace Settings (JSON)

```json
{
  "files.exclude": {
    "node_modules": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```

## CREATE CONF FILES

create .env file
