import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
    {
        //Basic Profile
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        }, 
        phone: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            select: false, //never send password in response
        },
        avatar: {
            type: String, //URL or path to image
            default: null,
        }, 

        //Astro Details
        dateofBirth: {
            type: Date,
            default: null,
        },
        timeofBirth: {
            type: String,
            default:null,
            trim: true,
        },
        placeofBirth:{
            type: String,
            default: null,
            trim: true,
        },

        //Simple Astro profile user can fill after 
        zodiacSign: {
            type: String,
            enum: [
                "Aries", "Taurus", "Gemini", "Cancer",
                "Leo", "Virgo", "Libra", "Scorpio",
                "Sagittarius", "Capricorn", "Aquarius", "Pisces",
            ], 
            default: null,
        }, 
        nakshatra: {
            type: String, 
            default: null,
        },

        //Simple flag to track onboarding
        isProfileComplete:{
            type: Boolean,
            default: false,
        },
        //reference to appointments and kundlis
        appointments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Appointment",
            }
        ],
        kundlis: [
            {
                type: Schema.Types.ObjectId,
                ref: "Kundli",
            }
        ],
        //JWT Refresh Token
        refreshToken: {
            type: String,
            default: null,
        },

        role: {
            type: String, 
            enum: ["user", "admin"],
            default: "user",
        }
    },
    {timestamps: true}
)

//Pre save hash password
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
})

//method to compare password
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

//generate access token (JWT issued per user)
userSchema.methods.generateAccessToken = function () {

    if(!process.env.ACCESS_TOKEN_SECRET)
        throw new Error("ACCESS_TOKEN_SECRET is not defined");

    if(!process.env.ACCESS_TOKEN_EXPIRY)
        throw new Error("ACCESS_TOKEN_EXPIRY is not defined");

    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            name: this.name,
            role: this.role,
            isAdmin: this.role === "admin",
        }, 
        process.env.ACCESS_TOKEN_SECRET, 
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

//generate refresh token (longer‑lived)
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            role: this.role,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User =  mongoose.model("User", userSchema)
