const cart = require("../cart.js");
//const addItem = require("../cart.js");

describe("addItem", function()
{
    test("should return an array with the added item and quantity", 
        function()
        {
            expect(cart.addItem([], "peanut butter", 5)).toEqual([{ 'item': 'peanut butter', 'quantity': 5 }]);
        });

    test("should return an empty array", 
        function()
        {
            expect(cart.addItem([], "chocolate", -5)).toEqual([]);
        });

    test("should return an empty array", 
        function()
        {
            expect(cart.addItem([], "pizza", 0)).toEqual([]);
        });

    test("should return an array with 1 item remaining", 
        function()
        {
            expect(cart.removeItem([{item: "pizza", quantity: 5}, {item: "chocolate", quantity: 10}], "pizza"))
            .toEqual([{item: "chocolate", quantity: 10}]);
        });

    test("should return the original array", 
        function()
        {
            expect(cart.removeItem([{item: "pizza", quantity: 5}], "chocolate"))
            .toEqual([{item: "pizza", quantity: 5}]);
        });

    test("should return an empty array", 
        function()
        {
            expect(cart.removeItem([{item: "pizza", quantity: 5}], "pizza"))
            .toEqual([]);
        });

    test("should return the total quantity of items in cart", 
        function()
        {
            expect(cart.getTotalItems([{item: "pizza", quantity: 5}, {item: "chocolate", quantity: 10}]))
            .toEqual(15);
        });

    test("should return 0 total quantity for empty cart", 
        function()
        {
            expect(cart.getTotalItems([]))
            .toEqual(0);
        });

    test("should return 1,000,000 total quantity for big cart", 
        function()
        {
            expect(cart.getTotalItems([{item: "pizza", quantity: 500000}, {item: "chocolate", quantity: 500000}]))
            .toEqual(1000000);
        });


});







