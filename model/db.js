import mongoose from "mongoose"

const currencySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    symbol: {
        type: String
    }
},
{
    timestamps: true,
}
)

const Currency = mongoose.model("Currency", currencySchema)
export default Currency