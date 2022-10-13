// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  const result = {
  session: {
    namespace: 'session',
    data: { group: 'group-a' },
  }
};
  
  
  res.status(200).json(result)
}
