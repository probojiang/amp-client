// @flow
import { Contract, utils } from 'ethers'
import { ERC20, SetupAccount } from '../../../config/abis'
import { EXCHANGE_ADDRESS, SETUP_ACCOUNT_ADDRESS } from '../../../config/contracts'
import { getSigner } from '../signer'
import { ALLOWANCE_THRESHOLD } from '../../../utils/constants'

export async function updateAllowance(
  tokenAddress: string,
  spender: string,
  address: string,
  balance: string,
  txConfirmHandler: boolean => void
) {
  const signer = getSigner()
  const contract = new Contract(tokenAddress, ERC20, signer)
  const tx = await contract.approve(spender, parseFloat(balance))
  const receipt = await signer.provider.waitForTransaction(tx.hash)

  receipt.status === 1
    ? txConfirmHandler(true)
    : txConfirmHandler(false)

}

export async function updateExchangeAllowance(
  tokenAddress: string,
  balance: Object | number,
  txConfirmHandler: boolean => void
) {
  const signer = getSigner()
  const exchange = EXCHANGE_ADDRESS[signer.provider.network.chainId]
  const contract = new Contract(tokenAddress, ERC20, signer)

  const tx = await contract.approve(exchange, balance)
  const receipt = await signer.provider.waitForTransaction(tx.hash)

  receipt.status === 1
    ? txConfirmHandler(true)
    : txConfirmHandler(false)
}


export async function updatePairAllowances(
  baseTokenAddress: string, 
  quoteTokenAddress: string,
  txConfirmHandler: boolean => void,
) {
  const signer = getSigner()
  const networkID = signer.provider.network.chainId
  const setupAccountAddress = SETUP_ACCOUNT_ADDRESS[networkID]
  const exchangeAddress = EXCHANGE_ADDRESS[networkID]
  const txCount = await signer.provider.getTransactionCount(signer.address)

  const baseToken = new Contract(baseTokenAddress, ERC20, signer)
  const quoteToken = new Contract(quoteTokenAddress, ERC20, signer)

  const promise1 = baseToken.approve(exchangeAddress, ALLOWANCE_THRESHOLD, { nonce: txCount })
  const promise2 = quoteToken.approve(exchangeAddress, ALLOWANCE_THRESHOLD, { nonce: txCount + 1 })

  let [ tx1, tx2 ] = await Promise.all([promise1, promise2])

  let [ receipt1, receipt2 ] = await Promise.all([
      signer.provider.waitForTransaction(tx1.hash),
      signer.provider.waitForTransaction(tx2.hash)
  ]);

  (receipt1.status === 0 || receipt2.status === 0)
    ? txConfirmHandler(false)
    : txConfirmHandler(true)

}
  