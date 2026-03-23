import mysql from 'mysql2/promise';

export const dbConnection = async () => {
    try {
        const pool = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            port: Number(process.env.DB_PORT) || 3306,
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || 'admin',
            database: process.env.DB_NAME || 'Catalog',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        const connection = await pool.getConnection();
        console.log('¡¡Conexión a MySQL exitosa!!');
        connection.release();

        return pool;
    } catch (error) {
        console.error('Error al conectar a MySQL:', error);
        throw error;
    }
};