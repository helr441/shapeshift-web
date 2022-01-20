import { AnimatePresence } from 'framer-motion'
import { Redirect, Route, RouteProps, Switch, useLocation } from 'react-router-dom'
import { ApprovalOld } from 'components/Approval/ApprovalOld'

import { useTradeRoutes } from '../hooks/useTradeRoutes/useTradeRoutes'
import { SelectAssetOld } from '../SelectAssetOld'
import { TradeConfirmOld } from '../TradeConfirm/TradeConfirmOld'
import { TradeInputOld } from '../TradeInputOld'

export const entries = ['/send/details', '/send/confirm']

export const TradeRoutesOld = () => {
  const location = useLocation()
  const { handleBuyClick, handleSellClick } = useTradeRoutes()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.key}>
        <Route
          path='/trade/select/sell'
          component={(props: RouteProps) => <SelectAssetOld onClick={handleSellClick} {...props} />}
        />
        <Route
          path='/trade/select/buy'
          component={(props: RouteProps) => <SelectAssetOld onClick={handleBuyClick} {...props} />}
        />
        <Route path='/trade/input' component={TradeInputOld} />
        <Route path='/trade/confirm' component={TradeConfirmOld} />
        <Route path='/trade/approval' component={ApprovalOld} />
        <Redirect from='/' to='/trade/input' />
      </Switch>
    </AnimatePresence>
  )
}
