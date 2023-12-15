# NIS Virtual Hack 2023

## Instructions

### Installing the project

Upon downloading the project, run `yarn install` within the root of the project to install all dependencies. Note that we're using the yarn caching mechanism to speed up the installation process - a.k.a. zero-installs.

note about node_modules:
Don't worry if packages are installed "two times", yarn will create simlinks between the packages, If you want to get the autocomplete thingy going on in your code editor and you're missing node_modules, run yarn install directly in the package and you'll get a lot of simlinks iirc.

### Running the scripts

Within the root of the project, run the scripts by typing `yarn run <script-name>`. For example, to run the `build` script, type `yarn run build`. Scripts are defined in the root `package.json` file.

Within this yarn workspaces monorepo, you can invoke lower level scripts by typing `yarn workspace <workspace-name> <script-name>`. For example, to run the `build` script in the `packages/client` workspace, type`yarn workspace client build`.

Scripts:
- `start:docs` - starts the docusaurus docs
- `start:app` - starts the metro bundler for the expo app
- `start:supabase` - starts the supabase on the localhost. NOTE - Luka to make sure that other people dont need to worry bout supabase, introduce nodemon to do hotreloads or something every now and then
- `start:visualizer` - starts the visualizer on localhost:3000 (figure out if supabase needs port 3000)

## Packages within the monorepo

### Refer to package specific directory for docs about that package (or docusaurus docs)

Currently we're planning on using the following packages within our monorepo:
- supabase - this is our backend as a service package, we're using the supabase cli to manage the database / edge functions etc.
- app - package containing our expo application
- mocks - since we're building a POC, we shall add some sort of mock services / simulations that would help us explain our idea further. This package will contain such.
- docs - this package will contain docusaurus documentation about the endpoints and such
- visualizer - visualization service, you can check it out [here](https://github.com/zernonia/supabase-schema), kudos to the guy. Used for visualizing the database schemas.

## Versioning the monorepo

Semantic versioning

## Branch structure during the Hackathon
- master - this branch will contain the LTS version of the project. Luka shall manage the pull requests and merges
- develop - this branch shall be our rolling branch
- feat/feature-name - feature specific branches

Hotfixes go into develop!!!