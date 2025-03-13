const adminAuth=(req,res,next)=>{
  console.log("Admin auth is getting checked");
  const token="xyz";
  const isAdminauth=  token==="xyz";
  if(!isAdminauth){
    res.status(400).send("Unauthorised request");
  }else{
    next();
  }
};
module.exports= adminAuth;
