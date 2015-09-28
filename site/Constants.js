"use strict";

exports.Pages = {
  HOME: 'HOME'
}

exports.APIPages = {
  TABLE_API: { location: 'api-table.html', title: 'Table'}
}
exports.ExamplePages = {
  OBJECT_DATA_EXAMPLE: {
    location: 'example-object-data.html',
    title: 'With JSON Data',
    description: 'A basic table example with two fixed columns, fed in some JSON data',
  }
};

exports.DOCS_DEFAULT = exports.APIPages.TABLE_API;
exports.EXAMPLES_DEFAULT = exports.ExamplePages.OBJECT_DATA_EXAMPLE;
