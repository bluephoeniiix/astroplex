# Astroplex
An optimized theme from Astro Starlight

## Features

### Optimized Typography

- Replaced Roboto fonts with IBM Plex font families
- Minor viewports' adjustments

### Optimized Theme 

- Theme modifications inspired by IBM Carbon Design Light/Dark Theme

### Katex Support

- Implemented missing math formula support from Starlight

### Diagram support (to do)

- Plan to implement missing diagram support from Starlight

More functionalities are under development

## Showcases

[Visit this link](https://bluephoeniiix.github.io)

## How to use

### Installations && Dev

Inside `install-scripts` folder, enter:

```bash
docker build -t your-image-name .
```

Then:

```bash
docker run -i -t your-image-name /bin/bash
```

Then:

```bash
bash install.sh
```

Then activate nvm env:

```bash
bash
```

After this, you can check whether nvm and pnpm are installed or not.

`cd` into `astroplex` folder, type:

```bash 
pnpm install
```

#### Port Forwarding

You probably need Visual Studio Code for Docker Remote Connect. If not, please modify Docker's port forwarding.

Open Visual Studio Code, search for the Remote Dev and Docker plugin, click on the instance, and attach to Visual Studio Code.

Then `cd` into the `docs/` folder, type:

```bash
npm run dev
```

The webpage will be rendered under the dev mode.

### Disable Astro Dev Bar

In the `docs/` folder, find `packages.json`, and replace `dev` option's content with:

```bash
npm cache clean --force && astro preferences disable devToolbar && astro dev
```

## Github Pages

Remember to add `.nojekyll` file into your page repo.