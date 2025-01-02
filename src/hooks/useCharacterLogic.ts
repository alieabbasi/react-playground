import { gql, useSuspenseQuery } from "@apollo/client";

interface Character {
  character: {
    id: string;
    name: string;
    image: string;
    episode: {
      name: string;
      episode: string;
    }[];
  };
}

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacterLogic = (id: string) => {
  const { data, error } = useSuspenseQuery<Character>(GET_CHARACTER, {
    variables: { id },
  });
  return { data, error };
};
