
enum inStock{
    ture = 1,
    false = 0,
}
//  I => Interface
interface IProduct{
    Id:number | string,
    name:string,
    price:number,
    inStock:inStock
}
interface IApiResult<T> {
    data: T | null | undefined;
    success: boolean;
    message: string;
}

type ProductOrError = IProduct | string;
// =====================================================================
const product:IProduct = {
    Id:1,
    name:"t-shirt",
    price:500,
    inStock:inStock.false
};


function productDetails(getProduct:ProductOrError):void{
    if(typeof getProduct === "string"||!getProduct.name&& !getProduct.Id)  {
        console.log("your product is undefined!");
        return;
    }
    console.log({
        Id:getProduct.Id,
        name:getProduct.name,
        price:getProduct.price +"$",
        inStock:getProduct.inStock
    });
}
// productDetails(product)

// ===========================generic function wrapValue<T>=======================================

const listNames:string[]=["tareq","mohammed","tareq"];
const listNumbers:number[]=[58,5,12];



function getArrOfValue<T>(arr:T[]) :T[] {
    return arr;
}
// console.log(getArrOfValue(listNames));

//========================== Bonus ================================================

const successResponse: IApiResult<IProduct> = {
    data: { Id: 101, name: "Laptop", price: 1200, inStock: inStock.ture },
    success: true,
    message: "Product found successfully!"
};

const rejectResponse: IApiResult<IProduct> = {
    data:null,
    success: true,
    message: "is not Find ⛔"
};


function getSuccessProduct(result:IApiResult<IProduct>):void{
    if(result.success && result.data){
        console.log("your Data is ✅ ..." + result.message);
        console.log({
            Id:result.data.Id,
            name:result.data.name,
            price:"$" +result.data.price,
            inStock:result.data.inStock
        });
        return;
    }

    console.log("Your Data  " + result.message);
}
getSuccessProduct(rejectResponse);









