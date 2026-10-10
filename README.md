# Hilfreich

A web application for connecting people who can provide mutual aid to each other.

Please see [Hilfreich e.V.](https://hilfreichev.de/) (in German)
for a better understanding of what this app is trying to facilitate.

This is project is currently in brainstorming mode,
and may be replaced by other open source software.

## Requirements

* [Docker](https://www.docker.com/products/docker-desktop/)
* [Docker Compose](https://docs.docker.com/compose/install/)

## Quick Start

Start docker:

```bash
docker compose up -d
```
Visit [localhost:8000](http://localhost:8000).

When you're done, shut down the docker container:

```bash
docker compose down
```

### TEMPORARY ISSUES WITH SETUP

For the very first time the project runs, it doesn't complete the installation of the yarn dependencies.

This doesn't happen for subsequent runs, provided that some manual steps are run. These manual steps can be found in [Issue 8](https://github.com/kamni/hilfreich/issues/8) on github.

See the section "Steps to Get the Container Running".
