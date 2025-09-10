
function addItem(cart = [], item = "", quantity = 0)
{
    try
    {
        if (!Array.isArray(cart))
        {
            throw new Error("Cart must be an array");
        }
        
        if (typeof item !== "string")
        {
            throw new Error("Item must be a string.");
        }

        if (!item)
        {
            throw new Error("No item was provided.");
        }

        if (item.trim() === "")
        {
            throw new Error("Blank item was provided.");
        }
    
        if (typeof quantity !== "number")
        {
            throw new Error("Quantity must be a number.");
        }

        if (quantity < 1)
        {
            throw new Error("Quantity must be great than 0.");
        }
    
        let newItem =
        {
            item: item,
            quantity: quantity
        };

        cart.push(newItem);

        return cart;
    }

    catch (err)
    {
        console.error(`Error: ${err.message}`);

        return cart;
    }
}

function removeItem(cart, item)
{
    try
    {
        if (!Array.isArray(cart))
        {
            throw new Error("Cart must be an array");
        }

        if ((cart.find((objectName) => objectName.item === item)) === undefined)
        {
            throw new Error("Item not found in cart");
        }

        cart.splice(cart.findIndex((objectName) => objectName.item === item), 1);

        return cart;

    }

    catch (err)
    {
        console.error(`Error: ${err.message}`);

        return cart;
    }
}

function getTotalItems(cart)
{
    try
    {
        if (!Array.isArray(cart))
        {
            throw new Error("Cart must be an array");
        }

        return cart.reduce((total, objectName) => total + objectName.quantity, 0);    
    }

    catch (err)
    {
        console.error(`Error: ${err.message}`);

        return 0;
    }       
}


module.exports =
{
    addItem: addItem,
    removeItem: removeItem,
    getTotalItems: getTotalItems
};

