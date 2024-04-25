"use strict";
/*
Mini Inventory Management System:
JS130 exercise
 */

/*
Requirements:
1. item creator:
  ~make sure necessary info are
  present & valid

2. item manager (singular?)
  ~create items, update info on items,
  delete items, querying info on items

  PROPERTY & METHOD: things well noting
  - items (I will make it as static property)

  NOTE: may add methods as I deem fit.
3. report managers
  ~generates reports for:
    a specific item 
    OR
    ALL items
  ~Reports for specific items are generated
  from REPORT OBJECT created FROM 
  report manager.
  ~Report manager reports for ALL ITEMS

Note: (seems like there is one ReportManager for 
generic stuff, if I want more specfic info of an item,
i need to createReporter object which will report
itemInfo)

ITEM required info:
1. SKU code: identifier for a product.
~consist of first 3 letters of item
& first 2 letters of the category

RULE: if item name consists of 2 words +
the first word consist of two letters only,
the next letter is taken from the next word.

Note: (no need to have ability to validate uniqueness)

2. Item name: Must have minimum of 5 characters.
(Space is not counted as characters)

3. Category: Must be ONE word, min 5 characters
AND ONE word

4. Quantity:
~ Can't be blank.
~ quanittly in stock of an item
~ Assume valid number will be given.

*/


/*

ItemManager (obj)
- create item ('football', 'sports', 5)
need to check valid or invalid
what should be updated?

ex
ItemManager.items = {SKU:{quantity: 5}, SKU2: etc..}

which establishes

itemCreator:
*/

let ItemManager = {
  items: {}, //ex:{SKU1: {prop: val}, SKU2: {prop: val}}

  create(name, category, quantity) {
    let [item, SKU] = this.itemCreator(name, category, quantity);
    if (item.notValid) console.log('invalid creation');
    else {
      this.items[SKU] = item;
    }
  },

  itemCreator(name, category, quantity) {
    if (this.isInvalidName(name)) return [{notValid:true},null];
    if (this.isInvalidCategory(category)) return [{notValid:true},null];
    if (typeof quantity !== 'number' || quantity < 0) return [{notValid:true},null];


    let SKU = this.createSKU(name, category);
    let itemObj = {
      skuCode: SKU,
      itemName: name,
      category,
      quantity
    };
    return [itemObj, SKU];
  },

  isInvalidName(name) {
    const REQ_CHAR_LENGTH = 5;

    let nameCharCount = name.split(' ').join('').length;
    return nameCharCount < REQ_CHAR_LENGTH;
  },

  isInvalidCategory(category) {
    const REQ_CHAR_LENGTH = 5;
    const ALLOWED_WORD_COUNT = 1;

    let wordCount = category.split(' ').length;
    if (wordCount > ALLOWED_WORD_COUNT) return true;
    else  return category.length < REQ_CHAR_LENGTH;
  },

  createSKU(name, category) {
    let sku;
    let wordCount = name.split(' ').length;
    let firstWordLength = name.split(' ')[0].length;
    if (wordCount === 1 || (wordCount === 2 && firstWordLength >= 3)) {
      sku = name.slice(0,3) + category.slice(0,2);
    } else if (wordCount === 2 && firstWordLength === 2) {
      sku = name.slice(0,2) + category.slice(0,3);
    }

    return sku.toUpperCase();
  },

  update(SKU, quantityObj) {
    this.items[SKU].quantity = quantityObj.quantity;
  },

  inStock() {
    let itemsArr = Object.values(this.items);

    itemsArr.forEach(item => {
      if (item.quantity !== 0) console.log(item.itemName);
    });
    console.log();
  },

  itemsInCategory(category) {
    let itemsArr = Object.values(this.items);
    return itemsArr.reduce((arr, item) => {
      if (item.category === category) arr.push(item);
      return arr;
    }, []);
  },

  delete(SKU) {
    delete this.items[SKU];
  }

};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager.items;
    this.reportInStock = itemManager.inStock;
    //return this;
  },

  createReporter(SKU) {
    let items = this.items;
    return {
      itemInfo() {
        let item = items[SKU];
        for (let key in item) {
          let value = item[key];
          console.log(`${key} : ${value}`);
        }
        console.log();
      }
    };
  },

};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);  
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();


// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();