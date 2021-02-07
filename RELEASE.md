# Release

1. Execute `yarn version --message "New: Release X.Y.Z"` (without the "v" prefix)
2. Declare the new version by prompting it to yarn CLI (without the "v" prefix)
3. Eventually modify the `CHANGELOG.md` when the editor opens
4. Close and save the `CHANGELOG.md` editor
5. Wait for the CI to complete and create a GitHub Release on top of the already present git tag "vX.Y.Z"
6. Enjoy, the CI should publish the new version to the registries
