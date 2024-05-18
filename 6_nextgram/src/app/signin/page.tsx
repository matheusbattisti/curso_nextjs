import { signIn, providerMap } from "auth";

export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      <h2>Acesse ou crie sua conta com uma das opções disponíveis</h2>
      {Object.values(providerMap).map((provider) => (
        <form
          action={async () => {
            "use server";
            await signIn(provider.id, { redirectTo: "/" });
          }}
        >
          <button type="submit">
            <span>Entrar com {provider.name}</span>
          </button>
        </form>
      ))}
    </div>
  );
}
