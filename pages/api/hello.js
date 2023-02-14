// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const result = {
    payload: "{\"userId\": \"user-id-001\"}",
    payload2: "user-id-002",
    body: req.body
  };
  res.status(200).json(result)
}
