import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const{Pool}=pkg;
const pool = new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_DBPORT,
});

pool.on("connect",()=>{
    console.log("Connection pool established with Database");
});
pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1); 
});

(async () => {
    try {
        const res = await pool.query("SELECT NOW()");
        console.log("Database connected successfully:", res.rows[0].now);
    } catch (err) {
        console.error("Database connection test failed:", err.message);
        process.exit(-1);
    }
})();
export default pool;