# formless

(work with nextjs)

Add to App
``` tsx
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
};
```

Use in every Page

```tsx
const { session, dispatch } = useSession();
```


```ini

TOKEN_SECRET="b3af9d2352b6f1cfb69752fc31dbc619"
TOKEN_IV="anaisIrlyloveYou"

```
