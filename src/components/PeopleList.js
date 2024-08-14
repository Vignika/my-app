//rfce
import React from 'react'
import { people } from './Lists/data';
import { getImageUrl } from './Lists/Utils';

function PeopleList() {
    // const chemists = people.filter(person =>
    //     person.profession === 'chemist'
    //   );
    //   const listItems = chemists.map(person =>
    //     <li>
    //       <img
    //         src={getImageUrl(person)}
    //         alt={person.name}
    //       />
    //       <p>
    //         <b>{person.name}:</b>
    //         {' ' + person.profession + ' '}
    //         known for {person.accomplishment}
    //       </p>
    //     </li>
    //   );
    //   return <ul>{listItems}</ul>;
    const listItems = people.map(person =>
        <li key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
          </p>
        </li>
      );
      return <ul>{listItems}</ul>;
    }

export default PeopleList