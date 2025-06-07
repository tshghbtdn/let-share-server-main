import { Schema } from "mongoose";

export const UserStatusSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    hangoutStatus: Boolean
}, {
    timestamps: true
});
