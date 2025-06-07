import { Schema } from "mongoose";

export const HangoutSchema = new Schema({
    description: { type: String, required: false, default: "" },
    participants: {type:[{ userId: Schema.Types.ObjectId, ref: "User", required: true, default: "" }],default: []},
    host: { type: Schema.Types.ObjectId, ref: "User", required: true },
    code: { type: String, required: true },
    contracts: {type:[{ type: Schema.Types.ObjectId, ref: "ContractLog" }],default: []},
}, {
    timestamps: true
});
