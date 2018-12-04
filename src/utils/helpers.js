//@flow

import { utils } from 'ethers'
import { formatRelative } from 'date-fns'

import type { BN, Numberish } from '../types/common'

export const rand = (min: number, max: number, decimals: number = 4) => {
  return (Math.random() * (max - min) + min).toFixed(decimals)
}

export const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const relativeDate = (time: number) => {
  let formattedDate = formatRelative(time, new Date())
  return capitalizeFirstLetter(formattedDate)
}

export const isFloat = (n: *) => parseFloat(n.match(/^-?\d*(\.\d+)?$/)) > 0

export const isInteger = (n: *) => /^\+?\d+$/.test(n)

export const round = (n: *, decimals: number = 2) => Math.round(n * Math.pow(10, decimals)) / Math.pow(10, decimals)

export const convertPricepointToPrice = (n: any, pricePointMultiplier: number = 1e9, decimals: number = 6) =>
  Math.round((n / pricePointMultiplier) * Math.pow(10, decimals)) / Math.pow(10, decimals)

export const sortTable = (table: *, column: *, order: string = 'asc') => {
  let sortedTable = table.sort((a, b) => compare(a[column], b[column]))
  return order === 'asc' ? sortedTable : sortedTable.reverse()
}

export const compare = (a: *, b: *, order: string = 'asc') => {
  if (typeof a === 'string') {
    a = a.toUpperCase()
    b = b.toUpperCase()
  }

  return a < b ? -1 : 1
}

export const isJson = (text: *) => {
  return /^[\],:{}\s]*$/.test(
    text // eslint-disable-next-line
      .replace(/\\["\\\/bfnrtu]/g, '@') // eslint-disable-next-line
      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
      .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
  )
}


export const computeTokenAmount = (amount: Object, tokenDecimals: number) => {
  return utils.bigNumberify(amount).div(utils.bigNumberify(10).pow(tokenDecimals)).toString()
}

export const computePricepoint = ({ price, priceMultiplier, quoteMultiplier, precisionMultiplier }: *) => {
    let a = price * precisionMultiplier
    let b = a.toFixed(0)
    let c = utils.bigNumberify(b)
    let d = c.mul(priceMultiplier).mul(quoteMultiplier).div(precisionMultiplier)

    return d
} 

export const computeAmountPoints = ({ amount, baseMultiplier, precisionMultiplier }: *) => {
    let a = amount * precisionMultiplier
    let b = a.toFixed(0)
    let c = utils.bigNumberify(b)
    let d = c.mul(baseMultiplier).div(precisionMultiplier)

    return d
}

export const computePairMultiplier = ({ priceMultiplier, baseMultiplier, quoteMultiplier }: *) => {  
    return priceMultiplier.mul(baseMultiplier)
}


export const max = (a: Object, b: Object) => {
  let bigA = utils.bigNumberify(a)
  let bigB = utils.bigNumberify(b)

  if (bigA.gte(bigB)) {
    return bigA
  } else {
    return bigB
  }
}

export const min = (a: Object, b: Object) => {
  let bigA = utils.bigNumberify(a)
  let bigB = utils.bigNumberify(b)

  if (bigA.lte(bigB)) {
    return bigA
  } else {
    return bigB
  }
}

export const minOrderAmount = (makeFee: string, takeFee: string) => {
  let bigMakeFee = utils.bigNumberify(makeFee)
  let bigTakeFee = utils.bigNumberify(takeFee)
  let minAmount = (bigMakeFee.mul(2)).add(bigTakeFee.mul(2))
  
  return minAmount
}