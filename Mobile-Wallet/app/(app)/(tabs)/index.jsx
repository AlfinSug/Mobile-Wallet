import React from 'react';
import { CoinList } from "../../../components/card/CoinList";
import { StyledView } from "../../../constants/styledComponents"
import { CardView } from '../../../components/card/CardView';
// import { trendingCoins } from '../../../constants/trendingCoins';
import { themeColor } from '../../../constants/themeColor';
import { Heading } from '../../../components/typography/Heading';
import { fetchToken } from "../../../utils/tokenhelper/fetchToken";

export default function Tab() {

  const [tokenList, setTokenList] = useState([]);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const url = 'your_token_data_url_here';
        const data = await fetchToken(url);
        setTokenList(data);
      } catch (error) {
        console.error('Error fetching token data:', error);
      }
    };

    fetchTokenData();
  }, []);
  return (
    <StyledView className="container min-h-screen justify-center items-start px-5 pt-16 pb-20 space-y-2" style={{ backgroundColor: themeColor.appBackgroundColor }}>
      <CardView title={`Welcome, Alfin Sugestian`} subtitle={`Make your investment today`} buttonText={`Invest Today`} onPress={() => console.log("Button pressed")} />
      <Heading title={`Trending Coins`} fontSize="xl" setButton={false} />
      <CoinList list={tokenList} isArrow={false} />
    </StyledView >
  );
}