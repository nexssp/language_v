module.exports = {
  "sqlite3.h' not found": process.replacePMByDistro(
    "apt install libsqlite3-dev"
  ),
  "openssl/rand.h' not found": process.replacePMByDistro(
    "apt install libssl-dev"
  ),
  "the following imports were never used:":
    "v install <found1> OR nexss v install <found1>",
  '(builder error: cannot import module "util" (not found)|undefined ident: `util`)':
    "Import util by: 'import v.util'",
  "unknown function: full_v_version":
    "To use 'full_v_version' you need to import util by: 'import v.util' and use it eg. like: 'util.full_v_version(false)'",
};
