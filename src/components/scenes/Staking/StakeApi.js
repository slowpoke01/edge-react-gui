// @flow
// ---------------------------------------------------------------------
// Stake API
// ---------------------------------------------------------------------

import { type EdgeCurrencyWallet, type EdgeToken } from 'edge-core-js'
import { type JsonObject } from 'edge-core-js/src/types/types'

// Staking Policy
// ---------------------------------------------------------------------

// Not sure if this is going be enough because how "LP-staking" works;
// Need to figure out how we deal with LP pool asset-ratios.
export type StakePolicy = {
  // Perhaps we need a UUID for each policy?
  policyId: string,

  // The assets which must be staked
  stakeAssets: {
    [pluginId: string]: {
      [tokenId: string]: boolean
    }
  },

  // The assets which can be earned
  rewardsAssets: {
    [pluginId: string]: {
      [tokenId: string]: boolean
    }
  },

  // Whether claim action is required to obtain reward
  mustClaimRewards: boolean
}

// Stake Quote
// ---------------------------------------------------------------------

export type StakeQuoteRequest = {
  policyId: string,
  wallet: EdgeCurrencyWallet,
  tokenId: string,
  nativeAmount: string
}

export type StakeQuote = {
  stakes: {
    [tokenId: string]: {
      nativeAmount: string
    }
  },

  fees: {
    [tokenId: string]: {
      networkFee: string
    }
  },

  approve: () => Promise<void>
}

export type StakeDetailRequest = {
  policyId: string,
  wallet: EdgeCurrencyWallet
}

// Stake Details
// ---------------------------------------------------------------------

export type StakeDetails = {
  allocations: Array<{
    // The type of asset for this allocation
    token: EdgeToken,
    // The type of the allocation
    allocationType: 'staked' | 'unstaked' | 'earned',
    // Amount of the asset allocated
    nativeAmount: string,

    /*
    A date/time when the allocation is available.
    Example: earned allocations with a future date are not available,
    but earned allocations with a past date are available to be earned.
    For some tokens (e.g. FIO), there is no earned allocation; rather there is
    an unstaked allocation which is locked until the date.
    */
    locktime?: Date,

    // Feel free to add other weird coin states here.
    // We can standardize them later if they are common:
    otherParams?: JsonObject
  }>
}

export type StakePlugin = {
  getStakePolicies: () => Promise<StakePolicy[]>,
  fetchStakeQuote: (request: StakeQuoteRequest) => Promise<StakeQuote>,
  fetchStakeDetails: (request: StakeDetailRequest) => StakeDetails
}

export const getFakeStakePlugin = (walletId: string): StakePlugin => {
  return {
    fetchStakeDetails: (request: StakeDetailRequest) => {
      return {
        allocations: [
          {
            token: {
              currencyCode: 'test1',
              denominations: [],
              displayName: 'testdisplay',
              networkLocation: {}
            },
            allocationType: 'staked',
            nativeAmount: '1000000'
            // lockTime:
          }
        ]
      }
    },
    // TODO: 'rewardAssets'
    getStakePolicies: async (): Promise<StakePolicy[]> => {
      return [
        {
          policyId: 'TOMB->TSHARE',
          stakeAssets: {
            fantom: {
              TOMB: true
            }
          },
          rewardsAssets: {
            fantom: {
              TSHARE: true
            }
          },
          mustClaimRewards: true
        },
        {
          policyId: 'TOMB-FTM->TSHARE',
          stakeAssets: {
            fantom: {
              TOMB: true,
              FTM: true
            }
          },
          rewardsAssets: {
            fantom: {
              TSHARE: true
            }
          },
          mustClaimRewards: true
        },
        {
          policyId: 'TSHARE-FTM->TSHARE',
          stakeAssets: {
            fantom: {
              TSHARE: true,
              FTM: true
            }
          },
          rewardsAssets: {
            fantom: {
              TSHARE: true
            }
          },
          mustClaimRewards: true
        }
      ]
    },
    fetchStakeQuote: async (request: StakeQuoteRequest): Promise<StakeQuote> => {
      return {
        stakes: {
          FTM: {
            nativeAmount: '10000000'
          }
        },

        fees: {
          FTM: {
            networkFee: '500'
          }
        },

        approve: async () => {
          console.log('\x1b[30m\x1b[42mapproved!\x1b[0m')
        }
      }
    }
  }
}
