import {
  BanklessToken,
  Approval,
  DelegateChanged,
  DelegateVotesChanged,
  MinterChanged,
  Transfer as TransferEvent
} from "../generated/BanklessToken/BanklessToken"
import {
  TransferBank,
  User,
  GenesisClaimed,
  SecondClaimed
} from "../generated/schema"
import { BigInt, log } from '@graphprotocol/graph-ts'

export function handleTransfer(event: TransferEvent): void {

  let transfer = new TransferBank(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  transfer.from_address = event.params.from.toHexString()
  transfer.to_address = event.params.to.toHexString()
  transfer.amount = event.params.amount
  transfer.timestamp = event.block.timestamp
  transfer.save()

  let userFrom = User.load(event.params.from.toHexString())
  if (userFrom == null) {
    userFrom = newUser(event.params.from.toHexString(), event.params.from.toHexString());
  }
  userFrom.balance = userFrom.balance.minus(event.params.amount)
  userFrom.transactionCount = userFrom.transactionCount + 1
  userFrom.save()

  log.debug('UserFrom ID: {}, Balance: {}, transaction count: {}', [
    userFrom.id.toString(), // "47596000"
    userFrom.balance.toString(), // "47596000"
    userFrom.transactionCount.toString(), // "0x..."
  ])

  let userTo = User.load(event.params.to.toHexString())
  if (userTo == null) {
    userTo = newUser(event.params.to.toHexString(), event.params.to.toHexString());
  }
  userTo.balance = userTo.balance.plus(event.params.amount)
  userTo.transactionCount = userTo.transactionCount + 1
  userTo.save()

  log.debug('UserTo ID: {}, Balance: {}, transaction count: {}', [
    userTo.id.toString(), // "47596000"
    userTo.balance.toString(), // "47596000"
    userTo.transactionCount.toString(), // "0x..."
  ])

  log.debug('Block number: {}, block hash: {}, transaction hash: {}', [
    event.block.number.toString(), // "47596000"
    event.block.hash.toHexString(), // "0x..."
    event.transaction.hash.toHexString(), // "0x..."
  ])

  log.debug('Transfer from: {}, Transfer to: {}, amount: {}, timestamp: {}', [
    transfer.from_address.toString(), // "47596000"
    transfer.to_address.toString(),
    transfer.amount.toString(), // "0x..."
    transfer.timestamp.toString(), // "0x..."
  ])

  if(transfer.from_address == "0x9d1f1847582261be41f5a54e8b60cad21400c74f") { // Genesis airdrop
    let genesisClaimed = GenesisClaimed.load("1")
    if(genesisClaimed == null) {
      genesisClaimed = new GenesisClaimed("1")
      genesisClaimed.count = 0
      genesisClaimed.totalBankClaimed = BigInt.fromI32(0)
    }
    genesisClaimed.count = genesisClaimed.count + 1
    genesisClaimed.totalBankClaimed = genesisClaimed.totalBankClaimed.plus(transfer.amount)
    genesisClaimed.save()
  }

  if(transfer.from_address == "0xb9fce340e39e6fdfc641564922c1ef2716f70f04") { // 2nd airdrop
    let secondClaimed = SecondClaimed.load("2")
    if(secondClaimed == null) {
      secondClaimed = new SecondClaimed("2")
      secondClaimed.count = 0
      secondClaimed.totalBankClaimed = BigInt.fromI32(0)
    }
    secondClaimed.count = secondClaimed.count + 1
    secondClaimed.totalBankClaimed = secondClaimed.totalBankClaimed.plus(transfer.amount)
    secondClaimed.save()
  }
}

function newUser(id: string, address: string): User {
  let user = new User(id);
  user.address = address
  user.balance = BigInt.fromI32(0)
  user.transactionCount = 0
  return user
}