# NIS Virtual Hack 2023

## Instructions

### Running the scripts

Within the root of the project, run the scripts by typing `yarn run <script-name>`. For example, to run the `build` script, type `yarn run build`. Scripts are defined in the root `package.json` file.

Within this yarn workspaces monorepo, you can invoke lower level scripts by typing `yarn workspace <workspace-name> <script-name>`. For example, to run the `build` script in the `packages/client` workspace, type`yarn workspace client build`.