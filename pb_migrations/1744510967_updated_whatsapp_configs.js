/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2701415683")

  // remove field
  collection.fields.removeById("text2106269621")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file2106269621",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "qr_code",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2701415683")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2106269621",
    "max": 0,
    "min": 0,
    "name": "qr_code",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("file2106269621")

  return app.save(collection)
})
