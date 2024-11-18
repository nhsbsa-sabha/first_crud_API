import pool from "../config/db.js";


export const getAllUsersService = async()=>{
   const result = await pool.query("SELECT * FROM users");
   return result.rows;
};

export const getAllUsersByIdService = async(id)=>{
    const result = await pool.query("SELECT * FROM users where id= $1",[id]);
    return result.rows[0]; 
};
export const createUsersService = async(name,email)=>{
  const result= await pool.query("INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *",[name,email]);
  return result.rows[0];
};
export const updateUserService = async(id,name,email)=>{
    const result= await pool.query("UPDATE users SET name=$1,email=$2 where id=$3 RETURNING *",[name,email,id]);
    return result.rows
}
export const deleteUserService = async(id)=>{
    const result= await pool.query("DELETE FROM users WHERE id=$1 RETURNING *",[id]);
    return result.rows[0];
    
}