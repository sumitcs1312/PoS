import AWS from 'aws-sdk';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.DYNAMODB_TABLE_NAME || 'YourTableName';

export const fetchProducts = async () => {
    const params = {
        TableName: TABLE_NAME,
    };

    try {
        const data = await dynamoDB.scan(params).promise();
        return data.Items;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Could not fetch products");
    }
};

export const addToCart = async (item) => {
    const params = {
        TableName: TABLE_NAME,
        Item: item,
    };

    try {
        await dynamoDB.put(params).promise();
        return item;
    } catch (error) {
        console.error("Error adding item to cart:", error);
        throw new Error("Could not add item to cart");
    }
};

export const processOrder = async (order) => {
    const params = {
        TableName: TABLE_NAME,
        Item: order,
    };

    try {
        await dynamoDB.put(params).promise();
        return order;
    } catch (error) {
        console.error("Error processing order:", error);
        throw new Error("Could not process order");
    }
};