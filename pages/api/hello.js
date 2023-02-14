// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const result = {
    payload: "{\"userId\": \"user-id-001\"}",
    body: req.body
  };
  res.status(200).json(result)
}
