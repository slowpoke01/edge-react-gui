// @flow
import * as React from 'react'
import { sprintf } from 'sprintf-js'

import s from '../../../locales/strings.js'
import { useDispatch } from '../../../types/reactRedux.js'
import type { RouteProp } from '../../../types/routerTypes'
import { SceneWrapper } from '../../common/SceneWrapper.js'
import { cacheStyles, useTheme } from '../../services/ThemeContext.js'
import { SceneHeader } from '../../themed/SceneHeader.js'

type Props = {
  route: RouteProp<'stakingOverview'>
}

export const StakingOverviewScene = (props: Props) => {
  const { walletId, stakePolicy } = props.route.params
  const theme = useTheme()
  const styles = getStyles(theme)
  const dispatch = useDispatch()

  // const stakeOptions = dispatch(getStakingOptions(walletId))

  return (
    <SceneWrapper background="theme">
      <SceneHeader style={styles.sceneHeader} title={sprintf(s.strings.staking_change_remove_header, 'Tomb')} underline withTopMargin />
    </SceneWrapper>
  )
}

const getStyles = cacheStyles(theme => ({
  sceneHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  currencyLogo: {
    height: theme.rem(1.25),
    width: theme.rem(1.25),
    resizeMode: 'contain',
    marginLeft: theme.rem(1)
  },
  explainer: {
    margin: theme.rem(0.5)
  },
  amountText: {
    fontSize: theme.rem(2)
  },
  sliderContainer: {
    paddingVertical: theme.rem(2)
  },
  errorMessage: {
    color: theme.dangerText
  },
  estReturn: {
    padding: theme.rem(0.75),
    marginTop: theme.rem(1),
    marginHorizontal: theme.rem(2.5),
    borderWidth: theme.thinLineWidth,
    borderColor: theme.cardBorderColor,
    borderRadius: theme.rem(0.5),
    alignItems: 'center',
    justifyContent: 'center'
  }
}))
