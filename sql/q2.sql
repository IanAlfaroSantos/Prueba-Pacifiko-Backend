SELECT 
  category,
  COUNT(*) AS total,
  ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM Products), 2) AS percentage
FROM Products
GROUP BY category;