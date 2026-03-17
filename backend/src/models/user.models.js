import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import mongoose, { Schema, SchemaType } from "mongoose"


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
            required: true,
        },
        timeofBirth: {
            type: String,
            required: true,
            trim: true,
        },
        placeofBirth:{
            type: String,
            required: true,
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

        //reference to appointments and kundlis
        appointment: [
            {
                type: Schema.Types.ObjectId,
                ref: Appointment,
            }
        ],
        kundli: [
            {
                type: Schema.Types.ObjectId,
                ref: Kundli,
            }
        ],
    },
    {timestamps: true}
)

//Pre save hash password
userSchema.pre("save", async function (next) {
    if(!this.ismodified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
})

//method to compare password
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}