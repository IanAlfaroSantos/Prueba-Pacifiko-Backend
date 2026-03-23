USE Catalog;

SELECT id, name, price, category
FROM (
    SELECT 
        id,
        name,
        price,
        category,
        ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rank_num
    FROM Products
) AS ranked
WHERE rank_num <= 10;