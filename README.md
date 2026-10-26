# Special Paste from Finder

A small Raycast extension for normal Finder copy followed by a special paste as an absolute path.

1. Select a file or folder in Finder and press **Command+C**.
2. Switch to the destination app.
3. Press **Option+Shift+V**, assigned in Raycast to **Paste File Path as Text**.

The command uses Raycast's clipboard API to insert a plain-text path. It does not run the path, inspect file contents, or contact a network service. Paths are pasted literally; quote paths containing spaces when using them as shell command arguments.

## Install on each Mac

Requirements: Raycast, Node.js 22.14 or newer, and npm.

Clone this repository to `~/code/special-paste-from-finder`, or let chezmoi create that checkout. In the project folder run:

```sh
npm ci
npm run dev
```

Once Raycast shows **Paste File Path as Text**, stop the development watcher with **Control+C**. The installed extension remains available.

In Raycast, select the command, open **Actions → Configure Command → Set Hotkey**, and assign **Option+Shift+V**. If an older shell command owns that hotkey, transfer it to this extension. Raycast manages the shortcut; no macOS keyboard shortcut or Automator service is needed. Raycast needs Accessibility permission to paste into other apps.

## Stable command identity and backups

Keep these manifest fields unchanged on every machine:

- Author: `joihn`
- Extension: `special-paste-from-finder`
- Command: `paste-file-path`

The command link is `raycast://extensions/joihn/special-paste-from-finder/paste-file-path`.

This identifies an extension command rather than a shell script at an absolute home-directory path. Register the extension on each Mac before restoring its Raycast hotkey settings. A Raycast settings backup does not replace the local installation of this development extension. Export/import behavior across different Raycast versions should still be checked after a restore.

## Chezmoi checkout

The dotfiles configuration can clone and update the project using a native Git external:

```toml
["code/special-paste-from-finder"]
    type = "git-repo"
    url = "https://github.com/joihn/special-paste-from-finder.git"
    refreshPeriod = "1s"
    pull.args = ["--ff-only"]
```

Chezmoi checks for updates on deployment, at most once per second. Fast-forward-only pulls preserve local work instead of creating automatic merges. This synchronizes the checkout; run the installation steps above once per Mac, and again after changes that need a rebuilt extension.

## Development

```sh
npm ci
npm run typecheck
npm run build
npm run dev
```

The source, lockfile, and an original clipboard icon are included. Dependencies and generated build files are ignored by Git.
