import mongoose, { Schema }  from "mongoose";

const kundliSchema = new Schema(
{
    //Link to User
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }, 

    //Basic MetaData
    title: {
        type: String,
        default: "My Birth Kundli",
        trim: true,
    }, 
    description: {
        type: String,
        default: null,
        trim: true,
    }, 

    //Birth Details (can be same as user, or special chart type)
    dateOfBirth: {
        type: Date,
        required: true,
    },
    timeOfBirth: {
        type: String,
        required: true,
        trim: true,
    },
    placeOfBirth: {
        type: String,
        required: true,
        trim: true,
    },

    //chart Type
    chartType: {
        type: String,
        enum: ["Lagna", "Chandra", "Navamsa", "D9", "Other"],
        default: "Lagna",
    }, 

    //Very simplified Planet structure
    planets:[
        {
            name: {
                type: String,
                enum: ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"]
            },
            sign: {
                type: String,
                enum: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
            },
            house: Number, //1-12
            degree: Number, // 0-360
            isRetro: {
                type: Boolean,
                default: false,
            },
        }
    ],
    
    // Simple houses object (you can normalize later)
    houses: [
    {
        house: Number,
        sign: String,
        lord: String, // e.g., "Jupiter"
        isInKendra: Boolean,   // 1,4,7,10
        isInTrikona: Boolean,  // 1,5,9
    },
    ],

    // Doshas (array of dosha‑objects)
    doshas: [
        {
            name: {
                type: String,
                enum: [
                "Shani Dosha",
                "Mangal Dosha",
                "Kaal Sarp Dosha",
                "Papa Kartari",
                "Guru Chandal Dosha",
                "Nadi Dosha",
                "Pitra Dosha",
                ]
            },
            description: {
                type: String,
                default: null,
            },
            isEffective: {
                type: Boolean,
                default: true,
            }
        }
    ],

    //ChartImage(URL to PNG/SVG from a chart generator)
    chartImage: {
        type: String,
        default: null,
    },
},
{timestamps: true}
);

export const Kundli = mongoose.model("Kundli", kundliSchema);