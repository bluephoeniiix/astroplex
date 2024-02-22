# Astroplex
A modified version Starlight Astro theme.

## Features

1. Support MDX
2. Support Katex
3. Light / Dark Themes
4. Responsive Layout
5. Full Text Searching
6. Last Edited Time Enabled
7. Expressive Code Highlighting (IBM Plex Theme)
8. Visualized File Tree Structures
9. Font Replacement (IBM Plex)

More functionalities are in developing.

## Showcases

![dark theme with 2k PC screen's layout](/1.png)
![math support in dark theme](/2.png)
![bright theme with 2k PC screen's layout](/3.png)
![bright theme with Phone sceen's layout](/4.png)

## Installations && Dev

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

After this you can check wether nvm and pnpm are installed or not.

`cd` into `astroplex` folder, type:

```bash 
pnpm install
```

Then `cd` into `docs/` folder, type:

`npm run dev`

Webpage will be rendered under the dev mode.
