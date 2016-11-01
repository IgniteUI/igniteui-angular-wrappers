import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ProductData implements InMemoryDbService {
  createDb() {
    let products = [
  {
    "ProductID": 1,
    "ProductName": "Chai",
    "DealerName": "A",
    "CategoryName": "Beverages",
    "ImageUrl": "../../images/samples/nw/categories/1.png",
    "InStock": 39,
    "Inventory": "" 
  },
  {
    "ProductID": 2,
    "ProductName": "Chang",
    "DealerName": "B",
    "CategoryName": "Beverages",
    "ImageUrl": "../../images/samples/nw/categories/1.png",
    "InStock": 17,
    "Inventory": ""
  },
  {
  
    "ProductID": 3,
    "ProductName": "Aniseed Syrup",
    "DealerName": "C",
    "CategoryName": "Condiments",
    "ImageUrl": "../../images/samples/nw/categories/2.png",
    "InStock": 13,
    "Inventory": ""
  },
  {
    "ProductID": 4,
    "ProductName": "Chef Anton\u0027s Cajun Seasoning",
    "DealerName": "D",
    "CategoryName": "Condiments",
    "ImageUrl": "../../images/samples/nw/categories/2.png",
    "InStock": 53,
    "Inventory": ""
  },
  {
  
    "ProductID": 5,
    "ProductName": "Chef Anton\u0027s Gumbo Mix",
    "DealerName": "E",
    "CategoryName": "Condiments",
    "ImageUrl": "../../images/samples/nw/categories/2.png",
    "InStock": 0,
    "Inventory": ""
  },
  {
  
    "ProductID": 6,
    "ProductName": "Grandma\u0027s Boysenberry Spread",
    "DealerName": "F",
    "CategoryName": "Condiments",
    "ImageUrl": "../../images/samples/nw/categories/2.png",
    "InStock": 120,
    "Inventory": ""
  },
  {
  
    "ProductID": 7,
    "ProductName": "Uncle Bob\u0027s Organic Dried Pears",
    "DealerName": "G",
    "CategoryName": "Produce",
    "ImageUrl": "../../images/samples/nw/categories/7.png",
    "InStock": 15,
    "Inventory": ""
  },
  {
  
    "ProductID": 8,
    "ProductName": "Northwoods Cranberry Sauce",
    "DealerName": "H",
    "CategoryName": "Condiments",
    "ImageUrl": "../../images/samples/nw/categories/2.png",
    "InStock": 6,
    "Inventory": ""
  },
  {
  
    "ProductID": 9,
    "ProductName": "Mishi Kobe Niku",
    "DealerName": "I",
    "CategoryName": "Meat/Poultry",
    "ImageUrl": "../../images/samples/nw/categories/6.png",
    "InStock": 29,
    "Inventory": ""
  },
  {
    
    "ProductID": 10,
    "ProductName": "Ikura",
    "DealerName": "J",
    "CategoryName": "Seafood",
    "ImageUrl": "../../images/samples/nw/categories/8.png",
    "InStock": 31,
    "Inventory": ""
  },
  {
  
    "ProductID": 11,
    "ProductName": "Queso Cabrales",
    "DealerName": "K",
    "CategoryName": "Dairy Products",
    "ImageUrl": "../../images/samples/nw/categories/4.png",
    "InStock": 22,
    "Inventory": ""
  },
  {
    
    "ProductID": 12,
    "ProductName": "Queso Manchego La Pastora",
    "DealerName": "J",
    "CategoryName": "Dairy Products",
    "ImageUrl": "../../images/samples/nw/categories/4.png",
    "InStock": 86,
    "Inventory": ""
  },
  {
    
    "ProductID": 13,
    "ProductName": "Konbu",
    "DealerName": "K",
    "CategoryName": "Seafood",
    "ImageUrl": "../../images/samples/nw/categories/8.png",
    "InStock": 24,
    "Inventory": ""
  },
  {
    
    "ProductID": 14,
    "ProductName": "Tofu",
    "DealerName": "L",
    "CategoryName": "Produce",
    "ImageUrl": "../../images/samples/nw/categories/7.png",
    "InStock": 35,
    "Inventory": ""
  },
  {
    
    "ProductID": 15,
    "ProductName": "Genen Shouyu",
    "DealerName": "M",
    "CategoryName": "Condiments",
    "ImageUrl": "../../images/samples/nw/categories/2.png",
    "InStock": 39,
    "Inventory": ""
  }
];
    return {products};
  }
}