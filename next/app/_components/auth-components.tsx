import { signIn, signOut } from "@/app/api/auth/[...nextauth]/route";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<"button">) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button {...props}>Sign in with {provider}</button>
    </form>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<"button">) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button {...props}>Sign out</button>
    </form>
  );
}
