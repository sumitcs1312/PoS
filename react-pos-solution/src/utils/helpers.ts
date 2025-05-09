export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
};

export const validateInput = (input: string): boolean => {
    return input.trim().length > 0;
};

export const calculateTotal = (items: Array<{ price: number; quantity: number }>): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
};