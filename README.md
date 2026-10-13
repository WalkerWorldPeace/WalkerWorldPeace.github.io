# Yongxian Wei — Personal Homepage

Academic homepage: https://walkerworldpeace.github.io/

Built with Jekyll and the AcadHomepage template, hosted on GitHub Pages.

## Updating the site

- `_pages/about.md`: biography, publications, honors, education, and academic service.
- `_data/navigation.yml`: navigation links. Use the explicit section IDs in `about.md`; keep links in sync with visible sections.
- `_config.yml`: site URL, search description, sidebar affiliation, contact details, and optional Analytics.
- `images/`: portrait and site icons. Icon paths in `site.webmanifest` are relative to this directory.
- `images/publications/`: publication thumbnails; `sources.json` records their source URLs and PDF crops. The MLWDUDM thumbnail is a concept summary, not an extracted paper figure.
- `_sass/_publications.scss`: responsive figure-and-text layout. Clicking a figure opens the existing image viewer; hidden publications remain commented out in `about.md`.
- `_includes/seo.html`: search and social-sharing metadata. The existing portrait is used as the default sharing image.

The biography says fourth-year PhD student as of October 2026; review it at the start of each academic year.

## Local preview

Install Ruby, Bundler, and the build tools required by Jekyll, then run from the repository directory:

```sh
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000/. Restart the server after changing `_config.yml`.

`Gemfile.lock` records the existing GitHub Pages dependency versions. Upgrade them separately, with a successful local build and a check of the GitHub Pages deployment environment before publishing.

## Optional services

Google Analytics is disabled by default. To enable it, set `google_analytics_id` in `_config.yml` to your actual GA4 measurement ID (`G-...`). A Google Scholar profile ID is not an Analytics ID.

Automatic citation fetching is disconnected because the data endpoint is unavailable and the page contains no citation counters. The legacy crawler and include remain available for future integration, but are not loaded by the homepage. Re-enabling requires a working data publication workflow, matching page elements, and error handling.

Search-engine verification settings should contain only verification values issued for this website.

## Publishing

Review changes and preview the site before committing and pushing to the repository branch configured in GitHub Pages. Local edits alone do not update the public website.

## Credits and license

Based on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io), with influences from [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) and [Academic Pages](https://github.com/academicpages/academicpages.github.io).

Font Awesome is distributed under the SIL OFL 1.1 and MIT licenses. See `LICENSE` for the repository license. The original template documentation is retained in `docs/README-zh.md` for reference; optional features described there may not be enabled on this site.
