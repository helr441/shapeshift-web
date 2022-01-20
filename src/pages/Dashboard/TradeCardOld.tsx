import { Card } from 'components/Card/Card'
import { Text } from 'components/Text'
import { TradeOld } from 'components/Trade/TradeOld'

export const TradeCardOld = () => {
  return (
    <Card flex={1} variant='outline'>
      <Card.Header textAlign='center'>
        {/* size=md, variant=solid (default) */}
        <Card.Heading>
          <Text translation='assets.assetCards.assetActions.trade' />
        </Card.Heading>
      </Card.Header>
      <Card.Body>
        {/* size=md, variant=solid (default) */}
        <TradeOld />
      </Card.Body>
    </Card>
  )
}
