export default function handler(req, res) {
  
  const result = {
  proctorGroupValues: [1, 2]
};
  
  
  res.status(400).json(result)
}
