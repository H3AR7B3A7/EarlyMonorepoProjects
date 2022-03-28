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
import { ratingFormat, currencyFormat } from '@bghoard/review/util-formatters';

/* eslint-disable-next-line */
export interface ReviewFeatureListProps {}

export const ReviewFeatureList = (props: ReviewFeatureListProps) => {
  const games = useGames();
  return (
    <TileGrid>
      {games.map((game) => {
        return (
          <a
            href={'/review/' + game.id}
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
              <TileRightCorner>{currencyFormat(game.price)}</TileRightCorner>
            </Tile>
          </a>
        );
      })}
    </TileGrid>
  );
};

export default ReviewFeatureList;
function priceFormat(price: number): import('react').ReactNode {
  throw new Error('Function not implemented.');
}
