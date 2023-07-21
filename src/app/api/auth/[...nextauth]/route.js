import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})

export {handler as GET, handler as POST};

// api:
// 1. Gernerate nonce
// 2. Store the nonce in redis: ttl: 1min

// client: 
// 1: get nonce from api
// 2: eth.signMessage sign nonce
// 3: Send nonce, wallet address -> api 

// api:
// 1: Verify message, nonce from client and nonce from redis, wallet address
// 2: generate session token
// 3: Store session token in redis, ttl: 24hrs
// 4: Store session token in user's cookie

// client: reauth
// 1: Check cookie, if exists, send cookie to server


// api:
// 1: Get cookie from client
// 2: Check session token from cookie and redis
// 3: 