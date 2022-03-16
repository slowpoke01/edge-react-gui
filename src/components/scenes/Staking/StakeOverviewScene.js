// @flow
import * as React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { sprintf } from 'sprintf-js'

import s from '../../../locales/strings.js'
import { useEffect, useState } from '../../../types/reactHooks.js'
import type { RouteProp } from '../../../types/routerTypes'
import { type NavigationProp } from '../../../types/routerTypes.js'
import { getCurrencyIcon } from '../../../util/CurrencyInfoHelpers'
import { SceneWrapper } from '../../common/SceneWrapper.js'
import { cacheStyles, useTheme } from '../../services/ThemeContext.js'
import { Card } from '../../themed/Card.js'
import { EdgeText } from '../../themed/EdgeText'
import { SceneHeader } from '../../themed/SceneHeader.js'
import { type StakePolicy, getFakeStakePlugin } from './StakeApi.js'

type Props = {
  navigation: NavigationProp<'stakeOverview'>,
  route: RouteProp<'stakeOverview'>
}

export const StakeOverviewScene = (props: Props) => {
  console.log('\x1b[34m\x1b[43m' + `'stakeOverview': ${JSON.stringify('stakeOverview', null, 2)}` + '\x1b[0m')
  console.log('\x1b[37m\x1b[41m' + `props: ${JSON.stringify(props, null, 2)}` + '\x1b[0m')
  const { walletId, stakePolicyId } = props.route.params
  const theme = useTheme()
  const styles = getStyles(theme)
  const walletImageUri = getCurrencyIcon('fantom').symbolImage
  const icon = <Image style={styles.icon} source={{ uri: walletImageUri }} />

  return (
    <SceneWrapper background="theme">
      <SceneHeader style={styles.sceneHeader} title={sprintf(s.strings.staking_change_add_header, 'Tomb Overview')} underline withTopMargin />
      <EdgeText>{stakePolicyId}</EdgeText>
      {/* guiStakeOptions.length === 0 ? null : renderOptions(guiStakeOptions) */}
    </SceneWrapper>
  )
}

const renderOptions = (guiStakeOptions: Array<{ bodyText: string, subText: string }>) => {
  // if (guiStakeOptions.length === 0) {
  //   return null
  // } else {
  //   // TODO: No need for  guiStakeOption. Use stakePolicy directly.
  //   return guiStakeOptions.map(guiStakeOption => StakeInfoCard(guiStakeOption.stakePolicyId, guiStakeOption.bodyText, guiStakeOption.subText))
  // }
}

const StakeInfoCard = (stakePolicyId, bodyText, subText) => {
  // return (
  //   <Card key={bodyText}>
  //     <TouchableOpacity onPress={() => handleStakeOptionPress(stakePolicyId)}>
  //       <EdgeText>{bodyText.toString()}</EdgeText>
  //       <EdgeText>{subText.toString()}</EdgeText>
  //     </TouchableOpacity>
  //   </Card>
  // )
}

// const handleStakeOptionPress = (stakePolicyId: string) => {
//   navigation.navigate('stakeOverview', { stakePolicyId })
// }

const getStyles = cacheStyles(theme => ({
  icon: {
    height: theme.rem(1.5),
    width: theme.rem(1.5),
    marginRight: theme.rem(0.5),
    resizeMode: 'contain'
  },
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
