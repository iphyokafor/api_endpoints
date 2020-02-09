Basic store manager API to add and retrieve sales and products.   
Tools : Node / Express

Expected Endpoints
* Admin can add a product
* Admin/store attendant can get all products
* Admin/store attendant can get a specific product
* Store attendant can add a sale order
* Admin can get all sale order records

EndPoint  Functionalities   
GET /products  :  Fetch all products    
GET /products/<productId> :  Fetch a single product record    
GET /sales :  Fetch all sale records    
GET /sales/<saleId> : Fetch a single sale record    
POST /products : Create a product .   
POST /sales:   Create a sale order    
