export const findProductByIdQuery = `
    SELECT id, name, price, category, source, created_at
    FROM Products
    WHERE id = ?
`;

export const findCartItemByProductIdQuery = `
    SELECT id, product_id, quantity, created_at
    FROM CartItems
    WHERE product_id = ?
`;

export const insertCartItemQuery = `
    INSERT INTO CartItems (product_id, quantity)
    VALUES (?, ?)
`;

export const updateCartItemQuantityQuery = `
    UPDATE CartItems
    SET quantity = quantity + ?
    WHERE product_id = ?
`;

export const getCartQuery = `
    SELECT
        c.id,
        c.product_id,
        p.name,
        p.price,
        p.image,
        c.quantity,
        (p.price * c.quantity) AS subtotal,
        c.created_at
    FROM CartItems c
    INNER JOIN Products p ON c.product_id = p.id
    ORDER BY c.id ASC
`;

export const deleteCartItemQuery = `
    DELETE FROM CartItems
    WHERE id = ?
`;

export const clearCartQuery = `
    DELETE FROM CartItems
`;