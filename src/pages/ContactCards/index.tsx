import faker from '@faker-js/faker'
import { useState } from 'react'
import { ContactCard } from '../../components/ContactCard'
import { geraPessoas } from '../../helpers/gera-pessoa'
import { Pessoa } from '../../types/Pessoa'


export const ContentCardFaker = () => {
  const [pessoa] = useState<Pessoa>(geraPessoas(1)[0]);
  const [thumbsUp, setThumbsUp] = useState(faker.datatype.number({ min: 10, max: 20 }));
  const [thumbsDown, setThumbsDown] = useState(faker.datatype.number({ min: 10, max: 20 }));

  return (
    <ContactCard
      pessoa={pessoa}
      thumbsUp={thumbsUp}
      thumbsDown={thumbsDown}
      onClickThumbsUp={ () => setThumbsUp(thumbsUp + 1) }
      onClickThumbsDown={ () => setThumbsDown(thumbsDown + 1) }
    />
  );
};

export function ContactCards() {
  const list = Array.from(new Array(20)).map((_, index) => index);
  return (
    <div className="py-12 sm:px-6 lg:px-8 mx-60 my-20">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          list.map((el) => (<ContentCardFaker key={el} /> ))
        }
      </ul>
    </div>
  )
}