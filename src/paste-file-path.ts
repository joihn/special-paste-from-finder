import { Clipboard, closeMainWindow, showHUD } from "@raycast/api";
import { isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";

export default async function pasteFilePath() {
  try {
    const { file } = await Clipboard.read();
    if (!file) {
      await showHUD("Copy a file or folder in Finder first (⌘C)");
      return;
    }

    const path = file.startsWith("file:") ? fileURLToPath(file) : file;
    if (!isAbsolute(path)) {
      await showHUD("The clipboard does not contain an absolute file path");
      return;
    }

    await closeMainWindow();
    await Clipboard.paste({ text: path });
  } catch {
    await showHUD("Could not paste the copied file's path");
  }
}
