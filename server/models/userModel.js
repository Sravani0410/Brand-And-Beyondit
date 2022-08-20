const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        isAdmin:{type:Boolean,require:true,default:false},
        mobilenumber:{type:Number,required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
);
//encryted
userSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password, 8);
     this.password=hash;
     return next();
})


//decryted 
userSchema.methods.checkPassword=function(password){
       return bcrypt.compareSync(password,this.password);
}

const User=mongoose.model('User',userSchema)
module.exports=User