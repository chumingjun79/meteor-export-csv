Package.describe({
  summary: "Export a collection to csv",
  name: "f3r:download-collection-csv",
  version: "0.0.9",
  git: "https://github.com/f3r/meteor-export-csv.git"
});

Package.on_use(function(api) {
  api.add_files([
    'lib/exportcsv.js'
  ], ['client', 'server']);
  api.add_files([
    'lib/FileSaver.min.js'
  ], ['client']);
  if (api.export) {
    api.export('exportcsv');
    api.export('saveAs');
  }
});
