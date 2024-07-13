import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImg from "../Services/imageUrlCrop";

interface Props {
  onGenreSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
  const { genres, error } = useGenres();

  if (error) return <p>{error}</p>;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImg(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                objectFit="cover"
                onClick={() => onGenreSelect(genre)}
                variant={"link"}
                fontSize={"large"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : ""}
                whiteSpace="normal"
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
