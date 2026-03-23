export const syncProductsQuery = `
    INSERT INTO Products (id, name, price, category, image, source)
    VALUES (?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        price = VALUES(price),
        category = VALUES(category),
        image = VALUES(image),
        source = VALUES(source)
`;

export const getProductsQuery = `
    SELECT id, name, price, category, image, source, created_at
    FROM Products
    LIMIT ? OFFSET ?
`;

export const countProductsQuery = `
    SELECT COUNT(*) AS total
    FROM Products
`;

export const getProductByIdQuery = `
    SELECT id, name, price, category, image, source, created_at
    FROM Products
    WHERE id = ?
`;