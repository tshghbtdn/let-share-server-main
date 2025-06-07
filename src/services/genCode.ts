import { Counter } from "../models/db"

export const gencode = async (modelName: string): Promise<String> => {
    try {
        const counter = await Counter.findByIdAndUpdate(
            modelName,
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );

        if (!counter || !counter.seq) {
            throw new Error("Error generating code for model: " + modelName);
        }

        return counter.seq.toString(36).toUpperCase();
    } catch (err) {
        console.log("Error generating code:", err);
        throw err;
    }
}