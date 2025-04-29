/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2970456992")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_27982692",
    "hidden": false,
    "id": "relation1432452925",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "farmacia_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2970456992")

  // remove field
  collection.fields.removeById("relation1432452925")

  return app.save(collection)
})
