import { useGames } from '@bghoard/review/data-access-games';
import {
  ImageWrapper,
  Tile,
  TileGrid,
  Image,
  TileTitle,
  TileLeftCorner,
  TileRightCorner,
} from '@bghoard/review/ui-tile';
import { ratingFormat } from '@bghoard/review/util-formatters';

/* eslint-disable-next-line */
export interface ReviewFeatureListProps {}

export const ReviewFeatureList = (props: ReviewFeatureListProps) => {
  const games = useGames();
  return (
    <TileGrid>
      {games.map((game) => {
        return (
          <a
            href={'/' + game.id}
            key={game.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Tile>
              {game.image && (
                <ImageWrapper>
                  <Image src={game.image} />
                </ImageWrapper>
              )}
              <TileTitle>{game.name}</TileTitle>
              {game.rating && (
                <TileLeftCorner>{ratingFormat(game.rating)}</TileLeftCorner>
              )}
              <TileRightCorner>{game.price}</TileRightCorner>
            </Tile>
          </a>
        );
      })}
    </TileGrid>
  );
};

export default ReviewFeatureList;
