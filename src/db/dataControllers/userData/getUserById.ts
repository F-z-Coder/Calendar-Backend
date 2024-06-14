import userModel, { User } from "@schema/userSchema.js";

const getUserById = async (id: string): Promise<User | null> => {
  try {
    // Find the user by ID and return a plain JavaScript object
    const user = await userModel.findById(id).lean().exec();
    return user;
  } catch (error) {
    throw new Error(`Error fetching user by ID ${id}`);
  }
};

export default getUserById;
