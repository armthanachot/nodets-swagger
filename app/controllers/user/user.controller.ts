const findAll = async (req, res) => {
  try {
    const users = [{
      name: "A",
    }, { name: "B" }];
    return res.status(200).json({ data: users });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
}
const findOne = async(req,res)=>{
  try {
    const {id} = req.params
    const user = {
      name:"Thanachot"
    }
    return res.status(200).json({data:user})
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });

  }
}
const create = async(req,res)=>{
  try {
    const body = req.body
    console.log(body);

    return res.status(200).json({ message: "OK" });

  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });

  }
}

const update = async(req,res)=>{
  try {
    const {id} = req.params
    const body = req.body
    return res.status(200).json({ message: "UPDATED" });

  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });

  }
}
export { findAll,findOne,create,update };
