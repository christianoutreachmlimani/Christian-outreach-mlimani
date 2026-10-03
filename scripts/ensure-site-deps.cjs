const { spawnSync } = require("node:child_process");
const { existsSync } = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const vinextBin = path.join(root, "site", "node_modules", ".bin", process.platform === "win32" ? "vinext.cmd" : "vinext");

if (!existsSync(vinextBin)) {
  console.log("Installing site dependencies for the build...");
  const result = spawnSync("npm", ["--prefix", "site", "ci", "--include=dev"], {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
