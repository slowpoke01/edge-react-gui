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
  route: RouteProp<'stakeOptions'>,
  navigation: NavigationProp<'stakeOverview'>
}

export const StakeOptionsScene = (props: Props) => {
  const { walletId } = props.route.params
  const { navigation } = props
  const theme = useTheme()
  const styles = getStyles(theme)
  const walletImageUri = getCurrencyIcon('fantom').symbolImage
  const icon = <Image style={styles.icon} source={{ uri: walletImageUri }} />

  const renderOptions = (guiStakeOptions: Array<{ stakePolicyId: string, bodyText: string, subText: string }>) => {
    if (guiStakeOptions.length === 0) {
      return null
    } else {
      // TODO: No need for  guiStakeOption. Use stakePolicy directly.
      return guiStakeOptions.map(guiStakeOption => StakeOptionCard(guiStakeOption.stakePolicyId, guiStakeOption.bodyText, guiStakeOption.subText))
    }
  }

  const handleStakeOptionPress = (stakePolicyId: string) => {
    navigation.navigate('stakeOverview', { walletId: walletId, stakePolicyId: stakePolicyId })
  }

  const StakeOptionCard = (stakePolicyId, bodyText, subText) => {
    return (
      <Card key={bodyText}>
        <TouchableOpacity onPress={() => handleStakeOptionPress(stakePolicyId)}>
          <EdgeText>{bodyText.toString()}</EdgeText>
          <EdgeText>{subText.toString()}</EdgeText>
        </TouchableOpacity>
      </Card>
    )
  }

  const [guiStakeOptions: Array<{ bodyText: string, subText: string }> = [], setGuiStakeOptions] = useState([])
  useEffect(() => {
    async function fetchStakeData() {
      const stakePlugin = getFakeStakePlugin(walletId)
      const stakePolicies = await stakePlugin.getStakePolicies()

      return stakePolicies.map((stakePolicy: StakePolicy) => {
        const stakeChainsArr = Object.keys(stakePolicy.stakeAssets)
        const stakeTokensArr = stakeChainsArr.map(chain => Object.keys(stakePolicy.stakeAssets[chain]))[0]
        const rewardChainsArr = Object.keys(stakePolicy.rewardsAssets)
        const rewardTokensArr = rewardChainsArr.map(chain => Object.keys(stakePolicy.rewardsAssets[chain]))[0]
        const farmName = stakeTokensArr.length > 1 ? `${stakeTokensArr.join('-')}-LP` : stakeTokensArr[0]
        const rewardName = rewardTokensArr.length > 1 ? `${rewardTokensArr.join(', ')}` : rewardTokensArr[0]
        return {
          stakePolicyId: stakePolicy.policyId,
          bodyText: farmName,
          subText: `${farmName} to Earn ${rewardName}`
        }
      })
    }
    fetchStakeData().then(stakeData => {
      setGuiStakeOptions(stakeData)
    })
  }, [walletId])

  // const test = renderOptions(guiStakeOptions)

  return (
    <SceneWrapper background="theme">
      <SceneHeader style={styles.sceneHeader} title={sprintf(s.strings.staking_change_add_header, 'Tomb')} underline withTopMargin>
        {icon}
      </SceneHeader>
      {guiStakeOptions.length === 0 ? null : renderOptions(guiStakeOptions)}
    </SceneWrapper>
  )
}
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
