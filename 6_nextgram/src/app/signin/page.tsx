import { signIn, providerMap } from "auth";
import { BsGoogle } from "react-icons/bs";

const icons = [{ name: "Google", icon: <BsGoogle /> }];

export default async function SignInPage() {
  const findIcon = (name: string) => {
    const icon = icons.find((item) => item.name === name);
    return icon?.icon ?? "";
  };

  return (
    <div className="w-1/2 mx-auto my-10 px-4 flex flex-col gap-2">
      <h2 className="text-[2rem] leading-10 font-semibold text-center">
        Acesse ou crie sua conta com uma das opções disponíveis
      </h2>
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            await signIn(provider.id, { redirectTo: "/" });
          }}
          className="mt-10 flex justify-center"
        >
          <button
            type="submit"
            className="h-10 px-6 py-1 font-medium border border-zinc-600 flex items-center gap-2 rounded hover:bg-slate-50"
          >
            {findIcon(provider.name)}
            <span>
              Entrar com o <strong>{provider.name}</strong>
            </span>
          </button>
        </form>
      ))}
    </div>
  );
}
