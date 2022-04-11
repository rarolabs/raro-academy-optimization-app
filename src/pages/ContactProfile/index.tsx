import { Pessoa } from "../../types/Pessoa";

type ContactProfileProps = {
  pessoa: Pessoa
}
export const ContactProfile: React.FC<ContactProfileProps> = ({ pessoa }) => {
  console.log('========= render', pessoa.nome)
  return (
    <div className="flex-1 flex flex-col p-8">
      <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={pessoa.foto} alt="" />
      <h3 className="mt-6 text-gray-900 text-sm font-medium">{pessoa.nome}</h3>
      <dl className="mt-1 flex-grow flex flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-500 text-sm">{pessoa.email}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">
          <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
            {pessoa.telefone}
          </span>
        </dd>
      </dl>
    </div>
  );
}