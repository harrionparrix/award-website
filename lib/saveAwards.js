import conn from "./db.js";

export default async function saveAwards(tableName, data, app_id) {
  try {
    if (data.length > 0) {
      const keys = Object.keys(data[0]);
      for (let i = 0; i < data.length; i++) {
        const values = Object.values(data[i]);
        const query = `INSERT INTO ${tableName} (${keys.join(
          ", "
        )}) VALUES (${values.map((v, i) => `$${i + 1}`)})
      ON CONFLICT (id, entry_id) DO UPDATE SET (${keys.join(
        ", "
      )}) = (${values.map((v, i) => `$${i + 1}`)})
      RETURNING id`;

        try {
          const result = await conn.query(query, values);
        } catch (error) {
          console.log("ERROR");
          throw error;
        }
      }
    }

    // data.forEach(async (element) => {
    //   const values = Object.values(element);

    //   const query = `INSERT INTO ${tableName} (${keys.join(
    //     ", "
    //   )}) VALUES (${values.map((v, i) => `$${i + 1}`)})
    //   ON CONFLICT (id, entry_id) DO UPDATE SET (${keys.join(
    //     ", "
    //   )}) = (${values.map((v, i) => `$${i + 1}`)})
    //   RETURNING id`;
    //   try {
    //     const result = await conn.query(query, values);
    //   } catch (error) {
    //     return { message: "error", error: error };
    //   }
    // });
    console.log(app_id);
    const query2 = `UPDATE applicants SET ${tableName}_status =true WHERE id = $1 RETURNING id;`;
    const resp = await conn.query(query2, [app_id]);
    return { message: "success", id: resp.rows[0].id };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
