// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromString(""));
    this.set("balance", Value.fromBigInt(BigInt.zero()));
    this.set("transactionCount", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value!.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get transactionCount(): i32 {
    let value = this.get("transactionCount");
    return value!.toI32();
  }

  set transactionCount(value: i32) {
    this.set("transactionCount", Value.fromI32(value));
  }
}

export class TransferBank extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from_address", Value.fromString(""));
    this.set("to_address", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferBank entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TransferBank entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TransferBank", id.toString(), this);
    }
  }

  static load(id: string): TransferBank | null {
    return changetype<TransferBank | null>(store.get("TransferBank", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from_address(): string {
    let value = this.get("from_address");
    return value!.toString();
  }

  set from_address(value: string) {
    this.set("from_address", Value.fromString(value));
  }

  get to_address(): string {
    let value = this.get("to_address");
    return value!.toString();
  }

  set to_address(value: string) {
    this.set("to_address", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class UserCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserCounter entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save UserCounter entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("UserCounter", id.toString(), this);
    }
  }

  static load(id: string): UserCounter | null {
    return changetype<UserCounter | null>(store.get("UserCounter", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value!.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }
}

export class TransferCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromI32(0));
    this.set("totalTransferred", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferCounter entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TransferCounter entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TransferCounter", id.toString(), this);
    }
  }

  static load(id: string): TransferCounter | null {
    return changetype<TransferCounter | null>(store.get("TransferCounter", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value!.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }

  get totalTransferred(): BigInt {
    let value = this.get("totalTransferred");
    return value!.toBigInt();
  }

  set totalTransferred(value: BigInt) {
    this.set("totalTransferred", Value.fromBigInt(value));
  }
}

export class GenesisClaimed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromI32(0));
    this.set("totalBankClaimed", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save GenesisClaimed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save GenesisClaimed entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("GenesisClaimed", id.toString(), this);
    }
  }

  static load(id: string): GenesisClaimed | null {
    return changetype<GenesisClaimed | null>(store.get("GenesisClaimed", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value!.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }

  get totalBankClaimed(): BigInt {
    let value = this.get("totalBankClaimed");
    return value!.toBigInt();
  }

  set totalBankClaimed(value: BigInt) {
    this.set("totalBankClaimed", Value.fromBigInt(value));
  }
}

export class SecondClaimed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromI32(0));
    this.set("totalBankClaimed", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SecondClaimed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save SecondClaimed entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("SecondClaimed", id.toString(), this);
    }
  }

  static load(id: string): SecondClaimed | null {
    return changetype<SecondClaimed | null>(store.get("SecondClaimed", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value!.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }

  get totalBankClaimed(): BigInt {
    let value = this.get("totalBankClaimed");
    return value!.toBigInt();
  }

  set totalBankClaimed(value: BigInt) {
    this.set("totalBankClaimed", Value.fromBigInt(value));
  }
}