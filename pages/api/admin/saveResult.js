import saveResult from "../../../lib/admin/saveResult";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const { juryId, id, comment, status } = req.body;
  const resp = await saveResult(juryId, id, comment, status);
  if (resp.rowCount === 1) {
    res.status(200).json({ message: "Success" });
  } else {
    res.status(400).json({ message: "Error" });
  }
}
