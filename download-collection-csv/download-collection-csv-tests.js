// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by download-collection-csv.js.
import { name as packageName } from "meteor/f3r:download-collection-csv";

// Write your tests here!
// Here is an example.
Tinytest.add('download-collection-csv - example', function (test) {
  test.equal(packageName, "download-collection-csv");
});
