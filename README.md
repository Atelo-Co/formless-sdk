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

TOKEN_SECRET=
TOKEN_IV=

```
