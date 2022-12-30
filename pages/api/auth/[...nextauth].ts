import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import SpotifyProvider from "next-auth/providers/spotify";
import FacebookProvider from "next-auth/providers/facebook";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: AuthOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "couldn't find google id",
      clientSecret: process.env.GOOGLE_SECRET ?? "couldn't find google secret",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID ?? "couldn't find facebook id",
      clientSecret: process.env.FACEBOOK_SECRET ?? "couldn't find facebook secret"
    }),
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID ?? "couldn't find spotify id",
      clientSecret: process.env.SPOTIFY_SECRET ?? "couldn't find spotify secret"
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID ?? "couldn't find discord id",
      clientSecret: process.env.DISCORD_SECRET ?? "couldn't find discord secret"
    })
  ],
  secret: process.env.JWT_SECRET ?? "oh well",


}
export default NextAuth(authOptions);
