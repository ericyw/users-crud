import {
  default as create_user,
  fetch_users,
  update_user,
  delete_user
} from "../../service/dbService";

const handler = async (req, res) => {
  try {
    const { method } = req;

    const reqData = req.body;
    const id = reqData["id"];
    console.log("**************************************");
    console.log("reqData: " + reqData);
    console.log("=========================================");
    console.log("id: " + id);

    switch (method) {
      case "POST": {
        const created_user = await create_user(reqData);
          //req.body.userName, req.body.password, req.body.fullName, req.body.phoneNumber, req.body.email, req.body.gender, req.body.birthDate, req.body.status, req.body.type, req.body.desc);
        
        res.status(200).json(created_user);
        break;
      }

      case "GET": {
        //Do some thing
        const all_users = await fetch_users(reqData.userName, reqData.fullName, reqData.phoneNumber, reqData.email);
        res.status(200).json(all_users);
        break;
      }
      
      case "PUT": {
        //Do some thing
        const updated_user = await update_user(reqData);
          //req.body.userName, req.body.password, req.body.fullName, req.body.phoneNumber, req.body.email, 
          //req.body.gender, req.body.birthDate, req.body.status, req.body.type, req.body.desc
        
        res.status(200).json(updated_user);
        break;
      }
      case "DELETE": {
        //Do some thing
        const deleted_user = await delete_user(id);
      
        // res.status(200).send("delete succeed. id: " + id);
        res.status(200).json(deleted_user);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;
