# @zcloak/crypto

## 1.4.2

### Patch Changes

- Updated dependencies [[`fe10dfb`](https://github.com/zCloak-Network/zkid-sdk/commit/fe10dfb6fe841409993ca6360f5746dde0f93fc9)]:
  - @zcloak/wasm-asm@1.2.0
  - @zcloak/wasm@1.2.0

## 1.4.1

### Patch Changes

- [`8f3f43f`](https://github.com/zCloak-Network/zkid-sdk/commit/8f3f43f285c7e785396055accffc60f706b4a0a4) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - remove babel helper require for cjs

- Updated dependencies [[`8f3f43f`](https://github.com/zCloak-Network/zkid-sdk/commit/8f3f43f285c7e785396055accffc60f706b4a0a4)]:
  - @zcloak/cross@1.0.2
  - @zcloak/wasm@1.1.1
  - @zcloak/wasm-asm@1.1.1
  - @zcloak/wasm-bridge@1.1.2

## 1.4.0

### Minor Changes

- [#75](https://github.com/zCloak-Network/zkid-sdk/pull/75) [`0faffb9`](https://github.com/zCloak-Network/zkid-sdk/commit/0faffb9b9da035d20684cd37cde31dd82d234cac) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - add RescuePrimeOptimized hashType for calc rootHash

### Patch Changes

- [#76](https://github.com/zCloak-Network/zkid-sdk/pull/76) [`46b3ef0`](https://github.com/zCloak-Network/zkid-sdk/commit/46b3ef0598ae1c1251572a235dd1bbce3011d12f) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - update @polkadot/util to 12.1.2

- Updated dependencies [[`46b3ef0`](https://github.com/zCloak-Network/zkid-sdk/commit/46b3ef0598ae1c1251572a235dd1bbce3011d12f)]:
  - @zcloak/wasm-bridge@1.1.1

## 1.3.0

### Minor Changes

- [#73](https://github.com/zCloak-Network/zkid-sdk/pull/73) [`04b22cc`](https://github.com/zCloak-Network/zkid-sdk/commit/04b22ccfe0d58ba67c415323104bad45d0147ce2) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - update rust deps, and add rescuePrimeOptimizedHash function

### Patch Changes

- Updated dependencies [[`04b22cc`](https://github.com/zCloak-Network/zkid-sdk/commit/04b22ccfe0d58ba67c415323104bad45d0147ce2)]:
  - @zcloak/wasm@1.1.0
  - @zcloak/wasm-bridge@1.1.0
  - @zcloak/wasm-asm@1.1.0

## 1.2.5

### Patch Changes

- Updated dependencies [[`ea426de`](https://github.com/zCloak-Network/zkid-sdk/commit/ea426def192cb6762ed8c6a3bf97b5738c3b1f37)]:
  - @zcloak/cross@1.0.1

## 1.2.4

### Patch Changes

- [#70](https://github.com/zCloak-Network/zkid-sdk/pull/70) [`b7987d7`](https://github.com/zCloak-Network/zkid-sdk/commit/b7987d7ce3923226f607d8fe1bf7e5529730e8e3) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - use @zcloak/cross getRandomValues, it use `crypto.getRandomValues` to random.

- Updated dependencies [[`b7987d7`](https://github.com/zCloak-Network/zkid-sdk/commit/b7987d7ce3923226f607d8fe1bf7e5529730e8e3)]:
  - @zcloak/cross@1.0.0

## 1.2.3

### Patch Changes

- [`f4497d8`](https://github.com/zCloak-Network/zkid-sdk/commit/f4497d8b04383507ac068e28f67f6c9539e4b2b7) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - fix esm build assets

- Updated dependencies [[`f4497d8`](https://github.com/zCloak-Network/zkid-sdk/commit/f4497d8b04383507ac068e28f67f6c9539e4b2b7)]:
  - @zcloak/wasm-bridge@1.0.2

## 1.2.2

### Patch Changes

- [#67](https://github.com/zCloak-Network/zkid-sdk/pull/67) [`1636328`](https://github.com/zCloak-Network/zkid-sdk/commit/1636328030fc894ed68186e01113211cdf73c5da) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - import zkid-login to repo

- Updated dependencies [[`1636328`](https://github.com/zCloak-Network/zkid-sdk/commit/1636328030fc894ed68186e01113211cdf73c5da)]:
  - @zcloak/wasm-bridge@1.0.1

## 1.2.1

### Patch Changes

- [#64](https://github.com/zCloak-Network/zkid-sdk/pull/64) [`dee583c`](https://github.com/zCloak-Network/zkid-sdk/commit/dee583c310db267baa744eece9802f3ccc384d1d) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - calc recovery param, support signature when use ethereum sign. See more: https://eips.ethereum.org/EIPS/eip-155

## 1.2.0

### Minor Changes

- [#58](https://github.com/zCloak-Network/zkid-sdk/pull/58) [`c3ad20f`](https://github.com/zCloak-Network/zkid-sdk/commit/c3ad20feaf1d5487d439667162e93c22493c417b) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - add controller sign key for did keyring

  1. publish did document default to use controller key
  2. vp presentation default to use controller key
  3. publish ctype default to use controller key
  4. try to use assertionMethod, if it not exist, use controller to sign vc

## 1.1.0

### Minor Changes

- [#54](https://github.com/zCloak-Network/zkid-sdk/pull/54) [`e259185`](https://github.com/zCloak-Network/zkid-sdk/commit/e259185927d3c10a3e899493cfaf6e02c045bd6b) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - Sining Data change, replace eip712 to eip191.

  - use eip191 to sign data when use `EcdsaSecp256k1VerificationKey2019` VerificationMethodType.
  - upgrade vp version to `1`.
  - verify functions support eip191 message.
  - ctype, document add version field, default to set `0`.

## 1.0.0

### Major Changes

- [#39](https://github.com/zCloak-Network/zkid-sdk/pull/39) [`71a0f07`](https://github.com/zCloak-Network/zkid-sdk/commit/71a0f077b1b4629fc44c351307333ae196e2ad58) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - Config changeset and prepare to coding v1.

### Minor Changes

- [#45](https://github.com/zCloak-Network/zkid-sdk/pull/45) [`872ed45`](https://github.com/zCloak-Network/zkid-sdk/commit/872ed4500aeefb8d5d68cca7b94b2248092b23cb) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - Data signing.

  - add [eip712](https://eips.ethereum.org/EIPS/eip-712) typed struct data hashing.
  - add signTypedData for DidKeyring.
  - vc, vp, ctype, did-document supports signTypedData.
  - verify functions support TypedData.

- [#49](https://github.com/zCloak-Network/zkid-sdk/pull/49) [`f52b7a7`](https://github.com/zCloak-Network/zkid-sdk/commit/f52b7a774c48222cf861426467442f530c0783a4) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - add hdKeyFromSeed function

### Patch Changes

- Updated dependencies [[`71a0f07`](https://github.com/zCloak-Network/zkid-sdk/commit/71a0f077b1b4629fc44c351307333ae196e2ad58)]:
  - @zcloak/wasm-bridge@1.0.0

## 1.0.0-beta.2

### Minor Changes

- [#49](https://github.com/zCloak-Network/zkid-sdk/pull/49) [`f52b7a7`](https://github.com/zCloak-Network/zkid-sdk/commit/f52b7a774c48222cf861426467442f530c0783a4) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - add hdKeyFromSeed function

## 1.0.0-beta.1

### Minor Changes

- [#45](https://github.com/zCloak-Network/zkid-sdk/pull/45) [`872ed45`](https://github.com/zCloak-Network/zkid-sdk/commit/872ed4500aeefb8d5d68cca7b94b2248092b23cb) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - Data signing.

  - add [eip712](https://eips.ethereum.org/EIPS/eip-712) typed struct data hashing.
  - add signTypedData for DidKeyring.
  - vc, vp, ctype, did-document supports signTypedData.
  - verify functions support TypedData.

## 1.0.0-beta.0

### Major Changes

- [#39](https://github.com/zCloak-Network/zkid-sdk/pull/39) [`71a0f07`](https://github.com/zCloak-Network/zkid-sdk/commit/71a0f077b1b4629fc44c351307333ae196e2ad58) Thanks [@zzcwoshizz](https://github.com/zzcwoshizz)! - Config changeset and prepare to coding v1.

### Patch Changes

- Updated dependencies [[`71a0f07`](https://github.com/zCloak-Network/zkid-sdk/commit/71a0f077b1b4629fc44c351307333ae196e2ad58)]:
  - @zcloak/wasm-bridge@1.0.0-beta.0
