# Maintaining the project page and preparing the code release

## Website

GitHub Pages serves the `docs/` directory from the `main` branch. The site is static HTML, CSS, and JavaScript with no build dependencies.

- Page content: `docs/index.html`
- Appearance: `docs/style.css`
- Gallery playback and citation copying: `docs/app.js`
- Paper: `docs/paper/SpeLL.pdf`
- Published media: `docs/assets/`

Preview locally from the repository root:

```sh
python3 -m http.server 8000 --directory docs
```

Then open `http://localhost:8000/`. Committing and pushing changes to `main` updates the published Pages site.

The project URL is `https://stan5dard.github.io/SpeLL-project/`. Keep it stable because the presentation QR points here. QR files are `docs/assets/project-qr.png` and `docs/assets/project-qr.svg`.

## Adding the implementation

The public repository starts with a fresh history and intentionally contains no research implementation. Add curated files to the matching directories when they are ready:

- `unity/`: Unity client, scenes, and project configuration needed for the public demo.
- `server/`: Python backend and dependency specification.
- `data/`: schemas, sample metadata, and reproducible data preparation instructions.
- `scripts/`: setup and preprocessing utilities.

Add an implementation license, dependency/asset notices, and verified installation and usage instructions with the release. Use example configuration files with empty or dummy values. Keep credentials, local caches, participant data, and third-party asset packs out of Git. The `.gitignore` already covers common Unity, Python, and local credential paths.

Once runnable code is available, update the release status in both `README.md` and `docs/index.html`, and replace placeholder READMEs with the actual module instructions. The site’s Code buttons already point to this repository.

## Published media provenance

The PDF and figures come from the authors’ UIST 2026 paper. The overview video is a web-sized transcode of its original supplementary video. Gallery clips are crops of the eight-result presentation loop, derived from that same supplementary video; the camera phases were synchronized for presentation. No synthesized optimization trace is presented as an experimental result on this page.
