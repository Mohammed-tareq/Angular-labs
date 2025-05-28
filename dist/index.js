"use strict";
var inStock;
(function (inStock) {
    inStock[inStock["ture"] = 1] = "ture";
    inStock[inStock["false"] = 0] = "false";
})(inStock || (inStock = {}));
// =====================================================================
const product = {
    Id: 1,
    name: "t-shirt",
    price: 500,
    inStock: inStock.false
};
function productDetails(getProduct) {
    if (typeof getProduct === "string" || !getProduct.name && !getProduct.Id) {
        console.log("your product is undefined!");
        return;
    }
    console.log({
        Id: getProduct.Id,
        name: getProduct.name,
        price: getProduct.price + "$",
        inStock: getProduct.inStock
    });
}
// productDetails(product)
// ===========================generic function wrapValue<T>=======================================
const listNames = ["tareq", "mohammed", "tareq"];
const listNumbers = [58, 5, 12];
function getArrOfValue(arr) {
    return arr;
}
// console.log(getArrOfValue(listNames));
//========================== Bonus ================================================
const successResponse = {
    data: { Id: 101, name: "Laptop", price: 1200, inStock: inStock.ture },
    success: true,
    message: "Product found successfully!"
};
const rejectResponse = {
    data: null,
    success: true,
    message: "is not Find ⛔"
};
function getSuccessProduct(result) {
    if (result.success && result.data) {
        console.log("your Data is ✅ ..." + result.message);
        console.log({
            Id: result.data.Id,
            name: result.data.name,
            price: "$" + result.data.price,
            inStock: result.data.inStock
        });
        return;
    }
    console.log("Your Data  " + result.message);
}
getSuccessProduct(rejectResponse);
