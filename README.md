# Not App

Yet another simple note application.

## Features

- React Native Reusable
- Tabs layout
- NativeWind v4
- Nix Flake Initialised
- Dark and light mode
  - Android Navigation Bar matches mode
  - Persistant mode

## Build

1. Install [Nix](https://nixos.org/download/) and setup development environment

```bash
sh <(curl -L https://nixos.org/nix/install) --daemon

# NOTE: Follow the installation process as instructed on Nix website
# before running the following command

nix develop
```

2. Install dependencies using bun

```bash
bun install # or bun i
```

3. Run the application

```bash
# use appropriate command for your platform
bun android
bun ios
bun web
```
