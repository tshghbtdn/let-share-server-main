import { Schema } from "mongoose";

export const HangoutInvitationSchema = new Schema({
    userId1: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Người gửi
    userId2: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Người nhận
    hangoutId: { type: Schema.Types.ObjectId, ref: "Hangout", required: true }
}, {
    timestamps: true,
    // Tạo index tự động xoá document sau 24h (ví dụ)
    expireAfterSeconds: 60 * 60 * 24 
});

// Tạo TTL index để tự động xoá document khi hết hạn (dựa trên createdAt)
HangoutInvitationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 * 60 * 24 });
