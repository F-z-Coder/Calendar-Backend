import userModel, { User } from "@schema/userSchema.js";

const createUser = async (
  email: string,
  name: string,
  picture: string
): Promise<User> => {
  try {
    // Create a new user document
    const user = (
      await userModel.create({ email, name, picture, events: [] })
    ).toJSON();
    return user;
  } catch (error) {
    throw new Error(`Error creating user of email : ${email}`);
  }
};
export default createUser;
