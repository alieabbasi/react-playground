import { gql, useSuspenseQuery } from "@apollo/client";

interface Character {
  id: string;
  name: string;
  image: string;
}

interface CharactersData {
  characters: {
    results: Character[];
  };
}

const GET_CHARACTERS = gql`
  query GetCharacters($search: String) {
    characters(filter: { name: $search }) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharactersListLogic = (search?: string) => {
  const { data, error } = useSuspenseQuery<CharactersData>(GET_CHARACTERS, {
    variables: { search },
  });
  return { data, error };
};
