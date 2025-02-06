const mongoose=require("mongoose");

const connectDB=async()=>{
  await mongoose.connect(
    "mongodb+srv://siddhantdwivedi727:SyffQ8854W4xnYSi @namastenode.4utnb.mongodb.net/reviseNode"
  );
}
module.exports= connectDB