module.exports = {
  "sqlite3.h' not found": process.replacePMByDistro(
    "apt install libsqlite3-dev"
  ),
  "openssl/rand.h' not found": process.replacePMByDistro(
    "apt install libssl-dev"
  ),
  "the following imports were never used:":
    "v install <found1> OR nexss v install <found1>",
  'builder error: cannot import module "util" (not found)':
    "Import util by: 'import v.util'",
};
