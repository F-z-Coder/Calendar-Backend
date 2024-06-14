import userModel, { User } from "@schema/userSchema.js";

const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    // Find the user by email and return a plain JavaScript object
    const user = await userModel.findOne({ email }).lean().exec();
    return user;
  } catch (error) {
    throw new Error(`Error fetching user by email ${email}`);
  }
};

export default getUserByEmail;
