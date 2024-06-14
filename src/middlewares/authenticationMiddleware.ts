import {
  Strategy,
  StrategyOptions,
  VerifyCallback,
  Profile,
} from "passport-google-oauth20";
import passport from "passport";
import { envConst } from "@consts/envConst.js";
import { UserDataInSession } from "types/express/index.js";
import getUserByEmail from "@datacontrollers/userData/getUserByEmail.js";
import createUser from "@datacontrollers/userData/createUser.js";
import { AUTH_GOOGLE_REDIRECT_URL } from "@consts/authConst.js";

const strategyOptions: StrategyOptions = {
  clientID: envConst.GOOGLE_CLIENT_ID,
  clientSecret: envConst.GOOGLE_CLIENT_SECRET,
  scope: ["email", "profile"],
  callbackURL: AUTH_GOOGLE_REDIRECT_URL,
};

async function verify(
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
) {
  try {
    const email = profile._json.email;
    const name = profile._json.name;
    const picture = profile._json.picture;

    if (email && name && picture) {
      const user = await getUserByEmail(email);
      //user already exists
      if (user) {
        const userDataToStoreInSession: UserDataInSession = {
          userid: user._id,
          email: user.email,
          name: user.name,
        };
        //authentication successful store user in session
        done(null, userDataToStoreInSession);
      } else {
        //user not found
        //create a new user
        const newUser = await createUser(email, name, picture);
        const newUserDataToStoreInSession: UserDataInSession = {
          userid: newUser._id,
          email: newUser.email,
          name: newUser.name,
        };
        //authentication successful store user in session
        done(null, newUserDataToStoreInSession);
      }
    }
  } catch (error) {
    //authentication failed
    done(error, false);
  }
}

//Create Strategy
const googleAuthStrategy = new Strategy(strategyOptions, verify);
const authenticationMiddleware = passport;

//register strategy
authenticationMiddleware.use(googleAuthStrategy);

authenticationMiddleware.serializeUser((user, done) => {
  done(null, user);
});
authenticationMiddleware.deserializeUser<UserDataInSession>((user, done) => {
  done(null, user);
});
export default authenticationMiddleware;
