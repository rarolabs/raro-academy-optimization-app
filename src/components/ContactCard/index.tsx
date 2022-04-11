import { ContactProfile } from "../../pages/ContactProfile";
import { Pessoa } from "../../types/Pessoa";
import { ContactActions } from "../ContactActions";

type ContactCardProps = {
  pessoa: Pessoa
  thumbsUp: number;
  thumbsDown: number;
  onClickThumbsUp: () => void;
  onClickThumbsDown: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = (props) => {
  return (
    <li
      key={props.pessoa.email}
      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-2xl divide-y divide-gray-200"
    >
      <ContactProfile
        // pessoa={ props.pessoa }
        {...props}
      />
      <ContactActions
        { ...props }
      />
    </li>
  )
}