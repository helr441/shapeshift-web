import { HStack, Stack } from '@chakra-ui/react'

import { RecentTransactions } from './RecentTransactions'
import { TradeCard } from './TradeCard'
import { TradeCardOld } from './TradeCardOld'

export const DashboardSidebar = () => {
  return (
    <HStack spacing={12} alignItems='start'>
      <Stack width='full' spacing={6}>
        <TradeCardOld />
        <RecentTransactions />
      </Stack>

      <Stack width='full' spacing={6}>
        <TradeCard />
        <RecentTransactions />
      </Stack>
    </HStack>
  )
}
