# Next Auth

In your project root, create a .env.local file and add the NEXTAUTH_SECRET environment variable:

```
NEXTAUTH_SECRET="This is an example"
```

NEXTAUTH_SECRET is a random string used by the library to encrypt tokens and email verification hashes, and it's mandatory to keep things secure! 🔥 🔐 . You can use:

```
openssl rand -base64 32
```

or https://generate-secret.vercel.app/32 to generate a random value for it.

## OAuth Configuration 

https://authjs.dev/getting-started/providers/oauth-tutorial#2-configuring-oauth-provider